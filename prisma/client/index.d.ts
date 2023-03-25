
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  email: string
  profileImage: string | null
  coverImage: string | null
  tel: string | null
  bio: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Party
 * 
 */
export type Party = {
  id: number
  name: string
  userId: number
  shabuShopTableId: number
  startDateTime: Date
  endDateTime: Date
  partyDetail: string | null
  active: boolean
  type: string
  isFull: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model PartyMember
 * 
 */
export type PartyMember = {
  id: number
  partyId: number
  userId: number
  status: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShabuShop
 * 
 */
export type ShabuShop = {
  id: number
  name: string
  shopImage: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShabuShopBranch
 * 
 */
export type ShabuShopBranch = {
  id: number
  shabuShopId: number
  branchName: string
  tel: string
  shopDetail: string | null
  address: string
  openTime: number
  closeTime: number
  latitude: number
  longtitude: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShabuShopTable
 * 
 */
export type ShabuShopTable = {
  id: number
  shabuShopBranchId: number
  seatPerDesk: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model PromotionByShop
 * 
 */
export type PromotionByShop = {
  id: number
  image: string
  shabuShopId: number
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.party`: Exposes CRUD operations for the **Party** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parties
    * const parties = await prisma.party.findMany()
    * ```
    */
  get party(): Prisma.PartyDelegate<GlobalReject>;

  /**
   * `prisma.partyMember`: Exposes CRUD operations for the **PartyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartyMembers
    * const partyMembers = await prisma.partyMember.findMany()
    * ```
    */
  get partyMember(): Prisma.PartyMemberDelegate<GlobalReject>;

  /**
   * `prisma.shabuShop`: Exposes CRUD operations for the **ShabuShop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShabuShops
    * const shabuShops = await prisma.shabuShop.findMany()
    * ```
    */
  get shabuShop(): Prisma.ShabuShopDelegate<GlobalReject>;

  /**
   * `prisma.shabuShopBranch`: Exposes CRUD operations for the **ShabuShopBranch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShabuShopBranches
    * const shabuShopBranches = await prisma.shabuShopBranch.findMany()
    * ```
    */
  get shabuShopBranch(): Prisma.ShabuShopBranchDelegate<GlobalReject>;

  /**
   * `prisma.shabuShopTable`: Exposes CRUD operations for the **ShabuShopTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShabuShopTables
    * const shabuShopTables = await prisma.shabuShopTable.findMany()
    * ```
    */
  get shabuShopTable(): Prisma.ShabuShopTableDelegate<GlobalReject>;

  /**
   * `prisma.promotionByShop`: Exposes CRUD operations for the **PromotionByShop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromotionByShops
    * const promotionByShops = await prisma.promotionByShop.findMany()
    * ```
    */
  get promotionByShop(): Prisma.PromotionByShopDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Party: 'Party',
    PartyMember: 'PartyMember',
    ShabuShop: 'ShabuShop',
    ShabuShopBranch: 'ShabuShopBranch',
    ShabuShopTable: 'ShabuShopTable',
    PromotionByShop: 'PromotionByShop'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    parties: number
    partyMembers: number
  }

  export type UserCountOutputTypeSelect = {
    parties?: boolean
    partyMembers?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PartyCountOutputType
   */


  export type PartyCountOutputType = {
    partyMembers: number
  }

  export type PartyCountOutputTypeSelect = {
    partyMembers?: boolean
  }

  export type PartyCountOutputTypeGetPayload<S extends boolean | null | undefined | PartyCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PartyCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PartyCountOutputTypeArgs)
    ? PartyCountOutputType 
    : S extends { select: any } & (PartyCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PartyCountOutputType ? PartyCountOutputType[P] : never
  } 
      : PartyCountOutputType




  // Custom InputTypes

  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PartyCountOutputType
     */
    select?: PartyCountOutputTypeSelect | null
  }



  /**
   * Count Type ShabuShopCountOutputType
   */


  export type ShabuShopCountOutputType = {
    shabuShopBranchs: number
    promotionByShops: number
  }

  export type ShabuShopCountOutputTypeSelect = {
    shabuShopBranchs?: boolean
    promotionByShops?: boolean
  }

  export type ShabuShopCountOutputTypeGetPayload<S extends boolean | null | undefined | ShabuShopCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShabuShopCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ShabuShopCountOutputTypeArgs)
    ? ShabuShopCountOutputType 
    : S extends { select: any } & (ShabuShopCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ShabuShopCountOutputType ? ShabuShopCountOutputType[P] : never
  } 
      : ShabuShopCountOutputType




  // Custom InputTypes

  /**
   * ShabuShopCountOutputType without action
   */
  export type ShabuShopCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopCountOutputType
     */
    select?: ShabuShopCountOutputTypeSelect | null
  }



  /**
   * Count Type ShabuShopBranchCountOutputType
   */


  export type ShabuShopBranchCountOutputType = {
    shabuShopTables: number
  }

  export type ShabuShopBranchCountOutputTypeSelect = {
    shabuShopTables?: boolean
  }

  export type ShabuShopBranchCountOutputTypeGetPayload<S extends boolean | null | undefined | ShabuShopBranchCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShabuShopBranchCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ShabuShopBranchCountOutputTypeArgs)
    ? ShabuShopBranchCountOutputType 
    : S extends { select: any } & (ShabuShopBranchCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ShabuShopBranchCountOutputType ? ShabuShopBranchCountOutputType[P] : never
  } 
      : ShabuShopBranchCountOutputType




  // Custom InputTypes

  /**
   * ShabuShopBranchCountOutputType without action
   */
  export type ShabuShopBranchCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranchCountOutputType
     */
    select?: ShabuShopBranchCountOutputTypeSelect | null
  }



  /**
   * Count Type ShabuShopTableCountOutputType
   */


  export type ShabuShopTableCountOutputType = {
    parties: number
  }

  export type ShabuShopTableCountOutputTypeSelect = {
    parties?: boolean
  }

  export type ShabuShopTableCountOutputTypeGetPayload<S extends boolean | null | undefined | ShabuShopTableCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShabuShopTableCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ShabuShopTableCountOutputTypeArgs)
    ? ShabuShopTableCountOutputType 
    : S extends { select: any } & (ShabuShopTableCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ShabuShopTableCountOutputType ? ShabuShopTableCountOutputType[P] : never
  } 
      : ShabuShopTableCountOutputType




  // Custom InputTypes

  /**
   * ShabuShopTableCountOutputType without action
   */
  export type ShabuShopTableCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTableCountOutputType
     */
    select?: ShabuShopTableCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    profileImage: string | null
    coverImage: string | null
    tel: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    profileImage: string | null
    coverImage: string | null
    tel: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profileImage: number
    coverImage: number
    tel: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profileImage?: true
    coverImage?: true
    tel?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profileImage?: true
    coverImage?: true
    tel?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profileImage?: true
    coverImage?: true
    tel?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    profileImage: string | null
    coverImage: string | null
    tel: string | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    profileImage?: boolean
    coverImage?: boolean
    tel?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parties?: boolean | User$partiesArgs
    partyMembers?: boolean | User$partyMembersArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    parties?: boolean | User$partiesArgs
    partyMembers?: boolean | User$partyMembersArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'parties' ? Array < PartyGetPayload<S['include'][P]>>  :
        P extends 'partyMembers' ? Array < PartyMemberGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'parties' ? Array < PartyGetPayload<S['select'][P]>>  :
        P extends 'partyMembers' ? Array < PartyMemberGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    parties<T extends User$partiesArgs= {}>(args?: Subset<T, User$partiesArgs>): Prisma.PrismaPromise<Array<PartyGetPayload<T>>| Null>;

    partyMembers<T extends User$partyMembersArgs= {}>(args?: Subset<T, User$partyMembersArgs>): Prisma.PrismaPromise<Array<PartyMemberGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.parties
   */
  export type User$partiesArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    where?: PartyWhereInput
    orderBy?: Enumerable<PartyOrderByWithRelationInput>
    cursor?: PartyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PartyScalarFieldEnum>
  }


  /**
   * User.partyMembers
   */
  export type User$partyMembersArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    where?: PartyMemberWhereInput
    orderBy?: Enumerable<PartyMemberOrderByWithRelationInput>
    cursor?: PartyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PartyMemberScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Party
   */


  export type AggregateParty = {
    _count: PartyCountAggregateOutputType | null
    _avg: PartyAvgAggregateOutputType | null
    _sum: PartySumAggregateOutputType | null
    _min: PartyMinAggregateOutputType | null
    _max: PartyMaxAggregateOutputType | null
  }

  export type PartyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    shabuShopTableId: number | null
  }

  export type PartySumAggregateOutputType = {
    id: number | null
    userId: number | null
    shabuShopTableId: number | null
  }

  export type PartyMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    shabuShopTableId: number | null
    startDateTime: Date | null
    endDateTime: Date | null
    partyDetail: string | null
    active: boolean | null
    type: string | null
    isFull: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    shabuShopTableId: number | null
    startDateTime: Date | null
    endDateTime: Date | null
    partyDetail: string | null
    active: boolean | null
    type: string | null
    isFull: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    shabuShopTableId: number
    startDateTime: number
    endDateTime: number
    partyDetail: number
    active: number
    type: number
    isFull: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartyAvgAggregateInputType = {
    id?: true
    userId?: true
    shabuShopTableId?: true
  }

  export type PartySumAggregateInputType = {
    id?: true
    userId?: true
    shabuShopTableId?: true
  }

  export type PartyMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    shabuShopTableId?: true
    startDateTime?: true
    endDateTime?: true
    partyDetail?: true
    active?: true
    type?: true
    isFull?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    shabuShopTableId?: true
    startDateTime?: true
    endDateTime?: true
    partyDetail?: true
    active?: true
    type?: true
    isFull?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    shabuShopTableId?: true
    startDateTime?: true
    endDateTime?: true
    partyDetail?: true
    active?: true
    type?: true
    isFull?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartyAggregateArgs = {
    /**
     * Filter which Party to aggregate.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: Enumerable<PartyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parties
    **/
    _count?: true | PartyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyMaxAggregateInputType
  }

  export type GetPartyAggregateType<T extends PartyAggregateArgs> = {
        [P in keyof T & keyof AggregateParty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParty[P]>
      : GetScalarType<T[P], AggregateParty[P]>
  }




  export type PartyGroupByArgs = {
    where?: PartyWhereInput
    orderBy?: Enumerable<PartyOrderByWithAggregationInput>
    by: PartyScalarFieldEnum[]
    having?: PartyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyCountAggregateInputType | true
    _avg?: PartyAvgAggregateInputType
    _sum?: PartySumAggregateInputType
    _min?: PartyMinAggregateInputType
    _max?: PartyMaxAggregateInputType
  }


  export type PartyGroupByOutputType = {
    id: number
    name: string
    userId: number
    shabuShopTableId: number
    startDateTime: Date
    endDateTime: Date
    partyDetail: string | null
    active: boolean
    type: string
    isFull: boolean
    createdAt: Date
    updatedAt: Date
    _count: PartyCountAggregateOutputType | null
    _avg: PartyAvgAggregateOutputType | null
    _sum: PartySumAggregateOutputType | null
    _min: PartyMinAggregateOutputType | null
    _max: PartyMaxAggregateOutputType | null
  }

  type GetPartyGroupByPayload<T extends PartyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PartyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyGroupByOutputType[P]>
            : GetScalarType<T[P], PartyGroupByOutputType[P]>
        }
      >
    >


  export type PartySelect = {
    id?: boolean
    name?: boolean
    userId?: boolean
    shabuShopTableId?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    partyDetail?: boolean
    active?: boolean
    type?: boolean
    isFull?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createByUserId?: boolean | UserArgs
    table?: boolean | ShabuShopTableArgs
    partyMembers?: boolean | Party$partyMembersArgs
    _count?: boolean | PartyCountOutputTypeArgs
  }


  export type PartyInclude = {
    createByUserId?: boolean | UserArgs
    table?: boolean | ShabuShopTableArgs
    partyMembers?: boolean | Party$partyMembersArgs
    _count?: boolean | PartyCountOutputTypeArgs
  }

  export type PartyGetPayload<S extends boolean | null | undefined | PartyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Party :
    S extends undefined ? never :
    S extends { include: any } & (PartyArgs | PartyFindManyArgs)
    ? Party  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'createByUserId' ? UserGetPayload<S['include'][P]> :
        P extends 'table' ? ShabuShopTableGetPayload<S['include'][P]> :
        P extends 'partyMembers' ? Array < PartyMemberGetPayload<S['include'][P]>>  :
        P extends '_count' ? PartyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PartyArgs | PartyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'createByUserId' ? UserGetPayload<S['select'][P]> :
        P extends 'table' ? ShabuShopTableGetPayload<S['select'][P]> :
        P extends 'partyMembers' ? Array < PartyMemberGetPayload<S['select'][P]>>  :
        P extends '_count' ? PartyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Party ? Party[P] : never
  } 
      : Party


  type PartyCountArgs = 
    Omit<PartyFindManyArgs, 'select' | 'include'> & {
      select?: PartyCountAggregateInputType | true
    }

  export interface PartyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Party that matches the filter.
     * @param {PartyFindUniqueArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PartyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PartyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Party'> extends True ? Prisma__PartyClient<PartyGetPayload<T>> : Prisma__PartyClient<PartyGetPayload<T> | null, null>

    /**
     * Find one Party that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PartyFindUniqueOrThrowArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PartyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PartyFindUniqueOrThrowArgs>
    ): Prisma__PartyClient<PartyGetPayload<T>>

    /**
     * Find the first Party that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindFirstArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PartyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PartyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Party'> extends True ? Prisma__PartyClient<PartyGetPayload<T>> : Prisma__PartyClient<PartyGetPayload<T> | null, null>

    /**
     * Find the first Party that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindFirstOrThrowArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PartyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PartyFindFirstOrThrowArgs>
    ): Prisma__PartyClient<PartyGetPayload<T>>

    /**
     * Find zero or more Parties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parties
     * const parties = await prisma.party.findMany()
     * 
     * // Get first 10 Parties
     * const parties = await prisma.party.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partyWithIdOnly = await prisma.party.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PartyFindManyArgs>(
      args?: SelectSubset<T, PartyFindManyArgs>
    ): Prisma.PrismaPromise<Array<PartyGetPayload<T>>>

    /**
     * Create a Party.
     * @param {PartyCreateArgs} args - Arguments to create a Party.
     * @example
     * // Create one Party
     * const Party = await prisma.party.create({
     *   data: {
     *     // ... data to create a Party
     *   }
     * })
     * 
    **/
    create<T extends PartyCreateArgs>(
      args: SelectSubset<T, PartyCreateArgs>
    ): Prisma__PartyClient<PartyGetPayload<T>>

    /**
     * Create many Parties.
     *     @param {PartyCreateManyArgs} args - Arguments to create many Parties.
     *     @example
     *     // Create many Parties
     *     const party = await prisma.party.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PartyCreateManyArgs>(
      args?: SelectSubset<T, PartyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Party.
     * @param {PartyDeleteArgs} args - Arguments to delete one Party.
     * @example
     * // Delete one Party
     * const Party = await prisma.party.delete({
     *   where: {
     *     // ... filter to delete one Party
     *   }
     * })
     * 
    **/
    delete<T extends PartyDeleteArgs>(
      args: SelectSubset<T, PartyDeleteArgs>
    ): Prisma__PartyClient<PartyGetPayload<T>>

    /**
     * Update one Party.
     * @param {PartyUpdateArgs} args - Arguments to update one Party.
     * @example
     * // Update one Party
     * const party = await prisma.party.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PartyUpdateArgs>(
      args: SelectSubset<T, PartyUpdateArgs>
    ): Prisma__PartyClient<PartyGetPayload<T>>

    /**
     * Delete zero or more Parties.
     * @param {PartyDeleteManyArgs} args - Arguments to filter Parties to delete.
     * @example
     * // Delete a few Parties
     * const { count } = await prisma.party.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PartyDeleteManyArgs>(
      args?: SelectSubset<T, PartyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parties
     * const party = await prisma.party.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PartyUpdateManyArgs>(
      args: SelectSubset<T, PartyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Party.
     * @param {PartyUpsertArgs} args - Arguments to update or create a Party.
     * @example
     * // Update or create a Party
     * const party = await prisma.party.upsert({
     *   create: {
     *     // ... data to create a Party
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Party we want to update
     *   }
     * })
    **/
    upsert<T extends PartyUpsertArgs>(
      args: SelectSubset<T, PartyUpsertArgs>
    ): Prisma__PartyClient<PartyGetPayload<T>>

    /**
     * Count the number of Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCountArgs} args - Arguments to filter Parties to count.
     * @example
     * // Count the number of Parties
     * const count = await prisma.party.count({
     *   where: {
     *     // ... the filter for the Parties we want to count
     *   }
     * })
    **/
    count<T extends PartyCountArgs>(
      args?: Subset<T, PartyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Party.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartyAggregateArgs>(args: Subset<T, PartyAggregateArgs>): Prisma.PrismaPromise<GetPartyAggregateType<T>>

    /**
     * Group by Party.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyGroupByArgs['orderBy'] }
        : { orderBy?: PartyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Party.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PartyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    createByUserId<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    table<T extends ShabuShopTableArgs= {}>(args?: Subset<T, ShabuShopTableArgs>): Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T> | Null>;

    partyMembers<T extends Party$partyMembersArgs= {}>(args?: Subset<T, Party$partyMembersArgs>): Prisma.PrismaPromise<Array<PartyMemberGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Party base type for findUnique actions
   */
  export type PartyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * Filter, which Party to fetch.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party findUnique
   */
  export interface PartyFindUniqueArgs extends PartyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Party findUniqueOrThrow
   */
  export type PartyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * Filter, which Party to fetch.
     */
    where: PartyWhereUniqueInput
  }


  /**
   * Party base type for findFirst actions
   */
  export type PartyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * Filter, which Party to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: Enumerable<PartyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: Enumerable<PartyScalarFieldEnum>
  }

  /**
   * Party findFirst
   */
  export interface PartyFindFirstArgs extends PartyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Party findFirstOrThrow
   */
  export type PartyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * Filter, which Party to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: Enumerable<PartyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: Enumerable<PartyScalarFieldEnum>
  }


  /**
   * Party findMany
   */
  export type PartyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * Filter, which Parties to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: Enumerable<PartyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    distinct?: Enumerable<PartyScalarFieldEnum>
  }


  /**
   * Party create
   */
  export type PartyCreateArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * The data needed to create a Party.
     */
    data: XOR<PartyCreateInput, PartyUncheckedCreateInput>
  }


  /**
   * Party createMany
   */
  export type PartyCreateManyArgs = {
    /**
     * The data used to create many Parties.
     */
    data: Enumerable<PartyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Party update
   */
  export type PartyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * The data needed to update a Party.
     */
    data: XOR<PartyUpdateInput, PartyUncheckedUpdateInput>
    /**
     * Choose, which Party to update.
     */
    where: PartyWhereUniqueInput
  }


  /**
   * Party updateMany
   */
  export type PartyUpdateManyArgs = {
    /**
     * The data used to update Parties.
     */
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartyWhereInput
  }


  /**
   * Party upsert
   */
  export type PartyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * The filter to search for the Party to update in case it exists.
     */
    where: PartyWhereUniqueInput
    /**
     * In case the Party found by the `where` argument doesn't exist, create a new Party with this data.
     */
    create: XOR<PartyCreateInput, PartyUncheckedCreateInput>
    /**
     * In case the Party was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyUpdateInput, PartyUncheckedUpdateInput>
  }


  /**
   * Party delete
   */
  export type PartyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    /**
     * Filter which Party to delete.
     */
    where: PartyWhereUniqueInput
  }


  /**
   * Party deleteMany
   */
  export type PartyDeleteManyArgs = {
    /**
     * Filter which Parties to delete
     */
    where?: PartyWhereInput
  }


  /**
   * Party.partyMembers
   */
  export type Party$partyMembersArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    where?: PartyMemberWhereInput
    orderBy?: Enumerable<PartyMemberOrderByWithRelationInput>
    cursor?: PartyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PartyMemberScalarFieldEnum>
  }


  /**
   * Party without action
   */
  export type PartyArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
  }



  /**
   * Model PartyMember
   */


  export type AggregatePartyMember = {
    _count: PartyMemberCountAggregateOutputType | null
    _avg: PartyMemberAvgAggregateOutputType | null
    _sum: PartyMemberSumAggregateOutputType | null
    _min: PartyMemberMinAggregateOutputType | null
    _max: PartyMemberMaxAggregateOutputType | null
  }

  export type PartyMemberAvgAggregateOutputType = {
    id: number | null
    partyId: number | null
    userId: number | null
  }

  export type PartyMemberSumAggregateOutputType = {
    id: number | null
    partyId: number | null
    userId: number | null
  }

  export type PartyMemberMinAggregateOutputType = {
    id: number | null
    partyId: number | null
    userId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyMemberMaxAggregateOutputType = {
    id: number | null
    partyId: number | null
    userId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyMemberCountAggregateOutputType = {
    id: number
    partyId: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartyMemberAvgAggregateInputType = {
    id?: true
    partyId?: true
    userId?: true
  }

  export type PartyMemberSumAggregateInputType = {
    id?: true
    partyId?: true
    userId?: true
  }

  export type PartyMemberMinAggregateInputType = {
    id?: true
    partyId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyMemberMaxAggregateInputType = {
    id?: true
    partyId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyMemberCountAggregateInputType = {
    id?: true
    partyId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartyMemberAggregateArgs = {
    /**
     * Filter which PartyMember to aggregate.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: Enumerable<PartyMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartyMembers
    **/
    _count?: true | PartyMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartyMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartyMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyMemberMaxAggregateInputType
  }

  export type GetPartyMemberAggregateType<T extends PartyMemberAggregateArgs> = {
        [P in keyof T & keyof AggregatePartyMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartyMember[P]>
      : GetScalarType<T[P], AggregatePartyMember[P]>
  }




  export type PartyMemberGroupByArgs = {
    where?: PartyMemberWhereInput
    orderBy?: Enumerable<PartyMemberOrderByWithAggregationInput>
    by: PartyMemberScalarFieldEnum[]
    having?: PartyMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyMemberCountAggregateInputType | true
    _avg?: PartyMemberAvgAggregateInputType
    _sum?: PartyMemberSumAggregateInputType
    _min?: PartyMemberMinAggregateInputType
    _max?: PartyMemberMaxAggregateInputType
  }


  export type PartyMemberGroupByOutputType = {
    id: number
    partyId: number
    userId: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: PartyMemberCountAggregateOutputType | null
    _avg: PartyMemberAvgAggregateOutputType | null
    _sum: PartyMemberSumAggregateOutputType | null
    _min: PartyMemberMinAggregateOutputType | null
    _max: PartyMemberMaxAggregateOutputType | null
  }

  type GetPartyMemberGroupByPayload<T extends PartyMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PartyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], PartyMemberGroupByOutputType[P]>
        }
      >
    >


  export type PartyMemberSelect = {
    id?: boolean
    partyId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    party?: boolean | PartyArgs
    user?: boolean | UserArgs
  }


  export type PartyMemberInclude = {
    party?: boolean | PartyArgs
    user?: boolean | UserArgs
  }

  export type PartyMemberGetPayload<S extends boolean | null | undefined | PartyMemberArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PartyMember :
    S extends undefined ? never :
    S extends { include: any } & (PartyMemberArgs | PartyMemberFindManyArgs)
    ? PartyMember  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'party' ? PartyGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PartyMemberArgs | PartyMemberFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'party' ? PartyGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof PartyMember ? PartyMember[P] : never
  } 
      : PartyMember


  type PartyMemberCountArgs = 
    Omit<PartyMemberFindManyArgs, 'select' | 'include'> & {
      select?: PartyMemberCountAggregateInputType | true
    }

  export interface PartyMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PartyMember that matches the filter.
     * @param {PartyMemberFindUniqueArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PartyMemberFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PartyMemberFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PartyMember'> extends True ? Prisma__PartyMemberClient<PartyMemberGetPayload<T>> : Prisma__PartyMemberClient<PartyMemberGetPayload<T> | null, null>

    /**
     * Find one PartyMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PartyMemberFindUniqueOrThrowArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PartyMemberFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PartyMemberFindUniqueOrThrowArgs>
    ): Prisma__PartyMemberClient<PartyMemberGetPayload<T>>

    /**
     * Find the first PartyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindFirstArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PartyMemberFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PartyMemberFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PartyMember'> extends True ? Prisma__PartyMemberClient<PartyMemberGetPayload<T>> : Prisma__PartyMemberClient<PartyMemberGetPayload<T> | null, null>

    /**
     * Find the first PartyMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindFirstOrThrowArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PartyMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PartyMemberFindFirstOrThrowArgs>
    ): Prisma__PartyMemberClient<PartyMemberGetPayload<T>>

    /**
     * Find zero or more PartyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartyMembers
     * const partyMembers = await prisma.partyMember.findMany()
     * 
     * // Get first 10 PartyMembers
     * const partyMembers = await prisma.partyMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partyMemberWithIdOnly = await prisma.partyMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PartyMemberFindManyArgs>(
      args?: SelectSubset<T, PartyMemberFindManyArgs>
    ): Prisma.PrismaPromise<Array<PartyMemberGetPayload<T>>>

    /**
     * Create a PartyMember.
     * @param {PartyMemberCreateArgs} args - Arguments to create a PartyMember.
     * @example
     * // Create one PartyMember
     * const PartyMember = await prisma.partyMember.create({
     *   data: {
     *     // ... data to create a PartyMember
     *   }
     * })
     * 
    **/
    create<T extends PartyMemberCreateArgs>(
      args: SelectSubset<T, PartyMemberCreateArgs>
    ): Prisma__PartyMemberClient<PartyMemberGetPayload<T>>

    /**
     * Create many PartyMembers.
     *     @param {PartyMemberCreateManyArgs} args - Arguments to create many PartyMembers.
     *     @example
     *     // Create many PartyMembers
     *     const partyMember = await prisma.partyMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PartyMemberCreateManyArgs>(
      args?: SelectSubset<T, PartyMemberCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartyMember.
     * @param {PartyMemberDeleteArgs} args - Arguments to delete one PartyMember.
     * @example
     * // Delete one PartyMember
     * const PartyMember = await prisma.partyMember.delete({
     *   where: {
     *     // ... filter to delete one PartyMember
     *   }
     * })
     * 
    **/
    delete<T extends PartyMemberDeleteArgs>(
      args: SelectSubset<T, PartyMemberDeleteArgs>
    ): Prisma__PartyMemberClient<PartyMemberGetPayload<T>>

    /**
     * Update one PartyMember.
     * @param {PartyMemberUpdateArgs} args - Arguments to update one PartyMember.
     * @example
     * // Update one PartyMember
     * const partyMember = await prisma.partyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PartyMemberUpdateArgs>(
      args: SelectSubset<T, PartyMemberUpdateArgs>
    ): Prisma__PartyMemberClient<PartyMemberGetPayload<T>>

    /**
     * Delete zero or more PartyMembers.
     * @param {PartyMemberDeleteManyArgs} args - Arguments to filter PartyMembers to delete.
     * @example
     * // Delete a few PartyMembers
     * const { count } = await prisma.partyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PartyMemberDeleteManyArgs>(
      args?: SelectSubset<T, PartyMemberDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartyMembers
     * const partyMember = await prisma.partyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PartyMemberUpdateManyArgs>(
      args: SelectSubset<T, PartyMemberUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartyMember.
     * @param {PartyMemberUpsertArgs} args - Arguments to update or create a PartyMember.
     * @example
     * // Update or create a PartyMember
     * const partyMember = await prisma.partyMember.upsert({
     *   create: {
     *     // ... data to create a PartyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartyMember we want to update
     *   }
     * })
    **/
    upsert<T extends PartyMemberUpsertArgs>(
      args: SelectSubset<T, PartyMemberUpsertArgs>
    ): Prisma__PartyMemberClient<PartyMemberGetPayload<T>>

    /**
     * Count the number of PartyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberCountArgs} args - Arguments to filter PartyMembers to count.
     * @example
     * // Count the number of PartyMembers
     * const count = await prisma.partyMember.count({
     *   where: {
     *     // ... the filter for the PartyMembers we want to count
     *   }
     * })
    **/
    count<T extends PartyMemberCountArgs>(
      args?: Subset<T, PartyMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartyMemberAggregateArgs>(args: Subset<T, PartyMemberAggregateArgs>): Prisma.PrismaPromise<GetPartyMemberAggregateType<T>>

    /**
     * Group by PartyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyMemberGroupByArgs['orderBy'] }
        : { orderBy?: PartyMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PartyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PartyMemberClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    party<T extends PartyArgs= {}>(args?: Subset<T, PartyArgs>): Prisma__PartyClient<PartyGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PartyMember base type for findUnique actions
   */
  export type PartyMemberFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember findUnique
   */
  export interface PartyMemberFindUniqueArgs extends PartyMemberFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PartyMember findUniqueOrThrow
   */
  export type PartyMemberFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where: PartyMemberWhereUniqueInput
  }


  /**
   * PartyMember base type for findFirst actions
   */
  export type PartyMemberFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: Enumerable<PartyMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyMembers.
     */
    distinct?: Enumerable<PartyMemberScalarFieldEnum>
  }

  /**
   * PartyMember findFirst
   */
  export interface PartyMemberFindFirstArgs extends PartyMemberFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PartyMember findFirstOrThrow
   */
  export type PartyMemberFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: Enumerable<PartyMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyMembers.
     */
    distinct?: Enumerable<PartyMemberScalarFieldEnum>
  }


  /**
   * PartyMember findMany
   */
  export type PartyMemberFindManyArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * Filter, which PartyMembers to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: Enumerable<PartyMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    distinct?: Enumerable<PartyMemberScalarFieldEnum>
  }


  /**
   * PartyMember create
   */
  export type PartyMemberCreateArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * The data needed to create a PartyMember.
     */
    data: XOR<PartyMemberCreateInput, PartyMemberUncheckedCreateInput>
  }


  /**
   * PartyMember createMany
   */
  export type PartyMemberCreateManyArgs = {
    /**
     * The data used to create many PartyMembers.
     */
    data: Enumerable<PartyMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PartyMember update
   */
  export type PartyMemberUpdateArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * The data needed to update a PartyMember.
     */
    data: XOR<PartyMemberUpdateInput, PartyMemberUncheckedUpdateInput>
    /**
     * Choose, which PartyMember to update.
     */
    where: PartyMemberWhereUniqueInput
  }


  /**
   * PartyMember updateMany
   */
  export type PartyMemberUpdateManyArgs = {
    /**
     * The data used to update PartyMembers.
     */
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyInput>
    /**
     * Filter which PartyMembers to update
     */
    where?: PartyMemberWhereInput
  }


  /**
   * PartyMember upsert
   */
  export type PartyMemberUpsertArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * The filter to search for the PartyMember to update in case it exists.
     */
    where: PartyMemberWhereUniqueInput
    /**
     * In case the PartyMember found by the `where` argument doesn't exist, create a new PartyMember with this data.
     */
    create: XOR<PartyMemberCreateInput, PartyMemberUncheckedCreateInput>
    /**
     * In case the PartyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyMemberUpdateInput, PartyMemberUncheckedUpdateInput>
  }


  /**
   * PartyMember delete
   */
  export type PartyMemberDeleteArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
    /**
     * Filter which PartyMember to delete.
     */
    where: PartyMemberWhereUniqueInput
  }


  /**
   * PartyMember deleteMany
   */
  export type PartyMemberDeleteManyArgs = {
    /**
     * Filter which PartyMembers to delete
     */
    where?: PartyMemberWhereInput
  }


  /**
   * PartyMember without action
   */
  export type PartyMemberArgs = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyMemberInclude | null
  }



  /**
   * Model ShabuShop
   */


  export type AggregateShabuShop = {
    _count: ShabuShopCountAggregateOutputType | null
    _avg: ShabuShopAvgAggregateOutputType | null
    _sum: ShabuShopSumAggregateOutputType | null
    _min: ShabuShopMinAggregateOutputType | null
    _max: ShabuShopMaxAggregateOutputType | null
  }

  export type ShabuShopAvgAggregateOutputType = {
    id: number | null
  }

  export type ShabuShopSumAggregateOutputType = {
    id: number | null
  }

  export type ShabuShopMinAggregateOutputType = {
    id: number | null
    name: string | null
    shopImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShabuShopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    shopImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShabuShopCountAggregateOutputType = {
    id: number
    name: number
    shopImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShabuShopAvgAggregateInputType = {
    id?: true
  }

  export type ShabuShopSumAggregateInputType = {
    id?: true
  }

  export type ShabuShopMinAggregateInputType = {
    id?: true
    name?: true
    shopImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShabuShopMaxAggregateInputType = {
    id?: true
    name?: true
    shopImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShabuShopCountAggregateInputType = {
    id?: true
    name?: true
    shopImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShabuShopAggregateArgs = {
    /**
     * Filter which ShabuShop to aggregate.
     */
    where?: ShabuShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShops to fetch.
     */
    orderBy?: Enumerable<ShabuShopOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShabuShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShabuShops
    **/
    _count?: true | ShabuShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShabuShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShabuShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShabuShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShabuShopMaxAggregateInputType
  }

  export type GetShabuShopAggregateType<T extends ShabuShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShabuShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShabuShop[P]>
      : GetScalarType<T[P], AggregateShabuShop[P]>
  }




  export type ShabuShopGroupByArgs = {
    where?: ShabuShopWhereInput
    orderBy?: Enumerable<ShabuShopOrderByWithAggregationInput>
    by: ShabuShopScalarFieldEnum[]
    having?: ShabuShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShabuShopCountAggregateInputType | true
    _avg?: ShabuShopAvgAggregateInputType
    _sum?: ShabuShopSumAggregateInputType
    _min?: ShabuShopMinAggregateInputType
    _max?: ShabuShopMaxAggregateInputType
  }


  export type ShabuShopGroupByOutputType = {
    id: number
    name: string
    shopImage: string
    createdAt: Date
    updatedAt: Date
    _count: ShabuShopCountAggregateOutputType | null
    _avg: ShabuShopAvgAggregateOutputType | null
    _sum: ShabuShopSumAggregateOutputType | null
    _min: ShabuShopMinAggregateOutputType | null
    _max: ShabuShopMaxAggregateOutputType | null
  }

  type GetShabuShopGroupByPayload<T extends ShabuShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ShabuShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShabuShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShabuShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShabuShopGroupByOutputType[P]>
        }
      >
    >


  export type ShabuShopSelect = {
    id?: boolean
    name?: boolean
    shopImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shabuShopBranchs?: boolean | ShabuShop$shabuShopBranchsArgs
    promotionByShops?: boolean | ShabuShop$promotionByShopsArgs
    _count?: boolean | ShabuShopCountOutputTypeArgs
  }


  export type ShabuShopInclude = {
    shabuShopBranchs?: boolean | ShabuShop$shabuShopBranchsArgs
    promotionByShops?: boolean | ShabuShop$promotionByShopsArgs
    _count?: boolean | ShabuShopCountOutputTypeArgs
  }

  export type ShabuShopGetPayload<S extends boolean | null | undefined | ShabuShopArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShabuShop :
    S extends undefined ? never :
    S extends { include: any } & (ShabuShopArgs | ShabuShopFindManyArgs)
    ? ShabuShop  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'shabuShopBranchs' ? Array < ShabuShopBranchGetPayload<S['include'][P]>>  :
        P extends 'promotionByShops' ? Array < PromotionByShopGetPayload<S['include'][P]>>  :
        P extends '_count' ? ShabuShopCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ShabuShopArgs | ShabuShopFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'shabuShopBranchs' ? Array < ShabuShopBranchGetPayload<S['select'][P]>>  :
        P extends 'promotionByShops' ? Array < PromotionByShopGetPayload<S['select'][P]>>  :
        P extends '_count' ? ShabuShopCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ShabuShop ? ShabuShop[P] : never
  } 
      : ShabuShop


  type ShabuShopCountArgs = 
    Omit<ShabuShopFindManyArgs, 'select' | 'include'> & {
      select?: ShabuShopCountAggregateInputType | true
    }

  export interface ShabuShopDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ShabuShop that matches the filter.
     * @param {ShabuShopFindUniqueArgs} args - Arguments to find a ShabuShop
     * @example
     * // Get one ShabuShop
     * const shabuShop = await prisma.shabuShop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShabuShopFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShabuShopFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShabuShop'> extends True ? Prisma__ShabuShopClient<ShabuShopGetPayload<T>> : Prisma__ShabuShopClient<ShabuShopGetPayload<T> | null, null>

    /**
     * Find one ShabuShop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShabuShopFindUniqueOrThrowArgs} args - Arguments to find a ShabuShop
     * @example
     * // Get one ShabuShop
     * const shabuShop = await prisma.shabuShop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShabuShopFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShabuShopFindUniqueOrThrowArgs>
    ): Prisma__ShabuShopClient<ShabuShopGetPayload<T>>

    /**
     * Find the first ShabuShop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopFindFirstArgs} args - Arguments to find a ShabuShop
     * @example
     * // Get one ShabuShop
     * const shabuShop = await prisma.shabuShop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShabuShopFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShabuShopFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShabuShop'> extends True ? Prisma__ShabuShopClient<ShabuShopGetPayload<T>> : Prisma__ShabuShopClient<ShabuShopGetPayload<T> | null, null>

    /**
     * Find the first ShabuShop that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopFindFirstOrThrowArgs} args - Arguments to find a ShabuShop
     * @example
     * // Get one ShabuShop
     * const shabuShop = await prisma.shabuShop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShabuShopFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShabuShopFindFirstOrThrowArgs>
    ): Prisma__ShabuShopClient<ShabuShopGetPayload<T>>

    /**
     * Find zero or more ShabuShops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShabuShops
     * const shabuShops = await prisma.shabuShop.findMany()
     * 
     * // Get first 10 ShabuShops
     * const shabuShops = await prisma.shabuShop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shabuShopWithIdOnly = await prisma.shabuShop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShabuShopFindManyArgs>(
      args?: SelectSubset<T, ShabuShopFindManyArgs>
    ): Prisma.PrismaPromise<Array<ShabuShopGetPayload<T>>>

    /**
     * Create a ShabuShop.
     * @param {ShabuShopCreateArgs} args - Arguments to create a ShabuShop.
     * @example
     * // Create one ShabuShop
     * const ShabuShop = await prisma.shabuShop.create({
     *   data: {
     *     // ... data to create a ShabuShop
     *   }
     * })
     * 
    **/
    create<T extends ShabuShopCreateArgs>(
      args: SelectSubset<T, ShabuShopCreateArgs>
    ): Prisma__ShabuShopClient<ShabuShopGetPayload<T>>

    /**
     * Create many ShabuShops.
     *     @param {ShabuShopCreateManyArgs} args - Arguments to create many ShabuShops.
     *     @example
     *     // Create many ShabuShops
     *     const shabuShop = await prisma.shabuShop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShabuShopCreateManyArgs>(
      args?: SelectSubset<T, ShabuShopCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShabuShop.
     * @param {ShabuShopDeleteArgs} args - Arguments to delete one ShabuShop.
     * @example
     * // Delete one ShabuShop
     * const ShabuShop = await prisma.shabuShop.delete({
     *   where: {
     *     // ... filter to delete one ShabuShop
     *   }
     * })
     * 
    **/
    delete<T extends ShabuShopDeleteArgs>(
      args: SelectSubset<T, ShabuShopDeleteArgs>
    ): Prisma__ShabuShopClient<ShabuShopGetPayload<T>>

    /**
     * Update one ShabuShop.
     * @param {ShabuShopUpdateArgs} args - Arguments to update one ShabuShop.
     * @example
     * // Update one ShabuShop
     * const shabuShop = await prisma.shabuShop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShabuShopUpdateArgs>(
      args: SelectSubset<T, ShabuShopUpdateArgs>
    ): Prisma__ShabuShopClient<ShabuShopGetPayload<T>>

    /**
     * Delete zero or more ShabuShops.
     * @param {ShabuShopDeleteManyArgs} args - Arguments to filter ShabuShops to delete.
     * @example
     * // Delete a few ShabuShops
     * const { count } = await prisma.shabuShop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShabuShopDeleteManyArgs>(
      args?: SelectSubset<T, ShabuShopDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShabuShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShabuShops
     * const shabuShop = await prisma.shabuShop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShabuShopUpdateManyArgs>(
      args: SelectSubset<T, ShabuShopUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShabuShop.
     * @param {ShabuShopUpsertArgs} args - Arguments to update or create a ShabuShop.
     * @example
     * // Update or create a ShabuShop
     * const shabuShop = await prisma.shabuShop.upsert({
     *   create: {
     *     // ... data to create a ShabuShop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShabuShop we want to update
     *   }
     * })
    **/
    upsert<T extends ShabuShopUpsertArgs>(
      args: SelectSubset<T, ShabuShopUpsertArgs>
    ): Prisma__ShabuShopClient<ShabuShopGetPayload<T>>

    /**
     * Count the number of ShabuShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopCountArgs} args - Arguments to filter ShabuShops to count.
     * @example
     * // Count the number of ShabuShops
     * const count = await prisma.shabuShop.count({
     *   where: {
     *     // ... the filter for the ShabuShops we want to count
     *   }
     * })
    **/
    count<T extends ShabuShopCountArgs>(
      args?: Subset<T, ShabuShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShabuShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShabuShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShabuShopAggregateArgs>(args: Subset<T, ShabuShopAggregateArgs>): Prisma.PrismaPromise<GetShabuShopAggregateType<T>>

    /**
     * Group by ShabuShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShabuShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShabuShopGroupByArgs['orderBy'] }
        : { orderBy?: ShabuShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShabuShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShabuShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ShabuShop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShabuShopClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    shabuShopBranchs<T extends ShabuShop$shabuShopBranchsArgs= {}>(args?: Subset<T, ShabuShop$shabuShopBranchsArgs>): Prisma.PrismaPromise<Array<ShabuShopBranchGetPayload<T>>| Null>;

    promotionByShops<T extends ShabuShop$promotionByShopsArgs= {}>(args?: Subset<T, ShabuShop$promotionByShopsArgs>): Prisma.PrismaPromise<Array<PromotionByShopGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ShabuShop base type for findUnique actions
   */
  export type ShabuShopFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * Filter, which ShabuShop to fetch.
     */
    where: ShabuShopWhereUniqueInput
  }

  /**
   * ShabuShop findUnique
   */
  export interface ShabuShopFindUniqueArgs extends ShabuShopFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShabuShop findUniqueOrThrow
   */
  export type ShabuShopFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * Filter, which ShabuShop to fetch.
     */
    where: ShabuShopWhereUniqueInput
  }


  /**
   * ShabuShop base type for findFirst actions
   */
  export type ShabuShopFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * Filter, which ShabuShop to fetch.
     */
    where?: ShabuShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShops to fetch.
     */
    orderBy?: Enumerable<ShabuShopOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShabuShops.
     */
    cursor?: ShabuShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShabuShops.
     */
    distinct?: Enumerable<ShabuShopScalarFieldEnum>
  }

  /**
   * ShabuShop findFirst
   */
  export interface ShabuShopFindFirstArgs extends ShabuShopFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShabuShop findFirstOrThrow
   */
  export type ShabuShopFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * Filter, which ShabuShop to fetch.
     */
    where?: ShabuShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShops to fetch.
     */
    orderBy?: Enumerable<ShabuShopOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShabuShops.
     */
    cursor?: ShabuShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShabuShops.
     */
    distinct?: Enumerable<ShabuShopScalarFieldEnum>
  }


  /**
   * ShabuShop findMany
   */
  export type ShabuShopFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * Filter, which ShabuShops to fetch.
     */
    where?: ShabuShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShops to fetch.
     */
    orderBy?: Enumerable<ShabuShopOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShabuShops.
     */
    cursor?: ShabuShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShops.
     */
    skip?: number
    distinct?: Enumerable<ShabuShopScalarFieldEnum>
  }


  /**
   * ShabuShop create
   */
  export type ShabuShopCreateArgs = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * The data needed to create a ShabuShop.
     */
    data: XOR<ShabuShopCreateInput, ShabuShopUncheckedCreateInput>
  }


  /**
   * ShabuShop createMany
   */
  export type ShabuShopCreateManyArgs = {
    /**
     * The data used to create many ShabuShops.
     */
    data: Enumerable<ShabuShopCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShabuShop update
   */
  export type ShabuShopUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * The data needed to update a ShabuShop.
     */
    data: XOR<ShabuShopUpdateInput, ShabuShopUncheckedUpdateInput>
    /**
     * Choose, which ShabuShop to update.
     */
    where: ShabuShopWhereUniqueInput
  }


  /**
   * ShabuShop updateMany
   */
  export type ShabuShopUpdateManyArgs = {
    /**
     * The data used to update ShabuShops.
     */
    data: XOR<ShabuShopUpdateManyMutationInput, ShabuShopUncheckedUpdateManyInput>
    /**
     * Filter which ShabuShops to update
     */
    where?: ShabuShopWhereInput
  }


  /**
   * ShabuShop upsert
   */
  export type ShabuShopUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * The filter to search for the ShabuShop to update in case it exists.
     */
    where: ShabuShopWhereUniqueInput
    /**
     * In case the ShabuShop found by the `where` argument doesn't exist, create a new ShabuShop with this data.
     */
    create: XOR<ShabuShopCreateInput, ShabuShopUncheckedCreateInput>
    /**
     * In case the ShabuShop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShabuShopUpdateInput, ShabuShopUncheckedUpdateInput>
  }


  /**
   * ShabuShop delete
   */
  export type ShabuShopDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
    /**
     * Filter which ShabuShop to delete.
     */
    where: ShabuShopWhereUniqueInput
  }


  /**
   * ShabuShop deleteMany
   */
  export type ShabuShopDeleteManyArgs = {
    /**
     * Filter which ShabuShops to delete
     */
    where?: ShabuShopWhereInput
  }


  /**
   * ShabuShop.shabuShopBranchs
   */
  export type ShabuShop$shabuShopBranchsArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    where?: ShabuShopBranchWhereInput
    orderBy?: Enumerable<ShabuShopBranchOrderByWithRelationInput>
    cursor?: ShabuShopBranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ShabuShopBranchScalarFieldEnum>
  }


  /**
   * ShabuShop.promotionByShops
   */
  export type ShabuShop$promotionByShopsArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    where?: PromotionByShopWhereInput
    orderBy?: Enumerable<PromotionByShopOrderByWithRelationInput>
    cursor?: PromotionByShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PromotionByShopScalarFieldEnum>
  }


  /**
   * ShabuShop without action
   */
  export type ShabuShopArgs = {
    /**
     * Select specific fields to fetch from the ShabuShop
     */
    select?: ShabuShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopInclude | null
  }



  /**
   * Model ShabuShopBranch
   */


  export type AggregateShabuShopBranch = {
    _count: ShabuShopBranchCountAggregateOutputType | null
    _avg: ShabuShopBranchAvgAggregateOutputType | null
    _sum: ShabuShopBranchSumAggregateOutputType | null
    _min: ShabuShopBranchMinAggregateOutputType | null
    _max: ShabuShopBranchMaxAggregateOutputType | null
  }

  export type ShabuShopBranchAvgAggregateOutputType = {
    id: number | null
    shabuShopId: number | null
    openTime: number | null
    closeTime: number | null
    latitude: number | null
    longtitude: number | null
  }

  export type ShabuShopBranchSumAggregateOutputType = {
    id: number | null
    shabuShopId: number | null
    openTime: number | null
    closeTime: number | null
    latitude: number | null
    longtitude: number | null
  }

  export type ShabuShopBranchMinAggregateOutputType = {
    id: number | null
    shabuShopId: number | null
    branchName: string | null
    tel: string | null
    shopDetail: string | null
    address: string | null
    openTime: number | null
    closeTime: number | null
    latitude: number | null
    longtitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShabuShopBranchMaxAggregateOutputType = {
    id: number | null
    shabuShopId: number | null
    branchName: string | null
    tel: string | null
    shopDetail: string | null
    address: string | null
    openTime: number | null
    closeTime: number | null
    latitude: number | null
    longtitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShabuShopBranchCountAggregateOutputType = {
    id: number
    shabuShopId: number
    branchName: number
    tel: number
    shopDetail: number
    address: number
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShabuShopBranchAvgAggregateInputType = {
    id?: true
    shabuShopId?: true
    openTime?: true
    closeTime?: true
    latitude?: true
    longtitude?: true
  }

  export type ShabuShopBranchSumAggregateInputType = {
    id?: true
    shabuShopId?: true
    openTime?: true
    closeTime?: true
    latitude?: true
    longtitude?: true
  }

  export type ShabuShopBranchMinAggregateInputType = {
    id?: true
    shabuShopId?: true
    branchName?: true
    tel?: true
    shopDetail?: true
    address?: true
    openTime?: true
    closeTime?: true
    latitude?: true
    longtitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShabuShopBranchMaxAggregateInputType = {
    id?: true
    shabuShopId?: true
    branchName?: true
    tel?: true
    shopDetail?: true
    address?: true
    openTime?: true
    closeTime?: true
    latitude?: true
    longtitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShabuShopBranchCountAggregateInputType = {
    id?: true
    shabuShopId?: true
    branchName?: true
    tel?: true
    shopDetail?: true
    address?: true
    openTime?: true
    closeTime?: true
    latitude?: true
    longtitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShabuShopBranchAggregateArgs = {
    /**
     * Filter which ShabuShopBranch to aggregate.
     */
    where?: ShabuShopBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShopBranches to fetch.
     */
    orderBy?: Enumerable<ShabuShopBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShabuShopBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShopBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShopBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShabuShopBranches
    **/
    _count?: true | ShabuShopBranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShabuShopBranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShabuShopBranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShabuShopBranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShabuShopBranchMaxAggregateInputType
  }

  export type GetShabuShopBranchAggregateType<T extends ShabuShopBranchAggregateArgs> = {
        [P in keyof T & keyof AggregateShabuShopBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShabuShopBranch[P]>
      : GetScalarType<T[P], AggregateShabuShopBranch[P]>
  }




  export type ShabuShopBranchGroupByArgs = {
    where?: ShabuShopBranchWhereInput
    orderBy?: Enumerable<ShabuShopBranchOrderByWithAggregationInput>
    by: ShabuShopBranchScalarFieldEnum[]
    having?: ShabuShopBranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShabuShopBranchCountAggregateInputType | true
    _avg?: ShabuShopBranchAvgAggregateInputType
    _sum?: ShabuShopBranchSumAggregateInputType
    _min?: ShabuShopBranchMinAggregateInputType
    _max?: ShabuShopBranchMaxAggregateInputType
  }


  export type ShabuShopBranchGroupByOutputType = {
    id: number
    shabuShopId: number
    branchName: string
    tel: string
    shopDetail: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt: Date
    updatedAt: Date
    _count: ShabuShopBranchCountAggregateOutputType | null
    _avg: ShabuShopBranchAvgAggregateOutputType | null
    _sum: ShabuShopBranchSumAggregateOutputType | null
    _min: ShabuShopBranchMinAggregateOutputType | null
    _max: ShabuShopBranchMaxAggregateOutputType | null
  }

  type GetShabuShopBranchGroupByPayload<T extends ShabuShopBranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ShabuShopBranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShabuShopBranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShabuShopBranchGroupByOutputType[P]>
            : GetScalarType<T[P], ShabuShopBranchGroupByOutputType[P]>
        }
      >
    >


  export type ShabuShopBranchSelect = {
    id?: boolean
    shabuShopId?: boolean
    branchName?: boolean
    tel?: boolean
    shopDetail?: boolean
    address?: boolean
    openTime?: boolean
    closeTime?: boolean
    latitude?: boolean
    longtitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shabuShop?: boolean | ShabuShopArgs
    shabuShopTables?: boolean | ShabuShopBranch$shabuShopTablesArgs
    _count?: boolean | ShabuShopBranchCountOutputTypeArgs
  }


  export type ShabuShopBranchInclude = {
    shabuShop?: boolean | ShabuShopArgs
    shabuShopTables?: boolean | ShabuShopBranch$shabuShopTablesArgs
    _count?: boolean | ShabuShopBranchCountOutputTypeArgs
  }

  export type ShabuShopBranchGetPayload<S extends boolean | null | undefined | ShabuShopBranchArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShabuShopBranch :
    S extends undefined ? never :
    S extends { include: any } & (ShabuShopBranchArgs | ShabuShopBranchFindManyArgs)
    ? ShabuShopBranch  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'shabuShop' ? ShabuShopGetPayload<S['include'][P]> :
        P extends 'shabuShopTables' ? Array < ShabuShopTableGetPayload<S['include'][P]>>  :
        P extends '_count' ? ShabuShopBranchCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ShabuShopBranchArgs | ShabuShopBranchFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'shabuShop' ? ShabuShopGetPayload<S['select'][P]> :
        P extends 'shabuShopTables' ? Array < ShabuShopTableGetPayload<S['select'][P]>>  :
        P extends '_count' ? ShabuShopBranchCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ShabuShopBranch ? ShabuShopBranch[P] : never
  } 
      : ShabuShopBranch


  type ShabuShopBranchCountArgs = 
    Omit<ShabuShopBranchFindManyArgs, 'select' | 'include'> & {
      select?: ShabuShopBranchCountAggregateInputType | true
    }

  export interface ShabuShopBranchDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ShabuShopBranch that matches the filter.
     * @param {ShabuShopBranchFindUniqueArgs} args - Arguments to find a ShabuShopBranch
     * @example
     * // Get one ShabuShopBranch
     * const shabuShopBranch = await prisma.shabuShopBranch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShabuShopBranchFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShabuShopBranchFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShabuShopBranch'> extends True ? Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T>> : Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T> | null, null>

    /**
     * Find one ShabuShopBranch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShabuShopBranchFindUniqueOrThrowArgs} args - Arguments to find a ShabuShopBranch
     * @example
     * // Get one ShabuShopBranch
     * const shabuShopBranch = await prisma.shabuShopBranch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShabuShopBranchFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShabuShopBranchFindUniqueOrThrowArgs>
    ): Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T>>

    /**
     * Find the first ShabuShopBranch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopBranchFindFirstArgs} args - Arguments to find a ShabuShopBranch
     * @example
     * // Get one ShabuShopBranch
     * const shabuShopBranch = await prisma.shabuShopBranch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShabuShopBranchFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShabuShopBranchFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShabuShopBranch'> extends True ? Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T>> : Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T> | null, null>

    /**
     * Find the first ShabuShopBranch that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopBranchFindFirstOrThrowArgs} args - Arguments to find a ShabuShopBranch
     * @example
     * // Get one ShabuShopBranch
     * const shabuShopBranch = await prisma.shabuShopBranch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShabuShopBranchFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShabuShopBranchFindFirstOrThrowArgs>
    ): Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T>>

    /**
     * Find zero or more ShabuShopBranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopBranchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShabuShopBranches
     * const shabuShopBranches = await prisma.shabuShopBranch.findMany()
     * 
     * // Get first 10 ShabuShopBranches
     * const shabuShopBranches = await prisma.shabuShopBranch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shabuShopBranchWithIdOnly = await prisma.shabuShopBranch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShabuShopBranchFindManyArgs>(
      args?: SelectSubset<T, ShabuShopBranchFindManyArgs>
    ): Prisma.PrismaPromise<Array<ShabuShopBranchGetPayload<T>>>

    /**
     * Create a ShabuShopBranch.
     * @param {ShabuShopBranchCreateArgs} args - Arguments to create a ShabuShopBranch.
     * @example
     * // Create one ShabuShopBranch
     * const ShabuShopBranch = await prisma.shabuShopBranch.create({
     *   data: {
     *     // ... data to create a ShabuShopBranch
     *   }
     * })
     * 
    **/
    create<T extends ShabuShopBranchCreateArgs>(
      args: SelectSubset<T, ShabuShopBranchCreateArgs>
    ): Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T>>

    /**
     * Create many ShabuShopBranches.
     *     @param {ShabuShopBranchCreateManyArgs} args - Arguments to create many ShabuShopBranches.
     *     @example
     *     // Create many ShabuShopBranches
     *     const shabuShopBranch = await prisma.shabuShopBranch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShabuShopBranchCreateManyArgs>(
      args?: SelectSubset<T, ShabuShopBranchCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShabuShopBranch.
     * @param {ShabuShopBranchDeleteArgs} args - Arguments to delete one ShabuShopBranch.
     * @example
     * // Delete one ShabuShopBranch
     * const ShabuShopBranch = await prisma.shabuShopBranch.delete({
     *   where: {
     *     // ... filter to delete one ShabuShopBranch
     *   }
     * })
     * 
    **/
    delete<T extends ShabuShopBranchDeleteArgs>(
      args: SelectSubset<T, ShabuShopBranchDeleteArgs>
    ): Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T>>

    /**
     * Update one ShabuShopBranch.
     * @param {ShabuShopBranchUpdateArgs} args - Arguments to update one ShabuShopBranch.
     * @example
     * // Update one ShabuShopBranch
     * const shabuShopBranch = await prisma.shabuShopBranch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShabuShopBranchUpdateArgs>(
      args: SelectSubset<T, ShabuShopBranchUpdateArgs>
    ): Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T>>

    /**
     * Delete zero or more ShabuShopBranches.
     * @param {ShabuShopBranchDeleteManyArgs} args - Arguments to filter ShabuShopBranches to delete.
     * @example
     * // Delete a few ShabuShopBranches
     * const { count } = await prisma.shabuShopBranch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShabuShopBranchDeleteManyArgs>(
      args?: SelectSubset<T, ShabuShopBranchDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShabuShopBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopBranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShabuShopBranches
     * const shabuShopBranch = await prisma.shabuShopBranch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShabuShopBranchUpdateManyArgs>(
      args: SelectSubset<T, ShabuShopBranchUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShabuShopBranch.
     * @param {ShabuShopBranchUpsertArgs} args - Arguments to update or create a ShabuShopBranch.
     * @example
     * // Update or create a ShabuShopBranch
     * const shabuShopBranch = await prisma.shabuShopBranch.upsert({
     *   create: {
     *     // ... data to create a ShabuShopBranch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShabuShopBranch we want to update
     *   }
     * })
    **/
    upsert<T extends ShabuShopBranchUpsertArgs>(
      args: SelectSubset<T, ShabuShopBranchUpsertArgs>
    ): Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T>>

    /**
     * Count the number of ShabuShopBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopBranchCountArgs} args - Arguments to filter ShabuShopBranches to count.
     * @example
     * // Count the number of ShabuShopBranches
     * const count = await prisma.shabuShopBranch.count({
     *   where: {
     *     // ... the filter for the ShabuShopBranches we want to count
     *   }
     * })
    **/
    count<T extends ShabuShopBranchCountArgs>(
      args?: Subset<T, ShabuShopBranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShabuShopBranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShabuShopBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopBranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShabuShopBranchAggregateArgs>(args: Subset<T, ShabuShopBranchAggregateArgs>): Prisma.PrismaPromise<GetShabuShopBranchAggregateType<T>>

    /**
     * Group by ShabuShopBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopBranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShabuShopBranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShabuShopBranchGroupByArgs['orderBy'] }
        : { orderBy?: ShabuShopBranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShabuShopBranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShabuShopBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ShabuShopBranch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShabuShopBranchClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    shabuShop<T extends ShabuShopArgs= {}>(args?: Subset<T, ShabuShopArgs>): Prisma__ShabuShopClient<ShabuShopGetPayload<T> | Null>;

    shabuShopTables<T extends ShabuShopBranch$shabuShopTablesArgs= {}>(args?: Subset<T, ShabuShopBranch$shabuShopTablesArgs>): Prisma.PrismaPromise<Array<ShabuShopTableGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ShabuShopBranch base type for findUnique actions
   */
  export type ShabuShopBranchFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * Filter, which ShabuShopBranch to fetch.
     */
    where: ShabuShopBranchWhereUniqueInput
  }

  /**
   * ShabuShopBranch findUnique
   */
  export interface ShabuShopBranchFindUniqueArgs extends ShabuShopBranchFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShabuShopBranch findUniqueOrThrow
   */
  export type ShabuShopBranchFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * Filter, which ShabuShopBranch to fetch.
     */
    where: ShabuShopBranchWhereUniqueInput
  }


  /**
   * ShabuShopBranch base type for findFirst actions
   */
  export type ShabuShopBranchFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * Filter, which ShabuShopBranch to fetch.
     */
    where?: ShabuShopBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShopBranches to fetch.
     */
    orderBy?: Enumerable<ShabuShopBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShabuShopBranches.
     */
    cursor?: ShabuShopBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShopBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShopBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShabuShopBranches.
     */
    distinct?: Enumerable<ShabuShopBranchScalarFieldEnum>
  }

  /**
   * ShabuShopBranch findFirst
   */
  export interface ShabuShopBranchFindFirstArgs extends ShabuShopBranchFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShabuShopBranch findFirstOrThrow
   */
  export type ShabuShopBranchFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * Filter, which ShabuShopBranch to fetch.
     */
    where?: ShabuShopBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShopBranches to fetch.
     */
    orderBy?: Enumerable<ShabuShopBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShabuShopBranches.
     */
    cursor?: ShabuShopBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShopBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShopBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShabuShopBranches.
     */
    distinct?: Enumerable<ShabuShopBranchScalarFieldEnum>
  }


  /**
   * ShabuShopBranch findMany
   */
  export type ShabuShopBranchFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * Filter, which ShabuShopBranches to fetch.
     */
    where?: ShabuShopBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShopBranches to fetch.
     */
    orderBy?: Enumerable<ShabuShopBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShabuShopBranches.
     */
    cursor?: ShabuShopBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShopBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShopBranches.
     */
    skip?: number
    distinct?: Enumerable<ShabuShopBranchScalarFieldEnum>
  }


  /**
   * ShabuShopBranch create
   */
  export type ShabuShopBranchCreateArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * The data needed to create a ShabuShopBranch.
     */
    data: XOR<ShabuShopBranchCreateInput, ShabuShopBranchUncheckedCreateInput>
  }


  /**
   * ShabuShopBranch createMany
   */
  export type ShabuShopBranchCreateManyArgs = {
    /**
     * The data used to create many ShabuShopBranches.
     */
    data: Enumerable<ShabuShopBranchCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShabuShopBranch update
   */
  export type ShabuShopBranchUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * The data needed to update a ShabuShopBranch.
     */
    data: XOR<ShabuShopBranchUpdateInput, ShabuShopBranchUncheckedUpdateInput>
    /**
     * Choose, which ShabuShopBranch to update.
     */
    where: ShabuShopBranchWhereUniqueInput
  }


  /**
   * ShabuShopBranch updateMany
   */
  export type ShabuShopBranchUpdateManyArgs = {
    /**
     * The data used to update ShabuShopBranches.
     */
    data: XOR<ShabuShopBranchUpdateManyMutationInput, ShabuShopBranchUncheckedUpdateManyInput>
    /**
     * Filter which ShabuShopBranches to update
     */
    where?: ShabuShopBranchWhereInput
  }


  /**
   * ShabuShopBranch upsert
   */
  export type ShabuShopBranchUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * The filter to search for the ShabuShopBranch to update in case it exists.
     */
    where: ShabuShopBranchWhereUniqueInput
    /**
     * In case the ShabuShopBranch found by the `where` argument doesn't exist, create a new ShabuShopBranch with this data.
     */
    create: XOR<ShabuShopBranchCreateInput, ShabuShopBranchUncheckedCreateInput>
    /**
     * In case the ShabuShopBranch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShabuShopBranchUpdateInput, ShabuShopBranchUncheckedUpdateInput>
  }


  /**
   * ShabuShopBranch delete
   */
  export type ShabuShopBranchDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
    /**
     * Filter which ShabuShopBranch to delete.
     */
    where: ShabuShopBranchWhereUniqueInput
  }


  /**
   * ShabuShopBranch deleteMany
   */
  export type ShabuShopBranchDeleteManyArgs = {
    /**
     * Filter which ShabuShopBranches to delete
     */
    where?: ShabuShopBranchWhereInput
  }


  /**
   * ShabuShopBranch.shabuShopTables
   */
  export type ShabuShopBranch$shabuShopTablesArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    where?: ShabuShopTableWhereInput
    orderBy?: Enumerable<ShabuShopTableOrderByWithRelationInput>
    cursor?: ShabuShopTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ShabuShopTableScalarFieldEnum>
  }


  /**
   * ShabuShopBranch without action
   */
  export type ShabuShopBranchArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopBranch
     */
    select?: ShabuShopBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopBranchInclude | null
  }



  /**
   * Model ShabuShopTable
   */


  export type AggregateShabuShopTable = {
    _count: ShabuShopTableCountAggregateOutputType | null
    _avg: ShabuShopTableAvgAggregateOutputType | null
    _sum: ShabuShopTableSumAggregateOutputType | null
    _min: ShabuShopTableMinAggregateOutputType | null
    _max: ShabuShopTableMaxAggregateOutputType | null
  }

  export type ShabuShopTableAvgAggregateOutputType = {
    id: number | null
    shabuShopBranchId: number | null
    seatPerDesk: number | null
  }

  export type ShabuShopTableSumAggregateOutputType = {
    id: number | null
    shabuShopBranchId: number | null
    seatPerDesk: number | null
  }

  export type ShabuShopTableMinAggregateOutputType = {
    id: number | null
    shabuShopBranchId: number | null
    seatPerDesk: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShabuShopTableMaxAggregateOutputType = {
    id: number | null
    shabuShopBranchId: number | null
    seatPerDesk: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShabuShopTableCountAggregateOutputType = {
    id: number
    shabuShopBranchId: number
    seatPerDesk: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShabuShopTableAvgAggregateInputType = {
    id?: true
    shabuShopBranchId?: true
    seatPerDesk?: true
  }

  export type ShabuShopTableSumAggregateInputType = {
    id?: true
    shabuShopBranchId?: true
    seatPerDesk?: true
  }

  export type ShabuShopTableMinAggregateInputType = {
    id?: true
    shabuShopBranchId?: true
    seatPerDesk?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShabuShopTableMaxAggregateInputType = {
    id?: true
    shabuShopBranchId?: true
    seatPerDesk?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShabuShopTableCountAggregateInputType = {
    id?: true
    shabuShopBranchId?: true
    seatPerDesk?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShabuShopTableAggregateArgs = {
    /**
     * Filter which ShabuShopTable to aggregate.
     */
    where?: ShabuShopTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShopTables to fetch.
     */
    orderBy?: Enumerable<ShabuShopTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShabuShopTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShopTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShopTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShabuShopTables
    **/
    _count?: true | ShabuShopTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShabuShopTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShabuShopTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShabuShopTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShabuShopTableMaxAggregateInputType
  }

  export type GetShabuShopTableAggregateType<T extends ShabuShopTableAggregateArgs> = {
        [P in keyof T & keyof AggregateShabuShopTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShabuShopTable[P]>
      : GetScalarType<T[P], AggregateShabuShopTable[P]>
  }




  export type ShabuShopTableGroupByArgs = {
    where?: ShabuShopTableWhereInput
    orderBy?: Enumerable<ShabuShopTableOrderByWithAggregationInput>
    by: ShabuShopTableScalarFieldEnum[]
    having?: ShabuShopTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShabuShopTableCountAggregateInputType | true
    _avg?: ShabuShopTableAvgAggregateInputType
    _sum?: ShabuShopTableSumAggregateInputType
    _min?: ShabuShopTableMinAggregateInputType
    _max?: ShabuShopTableMaxAggregateInputType
  }


  export type ShabuShopTableGroupByOutputType = {
    id: number
    shabuShopBranchId: number
    seatPerDesk: number
    createdAt: Date
    updatedAt: Date
    _count: ShabuShopTableCountAggregateOutputType | null
    _avg: ShabuShopTableAvgAggregateOutputType | null
    _sum: ShabuShopTableSumAggregateOutputType | null
    _min: ShabuShopTableMinAggregateOutputType | null
    _max: ShabuShopTableMaxAggregateOutputType | null
  }

  type GetShabuShopTableGroupByPayload<T extends ShabuShopTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ShabuShopTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShabuShopTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShabuShopTableGroupByOutputType[P]>
            : GetScalarType<T[P], ShabuShopTableGroupByOutputType[P]>
        }
      >
    >


  export type ShabuShopTableSelect = {
    id?: boolean
    shabuShopBranchId?: boolean
    seatPerDesk?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | ShabuShopBranchArgs
    parties?: boolean | ShabuShopTable$partiesArgs
    _count?: boolean | ShabuShopTableCountOutputTypeArgs
  }


  export type ShabuShopTableInclude = {
    branch?: boolean | ShabuShopBranchArgs
    parties?: boolean | ShabuShopTable$partiesArgs
    _count?: boolean | ShabuShopTableCountOutputTypeArgs
  }

  export type ShabuShopTableGetPayload<S extends boolean | null | undefined | ShabuShopTableArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShabuShopTable :
    S extends undefined ? never :
    S extends { include: any } & (ShabuShopTableArgs | ShabuShopTableFindManyArgs)
    ? ShabuShopTable  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'branch' ? ShabuShopBranchGetPayload<S['include'][P]> :
        P extends 'parties' ? Array < PartyGetPayload<S['include'][P]>>  :
        P extends '_count' ? ShabuShopTableCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ShabuShopTableArgs | ShabuShopTableFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'branch' ? ShabuShopBranchGetPayload<S['select'][P]> :
        P extends 'parties' ? Array < PartyGetPayload<S['select'][P]>>  :
        P extends '_count' ? ShabuShopTableCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ShabuShopTable ? ShabuShopTable[P] : never
  } 
      : ShabuShopTable


  type ShabuShopTableCountArgs = 
    Omit<ShabuShopTableFindManyArgs, 'select' | 'include'> & {
      select?: ShabuShopTableCountAggregateInputType | true
    }

  export interface ShabuShopTableDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ShabuShopTable that matches the filter.
     * @param {ShabuShopTableFindUniqueArgs} args - Arguments to find a ShabuShopTable
     * @example
     * // Get one ShabuShopTable
     * const shabuShopTable = await prisma.shabuShopTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShabuShopTableFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShabuShopTableFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShabuShopTable'> extends True ? Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T>> : Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T> | null, null>

    /**
     * Find one ShabuShopTable that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShabuShopTableFindUniqueOrThrowArgs} args - Arguments to find a ShabuShopTable
     * @example
     * // Get one ShabuShopTable
     * const shabuShopTable = await prisma.shabuShopTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShabuShopTableFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShabuShopTableFindUniqueOrThrowArgs>
    ): Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T>>

    /**
     * Find the first ShabuShopTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopTableFindFirstArgs} args - Arguments to find a ShabuShopTable
     * @example
     * // Get one ShabuShopTable
     * const shabuShopTable = await prisma.shabuShopTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShabuShopTableFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShabuShopTableFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShabuShopTable'> extends True ? Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T>> : Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T> | null, null>

    /**
     * Find the first ShabuShopTable that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopTableFindFirstOrThrowArgs} args - Arguments to find a ShabuShopTable
     * @example
     * // Get one ShabuShopTable
     * const shabuShopTable = await prisma.shabuShopTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShabuShopTableFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShabuShopTableFindFirstOrThrowArgs>
    ): Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T>>

    /**
     * Find zero or more ShabuShopTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopTableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShabuShopTables
     * const shabuShopTables = await prisma.shabuShopTable.findMany()
     * 
     * // Get first 10 ShabuShopTables
     * const shabuShopTables = await prisma.shabuShopTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shabuShopTableWithIdOnly = await prisma.shabuShopTable.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShabuShopTableFindManyArgs>(
      args?: SelectSubset<T, ShabuShopTableFindManyArgs>
    ): Prisma.PrismaPromise<Array<ShabuShopTableGetPayload<T>>>

    /**
     * Create a ShabuShopTable.
     * @param {ShabuShopTableCreateArgs} args - Arguments to create a ShabuShopTable.
     * @example
     * // Create one ShabuShopTable
     * const ShabuShopTable = await prisma.shabuShopTable.create({
     *   data: {
     *     // ... data to create a ShabuShopTable
     *   }
     * })
     * 
    **/
    create<T extends ShabuShopTableCreateArgs>(
      args: SelectSubset<T, ShabuShopTableCreateArgs>
    ): Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T>>

    /**
     * Create many ShabuShopTables.
     *     @param {ShabuShopTableCreateManyArgs} args - Arguments to create many ShabuShopTables.
     *     @example
     *     // Create many ShabuShopTables
     *     const shabuShopTable = await prisma.shabuShopTable.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShabuShopTableCreateManyArgs>(
      args?: SelectSubset<T, ShabuShopTableCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShabuShopTable.
     * @param {ShabuShopTableDeleteArgs} args - Arguments to delete one ShabuShopTable.
     * @example
     * // Delete one ShabuShopTable
     * const ShabuShopTable = await prisma.shabuShopTable.delete({
     *   where: {
     *     // ... filter to delete one ShabuShopTable
     *   }
     * })
     * 
    **/
    delete<T extends ShabuShopTableDeleteArgs>(
      args: SelectSubset<T, ShabuShopTableDeleteArgs>
    ): Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T>>

    /**
     * Update one ShabuShopTable.
     * @param {ShabuShopTableUpdateArgs} args - Arguments to update one ShabuShopTable.
     * @example
     * // Update one ShabuShopTable
     * const shabuShopTable = await prisma.shabuShopTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShabuShopTableUpdateArgs>(
      args: SelectSubset<T, ShabuShopTableUpdateArgs>
    ): Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T>>

    /**
     * Delete zero or more ShabuShopTables.
     * @param {ShabuShopTableDeleteManyArgs} args - Arguments to filter ShabuShopTables to delete.
     * @example
     * // Delete a few ShabuShopTables
     * const { count } = await prisma.shabuShopTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShabuShopTableDeleteManyArgs>(
      args?: SelectSubset<T, ShabuShopTableDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShabuShopTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShabuShopTables
     * const shabuShopTable = await prisma.shabuShopTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShabuShopTableUpdateManyArgs>(
      args: SelectSubset<T, ShabuShopTableUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShabuShopTable.
     * @param {ShabuShopTableUpsertArgs} args - Arguments to update or create a ShabuShopTable.
     * @example
     * // Update or create a ShabuShopTable
     * const shabuShopTable = await prisma.shabuShopTable.upsert({
     *   create: {
     *     // ... data to create a ShabuShopTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShabuShopTable we want to update
     *   }
     * })
    **/
    upsert<T extends ShabuShopTableUpsertArgs>(
      args: SelectSubset<T, ShabuShopTableUpsertArgs>
    ): Prisma__ShabuShopTableClient<ShabuShopTableGetPayload<T>>

    /**
     * Count the number of ShabuShopTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopTableCountArgs} args - Arguments to filter ShabuShopTables to count.
     * @example
     * // Count the number of ShabuShopTables
     * const count = await prisma.shabuShopTable.count({
     *   where: {
     *     // ... the filter for the ShabuShopTables we want to count
     *   }
     * })
    **/
    count<T extends ShabuShopTableCountArgs>(
      args?: Subset<T, ShabuShopTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShabuShopTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShabuShopTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShabuShopTableAggregateArgs>(args: Subset<T, ShabuShopTableAggregateArgs>): Prisma.PrismaPromise<GetShabuShopTableAggregateType<T>>

    /**
     * Group by ShabuShopTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShabuShopTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShabuShopTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShabuShopTableGroupByArgs['orderBy'] }
        : { orderBy?: ShabuShopTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShabuShopTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShabuShopTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ShabuShopTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShabuShopTableClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    branch<T extends ShabuShopBranchArgs= {}>(args?: Subset<T, ShabuShopBranchArgs>): Prisma__ShabuShopBranchClient<ShabuShopBranchGetPayload<T> | Null>;

    parties<T extends ShabuShopTable$partiesArgs= {}>(args?: Subset<T, ShabuShopTable$partiesArgs>): Prisma.PrismaPromise<Array<PartyGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ShabuShopTable base type for findUnique actions
   */
  export type ShabuShopTableFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * Filter, which ShabuShopTable to fetch.
     */
    where: ShabuShopTableWhereUniqueInput
  }

  /**
   * ShabuShopTable findUnique
   */
  export interface ShabuShopTableFindUniqueArgs extends ShabuShopTableFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShabuShopTable findUniqueOrThrow
   */
  export type ShabuShopTableFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * Filter, which ShabuShopTable to fetch.
     */
    where: ShabuShopTableWhereUniqueInput
  }


  /**
   * ShabuShopTable base type for findFirst actions
   */
  export type ShabuShopTableFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * Filter, which ShabuShopTable to fetch.
     */
    where?: ShabuShopTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShopTables to fetch.
     */
    orderBy?: Enumerable<ShabuShopTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShabuShopTables.
     */
    cursor?: ShabuShopTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShopTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShopTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShabuShopTables.
     */
    distinct?: Enumerable<ShabuShopTableScalarFieldEnum>
  }

  /**
   * ShabuShopTable findFirst
   */
  export interface ShabuShopTableFindFirstArgs extends ShabuShopTableFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShabuShopTable findFirstOrThrow
   */
  export type ShabuShopTableFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * Filter, which ShabuShopTable to fetch.
     */
    where?: ShabuShopTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShopTables to fetch.
     */
    orderBy?: Enumerable<ShabuShopTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShabuShopTables.
     */
    cursor?: ShabuShopTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShopTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShopTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShabuShopTables.
     */
    distinct?: Enumerable<ShabuShopTableScalarFieldEnum>
  }


  /**
   * ShabuShopTable findMany
   */
  export type ShabuShopTableFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * Filter, which ShabuShopTables to fetch.
     */
    where?: ShabuShopTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShabuShopTables to fetch.
     */
    orderBy?: Enumerable<ShabuShopTableOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShabuShopTables.
     */
    cursor?: ShabuShopTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShabuShopTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShabuShopTables.
     */
    skip?: number
    distinct?: Enumerable<ShabuShopTableScalarFieldEnum>
  }


  /**
   * ShabuShopTable create
   */
  export type ShabuShopTableCreateArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * The data needed to create a ShabuShopTable.
     */
    data: XOR<ShabuShopTableCreateInput, ShabuShopTableUncheckedCreateInput>
  }


  /**
   * ShabuShopTable createMany
   */
  export type ShabuShopTableCreateManyArgs = {
    /**
     * The data used to create many ShabuShopTables.
     */
    data: Enumerable<ShabuShopTableCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShabuShopTable update
   */
  export type ShabuShopTableUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * The data needed to update a ShabuShopTable.
     */
    data: XOR<ShabuShopTableUpdateInput, ShabuShopTableUncheckedUpdateInput>
    /**
     * Choose, which ShabuShopTable to update.
     */
    where: ShabuShopTableWhereUniqueInput
  }


  /**
   * ShabuShopTable updateMany
   */
  export type ShabuShopTableUpdateManyArgs = {
    /**
     * The data used to update ShabuShopTables.
     */
    data: XOR<ShabuShopTableUpdateManyMutationInput, ShabuShopTableUncheckedUpdateManyInput>
    /**
     * Filter which ShabuShopTables to update
     */
    where?: ShabuShopTableWhereInput
  }


  /**
   * ShabuShopTable upsert
   */
  export type ShabuShopTableUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * The filter to search for the ShabuShopTable to update in case it exists.
     */
    where: ShabuShopTableWhereUniqueInput
    /**
     * In case the ShabuShopTable found by the `where` argument doesn't exist, create a new ShabuShopTable with this data.
     */
    create: XOR<ShabuShopTableCreateInput, ShabuShopTableUncheckedCreateInput>
    /**
     * In case the ShabuShopTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShabuShopTableUpdateInput, ShabuShopTableUncheckedUpdateInput>
  }


  /**
   * ShabuShopTable delete
   */
  export type ShabuShopTableDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
    /**
     * Filter which ShabuShopTable to delete.
     */
    where: ShabuShopTableWhereUniqueInput
  }


  /**
   * ShabuShopTable deleteMany
   */
  export type ShabuShopTableDeleteManyArgs = {
    /**
     * Filter which ShabuShopTables to delete
     */
    where?: ShabuShopTableWhereInput
  }


  /**
   * ShabuShopTable.parties
   */
  export type ShabuShopTable$partiesArgs = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartyInclude | null
    where?: PartyWhereInput
    orderBy?: Enumerable<PartyOrderByWithRelationInput>
    cursor?: PartyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PartyScalarFieldEnum>
  }


  /**
   * ShabuShopTable without action
   */
  export type ShabuShopTableArgs = {
    /**
     * Select specific fields to fetch from the ShabuShopTable
     */
    select?: ShabuShopTableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShabuShopTableInclude | null
  }



  /**
   * Model PromotionByShop
   */


  export type AggregatePromotionByShop = {
    _count: PromotionByShopCountAggregateOutputType | null
    _avg: PromotionByShopAvgAggregateOutputType | null
    _sum: PromotionByShopSumAggregateOutputType | null
    _min: PromotionByShopMinAggregateOutputType | null
    _max: PromotionByShopMaxAggregateOutputType | null
  }

  export type PromotionByShopAvgAggregateOutputType = {
    id: number | null
    shabuShopId: number | null
  }

  export type PromotionByShopSumAggregateOutputType = {
    id: number | null
    shabuShopId: number | null
  }

  export type PromotionByShopMinAggregateOutputType = {
    id: number | null
    image: string | null
    shabuShopId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionByShopMaxAggregateOutputType = {
    id: number | null
    image: string | null
    shabuShopId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionByShopCountAggregateOutputType = {
    id: number
    image: number
    shabuShopId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotionByShopAvgAggregateInputType = {
    id?: true
    shabuShopId?: true
  }

  export type PromotionByShopSumAggregateInputType = {
    id?: true
    shabuShopId?: true
  }

  export type PromotionByShopMinAggregateInputType = {
    id?: true
    image?: true
    shabuShopId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionByShopMaxAggregateInputType = {
    id?: true
    image?: true
    shabuShopId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionByShopCountAggregateInputType = {
    id?: true
    image?: true
    shabuShopId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotionByShopAggregateArgs = {
    /**
     * Filter which PromotionByShop to aggregate.
     */
    where?: PromotionByShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionByShops to fetch.
     */
    orderBy?: Enumerable<PromotionByShopOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionByShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionByShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionByShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromotionByShops
    **/
    _count?: true | PromotionByShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionByShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionByShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionByShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionByShopMaxAggregateInputType
  }

  export type GetPromotionByShopAggregateType<T extends PromotionByShopAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotionByShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotionByShop[P]>
      : GetScalarType<T[P], AggregatePromotionByShop[P]>
  }




  export type PromotionByShopGroupByArgs = {
    where?: PromotionByShopWhereInput
    orderBy?: Enumerable<PromotionByShopOrderByWithAggregationInput>
    by: PromotionByShopScalarFieldEnum[]
    having?: PromotionByShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionByShopCountAggregateInputType | true
    _avg?: PromotionByShopAvgAggregateInputType
    _sum?: PromotionByShopSumAggregateInputType
    _min?: PromotionByShopMinAggregateInputType
    _max?: PromotionByShopMaxAggregateInputType
  }


  export type PromotionByShopGroupByOutputType = {
    id: number
    image: string
    shabuShopId: number
    createdAt: Date
    updatedAt: Date
    _count: PromotionByShopCountAggregateOutputType | null
    _avg: PromotionByShopAvgAggregateOutputType | null
    _sum: PromotionByShopSumAggregateOutputType | null
    _min: PromotionByShopMinAggregateOutputType | null
    _max: PromotionByShopMaxAggregateOutputType | null
  }

  type GetPromotionByShopGroupByPayload<T extends PromotionByShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PromotionByShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionByShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionByShopGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionByShopGroupByOutputType[P]>
        }
      >
    >


  export type PromotionByShopSelect = {
    id?: boolean
    image?: boolean
    shabuShopId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shabuShop?: boolean | ShabuShopArgs
  }


  export type PromotionByShopInclude = {
    shabuShop?: boolean | ShabuShopArgs
  }

  export type PromotionByShopGetPayload<S extends boolean | null | undefined | PromotionByShopArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PromotionByShop :
    S extends undefined ? never :
    S extends { include: any } & (PromotionByShopArgs | PromotionByShopFindManyArgs)
    ? PromotionByShop  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'shabuShop' ? ShabuShopGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PromotionByShopArgs | PromotionByShopFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'shabuShop' ? ShabuShopGetPayload<S['select'][P]> :  P extends keyof PromotionByShop ? PromotionByShop[P] : never
  } 
      : PromotionByShop


  type PromotionByShopCountArgs = 
    Omit<PromotionByShopFindManyArgs, 'select' | 'include'> & {
      select?: PromotionByShopCountAggregateInputType | true
    }

  export interface PromotionByShopDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PromotionByShop that matches the filter.
     * @param {PromotionByShopFindUniqueArgs} args - Arguments to find a PromotionByShop
     * @example
     * // Get one PromotionByShop
     * const promotionByShop = await prisma.promotionByShop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromotionByShopFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PromotionByShopFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PromotionByShop'> extends True ? Prisma__PromotionByShopClient<PromotionByShopGetPayload<T>> : Prisma__PromotionByShopClient<PromotionByShopGetPayload<T> | null, null>

    /**
     * Find one PromotionByShop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PromotionByShopFindUniqueOrThrowArgs} args - Arguments to find a PromotionByShop
     * @example
     * // Get one PromotionByShop
     * const promotionByShop = await prisma.promotionByShop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromotionByShopFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PromotionByShopFindUniqueOrThrowArgs>
    ): Prisma__PromotionByShopClient<PromotionByShopGetPayload<T>>

    /**
     * Find the first PromotionByShop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionByShopFindFirstArgs} args - Arguments to find a PromotionByShop
     * @example
     * // Get one PromotionByShop
     * const promotionByShop = await prisma.promotionByShop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromotionByShopFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PromotionByShopFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PromotionByShop'> extends True ? Prisma__PromotionByShopClient<PromotionByShopGetPayload<T>> : Prisma__PromotionByShopClient<PromotionByShopGetPayload<T> | null, null>

    /**
     * Find the first PromotionByShop that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionByShopFindFirstOrThrowArgs} args - Arguments to find a PromotionByShop
     * @example
     * // Get one PromotionByShop
     * const promotionByShop = await prisma.promotionByShop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromotionByShopFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PromotionByShopFindFirstOrThrowArgs>
    ): Prisma__PromotionByShopClient<PromotionByShopGetPayload<T>>

    /**
     * Find zero or more PromotionByShops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionByShopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromotionByShops
     * const promotionByShops = await prisma.promotionByShop.findMany()
     * 
     * // Get first 10 PromotionByShops
     * const promotionByShops = await prisma.promotionByShop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionByShopWithIdOnly = await prisma.promotionByShop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PromotionByShopFindManyArgs>(
      args?: SelectSubset<T, PromotionByShopFindManyArgs>
    ): Prisma.PrismaPromise<Array<PromotionByShopGetPayload<T>>>

    /**
     * Create a PromotionByShop.
     * @param {PromotionByShopCreateArgs} args - Arguments to create a PromotionByShop.
     * @example
     * // Create one PromotionByShop
     * const PromotionByShop = await prisma.promotionByShop.create({
     *   data: {
     *     // ... data to create a PromotionByShop
     *   }
     * })
     * 
    **/
    create<T extends PromotionByShopCreateArgs>(
      args: SelectSubset<T, PromotionByShopCreateArgs>
    ): Prisma__PromotionByShopClient<PromotionByShopGetPayload<T>>

    /**
     * Create many PromotionByShops.
     *     @param {PromotionByShopCreateManyArgs} args - Arguments to create many PromotionByShops.
     *     @example
     *     // Create many PromotionByShops
     *     const promotionByShop = await prisma.promotionByShop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PromotionByShopCreateManyArgs>(
      args?: SelectSubset<T, PromotionByShopCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PromotionByShop.
     * @param {PromotionByShopDeleteArgs} args - Arguments to delete one PromotionByShop.
     * @example
     * // Delete one PromotionByShop
     * const PromotionByShop = await prisma.promotionByShop.delete({
     *   where: {
     *     // ... filter to delete one PromotionByShop
     *   }
     * })
     * 
    **/
    delete<T extends PromotionByShopDeleteArgs>(
      args: SelectSubset<T, PromotionByShopDeleteArgs>
    ): Prisma__PromotionByShopClient<PromotionByShopGetPayload<T>>

    /**
     * Update one PromotionByShop.
     * @param {PromotionByShopUpdateArgs} args - Arguments to update one PromotionByShop.
     * @example
     * // Update one PromotionByShop
     * const promotionByShop = await prisma.promotionByShop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromotionByShopUpdateArgs>(
      args: SelectSubset<T, PromotionByShopUpdateArgs>
    ): Prisma__PromotionByShopClient<PromotionByShopGetPayload<T>>

    /**
     * Delete zero or more PromotionByShops.
     * @param {PromotionByShopDeleteManyArgs} args - Arguments to filter PromotionByShops to delete.
     * @example
     * // Delete a few PromotionByShops
     * const { count } = await prisma.promotionByShop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromotionByShopDeleteManyArgs>(
      args?: SelectSubset<T, PromotionByShopDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromotionByShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionByShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromotionByShops
     * const promotionByShop = await prisma.promotionByShop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromotionByShopUpdateManyArgs>(
      args: SelectSubset<T, PromotionByShopUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PromotionByShop.
     * @param {PromotionByShopUpsertArgs} args - Arguments to update or create a PromotionByShop.
     * @example
     * // Update or create a PromotionByShop
     * const promotionByShop = await prisma.promotionByShop.upsert({
     *   create: {
     *     // ... data to create a PromotionByShop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromotionByShop we want to update
     *   }
     * })
    **/
    upsert<T extends PromotionByShopUpsertArgs>(
      args: SelectSubset<T, PromotionByShopUpsertArgs>
    ): Prisma__PromotionByShopClient<PromotionByShopGetPayload<T>>

    /**
     * Count the number of PromotionByShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionByShopCountArgs} args - Arguments to filter PromotionByShops to count.
     * @example
     * // Count the number of PromotionByShops
     * const count = await prisma.promotionByShop.count({
     *   where: {
     *     // ... the filter for the PromotionByShops we want to count
     *   }
     * })
    **/
    count<T extends PromotionByShopCountArgs>(
      args?: Subset<T, PromotionByShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionByShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromotionByShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionByShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionByShopAggregateArgs>(args: Subset<T, PromotionByShopAggregateArgs>): Prisma.PrismaPromise<GetPromotionByShopAggregateType<T>>

    /**
     * Group by PromotionByShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionByShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionByShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionByShopGroupByArgs['orderBy'] }
        : { orderBy?: PromotionByShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionByShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionByShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PromotionByShop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PromotionByShopClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    shabuShop<T extends ShabuShopArgs= {}>(args?: Subset<T, ShabuShopArgs>): Prisma__ShabuShopClient<ShabuShopGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PromotionByShop base type for findUnique actions
   */
  export type PromotionByShopFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * Filter, which PromotionByShop to fetch.
     */
    where: PromotionByShopWhereUniqueInput
  }

  /**
   * PromotionByShop findUnique
   */
  export interface PromotionByShopFindUniqueArgs extends PromotionByShopFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PromotionByShop findUniqueOrThrow
   */
  export type PromotionByShopFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * Filter, which PromotionByShop to fetch.
     */
    where: PromotionByShopWhereUniqueInput
  }


  /**
   * PromotionByShop base type for findFirst actions
   */
  export type PromotionByShopFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * Filter, which PromotionByShop to fetch.
     */
    where?: PromotionByShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionByShops to fetch.
     */
    orderBy?: Enumerable<PromotionByShopOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromotionByShops.
     */
    cursor?: PromotionByShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionByShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionByShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionByShops.
     */
    distinct?: Enumerable<PromotionByShopScalarFieldEnum>
  }

  /**
   * PromotionByShop findFirst
   */
  export interface PromotionByShopFindFirstArgs extends PromotionByShopFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PromotionByShop findFirstOrThrow
   */
  export type PromotionByShopFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * Filter, which PromotionByShop to fetch.
     */
    where?: PromotionByShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionByShops to fetch.
     */
    orderBy?: Enumerable<PromotionByShopOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromotionByShops.
     */
    cursor?: PromotionByShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionByShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionByShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionByShops.
     */
    distinct?: Enumerable<PromotionByShopScalarFieldEnum>
  }


  /**
   * PromotionByShop findMany
   */
  export type PromotionByShopFindManyArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * Filter, which PromotionByShops to fetch.
     */
    where?: PromotionByShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionByShops to fetch.
     */
    orderBy?: Enumerable<PromotionByShopOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromotionByShops.
     */
    cursor?: PromotionByShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionByShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionByShops.
     */
    skip?: number
    distinct?: Enumerable<PromotionByShopScalarFieldEnum>
  }


  /**
   * PromotionByShop create
   */
  export type PromotionByShopCreateArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * The data needed to create a PromotionByShop.
     */
    data: XOR<PromotionByShopCreateInput, PromotionByShopUncheckedCreateInput>
  }


  /**
   * PromotionByShop createMany
   */
  export type PromotionByShopCreateManyArgs = {
    /**
     * The data used to create many PromotionByShops.
     */
    data: Enumerable<PromotionByShopCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PromotionByShop update
   */
  export type PromotionByShopUpdateArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * The data needed to update a PromotionByShop.
     */
    data: XOR<PromotionByShopUpdateInput, PromotionByShopUncheckedUpdateInput>
    /**
     * Choose, which PromotionByShop to update.
     */
    where: PromotionByShopWhereUniqueInput
  }


  /**
   * PromotionByShop updateMany
   */
  export type PromotionByShopUpdateManyArgs = {
    /**
     * The data used to update PromotionByShops.
     */
    data: XOR<PromotionByShopUpdateManyMutationInput, PromotionByShopUncheckedUpdateManyInput>
    /**
     * Filter which PromotionByShops to update
     */
    where?: PromotionByShopWhereInput
  }


  /**
   * PromotionByShop upsert
   */
  export type PromotionByShopUpsertArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * The filter to search for the PromotionByShop to update in case it exists.
     */
    where: PromotionByShopWhereUniqueInput
    /**
     * In case the PromotionByShop found by the `where` argument doesn't exist, create a new PromotionByShop with this data.
     */
    create: XOR<PromotionByShopCreateInput, PromotionByShopUncheckedCreateInput>
    /**
     * In case the PromotionByShop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionByShopUpdateInput, PromotionByShopUncheckedUpdateInput>
  }


  /**
   * PromotionByShop delete
   */
  export type PromotionByShopDeleteArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
    /**
     * Filter which PromotionByShop to delete.
     */
    where: PromotionByShopWhereUniqueInput
  }


  /**
   * PromotionByShop deleteMany
   */
  export type PromotionByShopDeleteManyArgs = {
    /**
     * Filter which PromotionByShops to delete
     */
    where?: PromotionByShopWhereInput
  }


  /**
   * PromotionByShop without action
   */
  export type PromotionByShopArgs = {
    /**
     * Select specific fields to fetch from the PromotionByShop
     */
    select?: PromotionByShopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PromotionByShopInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PartyMemberScalarFieldEnum: {
    id: 'id',
    partyId: 'partyId',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartyMemberScalarFieldEnum = (typeof PartyMemberScalarFieldEnum)[keyof typeof PartyMemberScalarFieldEnum]


  export const PartyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    shabuShopTableId: 'shabuShopTableId',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime',
    partyDetail: 'partyDetail',
    active: 'active',
    type: 'type',
    isFull: 'isFull',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartyScalarFieldEnum = (typeof PartyScalarFieldEnum)[keyof typeof PartyScalarFieldEnum]


  export const PromotionByShopScalarFieldEnum: {
    id: 'id',
    image: 'image',
    shabuShopId: 'shabuShopId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromotionByShopScalarFieldEnum = (typeof PromotionByShopScalarFieldEnum)[keyof typeof PromotionByShopScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ShabuShopBranchScalarFieldEnum: {
    id: 'id',
    shabuShopId: 'shabuShopId',
    branchName: 'branchName',
    tel: 'tel',
    shopDetail: 'shopDetail',
    address: 'address',
    openTime: 'openTime',
    closeTime: 'closeTime',
    latitude: 'latitude',
    longtitude: 'longtitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShabuShopBranchScalarFieldEnum = (typeof ShabuShopBranchScalarFieldEnum)[keyof typeof ShabuShopBranchScalarFieldEnum]


  export const ShabuShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shopImage: 'shopImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShabuShopScalarFieldEnum = (typeof ShabuShopScalarFieldEnum)[keyof typeof ShabuShopScalarFieldEnum]


  export const ShabuShopTableScalarFieldEnum: {
    id: 'id',
    shabuShopBranchId: 'shabuShopBranchId',
    seatPerDesk: 'seatPerDesk',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShabuShopTableScalarFieldEnum = (typeof ShabuShopTableScalarFieldEnum)[keyof typeof ShabuShopTableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profileImage: 'profileImage',
    coverImage: 'coverImage',
    tel: 'tel',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    profileImage?: StringNullableFilter | string | null
    coverImage?: StringNullableFilter | string | null
    tel?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    parties?: PartyListRelationFilter
    partyMembers?: PartyMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    tel?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parties?: PartyOrderByRelationAggregateInput
    partyMembers?: PartyMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    tel?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    profileImage?: StringNullableWithAggregatesFilter | string | null
    coverImage?: StringNullableWithAggregatesFilter | string | null
    tel?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PartyWhereInput = {
    AND?: Enumerable<PartyWhereInput>
    OR?: Enumerable<PartyWhereInput>
    NOT?: Enumerable<PartyWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    userId?: IntFilter | number
    shabuShopTableId?: IntFilter | number
    startDateTime?: DateTimeFilter | Date | string
    endDateTime?: DateTimeFilter | Date | string
    partyDetail?: StringNullableFilter | string | null
    active?: BoolFilter | boolean
    type?: StringFilter | string
    isFull?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    createByUserId?: XOR<UserRelationFilter, UserWhereInput>
    table?: XOR<ShabuShopTableRelationFilter, ShabuShopTableWhereInput>
    partyMembers?: PartyMemberListRelationFilter
  }

  export type PartyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    shabuShopTableId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    partyDetail?: SortOrder
    active?: SortOrder
    type?: SortOrder
    isFull?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createByUserId?: UserOrderByWithRelationInput
    table?: ShabuShopTableOrderByWithRelationInput
    partyMembers?: PartyMemberOrderByRelationAggregateInput
  }

  export type PartyWhereUniqueInput = {
    id?: number
  }

  export type PartyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    shabuShopTableId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    partyDetail?: SortOrder
    active?: SortOrder
    type?: SortOrder
    isFull?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartyCountOrderByAggregateInput
    _avg?: PartyAvgOrderByAggregateInput
    _max?: PartyMaxOrderByAggregateInput
    _min?: PartyMinOrderByAggregateInput
    _sum?: PartySumOrderByAggregateInput
  }

  export type PartyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PartyScalarWhereWithAggregatesInput>
    OR?: Enumerable<PartyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PartyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    shabuShopTableId?: IntWithAggregatesFilter | number
    startDateTime?: DateTimeWithAggregatesFilter | Date | string
    endDateTime?: DateTimeWithAggregatesFilter | Date | string
    partyDetail?: StringNullableWithAggregatesFilter | string | null
    active?: BoolWithAggregatesFilter | boolean
    type?: StringWithAggregatesFilter | string
    isFull?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PartyMemberWhereInput = {
    AND?: Enumerable<PartyMemberWhereInput>
    OR?: Enumerable<PartyMemberWhereInput>
    NOT?: Enumerable<PartyMemberWhereInput>
    id?: IntFilter | number
    partyId?: IntFilter | number
    userId?: IntFilter | number
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    party?: XOR<PartyRelationFilter, PartyWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PartyMemberOrderByWithRelationInput = {
    id?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    party?: PartyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PartyMemberWhereUniqueInput = {
    id?: number
  }

  export type PartyMemberOrderByWithAggregationInput = {
    id?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartyMemberCountOrderByAggregateInput
    _avg?: PartyMemberAvgOrderByAggregateInput
    _max?: PartyMemberMaxOrderByAggregateInput
    _min?: PartyMemberMinOrderByAggregateInput
    _sum?: PartyMemberSumOrderByAggregateInput
  }

  export type PartyMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PartyMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<PartyMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PartyMemberScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    partyId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShabuShopWhereInput = {
    AND?: Enumerable<ShabuShopWhereInput>
    OR?: Enumerable<ShabuShopWhereInput>
    NOT?: Enumerable<ShabuShopWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    shopImage?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    shabuShopBranchs?: ShabuShopBranchListRelationFilter
    promotionByShops?: PromotionByShopListRelationFilter
  }

  export type ShabuShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shopImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shabuShopBranchs?: ShabuShopBranchOrderByRelationAggregateInput
    promotionByShops?: PromotionByShopOrderByRelationAggregateInput
  }

  export type ShabuShopWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ShabuShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shopImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShabuShopCountOrderByAggregateInput
    _avg?: ShabuShopAvgOrderByAggregateInput
    _max?: ShabuShopMaxOrderByAggregateInput
    _min?: ShabuShopMinOrderByAggregateInput
    _sum?: ShabuShopSumOrderByAggregateInput
  }

  export type ShabuShopScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShabuShopScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShabuShopScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShabuShopScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    shopImage?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShabuShopBranchWhereInput = {
    AND?: Enumerable<ShabuShopBranchWhereInput>
    OR?: Enumerable<ShabuShopBranchWhereInput>
    NOT?: Enumerable<ShabuShopBranchWhereInput>
    id?: IntFilter | number
    shabuShopId?: IntFilter | number
    branchName?: StringFilter | string
    tel?: StringFilter | string
    shopDetail?: StringNullableFilter | string | null
    address?: StringFilter | string
    openTime?: IntFilter | number
    closeTime?: IntFilter | number
    latitude?: FloatFilter | number
    longtitude?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    shabuShop?: XOR<ShabuShopRelationFilter, ShabuShopWhereInput>
    shabuShopTables?: ShabuShopTableListRelationFilter
  }

  export type ShabuShopBranchOrderByWithRelationInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
    branchName?: SortOrder
    tel?: SortOrder
    shopDetail?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longtitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shabuShop?: ShabuShopOrderByWithRelationInput
    shabuShopTables?: ShabuShopTableOrderByRelationAggregateInput
  }

  export type ShabuShopBranchWhereUniqueInput = {
    id?: number
  }

  export type ShabuShopBranchOrderByWithAggregationInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
    branchName?: SortOrder
    tel?: SortOrder
    shopDetail?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longtitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShabuShopBranchCountOrderByAggregateInput
    _avg?: ShabuShopBranchAvgOrderByAggregateInput
    _max?: ShabuShopBranchMaxOrderByAggregateInput
    _min?: ShabuShopBranchMinOrderByAggregateInput
    _sum?: ShabuShopBranchSumOrderByAggregateInput
  }

  export type ShabuShopBranchScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShabuShopBranchScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShabuShopBranchScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShabuShopBranchScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    shabuShopId?: IntWithAggregatesFilter | number
    branchName?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    shopDetail?: StringNullableWithAggregatesFilter | string | null
    address?: StringWithAggregatesFilter | string
    openTime?: IntWithAggregatesFilter | number
    closeTime?: IntWithAggregatesFilter | number
    latitude?: FloatWithAggregatesFilter | number
    longtitude?: FloatWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShabuShopTableWhereInput = {
    AND?: Enumerable<ShabuShopTableWhereInput>
    OR?: Enumerable<ShabuShopTableWhereInput>
    NOT?: Enumerable<ShabuShopTableWhereInput>
    id?: IntFilter | number
    shabuShopBranchId?: IntFilter | number
    seatPerDesk?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    branch?: XOR<ShabuShopBranchRelationFilter, ShabuShopBranchWhereInput>
    parties?: PartyListRelationFilter
  }

  export type ShabuShopTableOrderByWithRelationInput = {
    id?: SortOrder
    shabuShopBranchId?: SortOrder
    seatPerDesk?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: ShabuShopBranchOrderByWithRelationInput
    parties?: PartyOrderByRelationAggregateInput
  }

  export type ShabuShopTableWhereUniqueInput = {
    id?: number
  }

  export type ShabuShopTableOrderByWithAggregationInput = {
    id?: SortOrder
    shabuShopBranchId?: SortOrder
    seatPerDesk?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShabuShopTableCountOrderByAggregateInput
    _avg?: ShabuShopTableAvgOrderByAggregateInput
    _max?: ShabuShopTableMaxOrderByAggregateInput
    _min?: ShabuShopTableMinOrderByAggregateInput
    _sum?: ShabuShopTableSumOrderByAggregateInput
  }

  export type ShabuShopTableScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShabuShopTableScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShabuShopTableScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShabuShopTableScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    shabuShopBranchId?: IntWithAggregatesFilter | number
    seatPerDesk?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PromotionByShopWhereInput = {
    AND?: Enumerable<PromotionByShopWhereInput>
    OR?: Enumerable<PromotionByShopWhereInput>
    NOT?: Enumerable<PromotionByShopWhereInput>
    id?: IntFilter | number
    image?: StringFilter | string
    shabuShopId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    shabuShop?: XOR<ShabuShopRelationFilter, ShabuShopWhereInput>
  }

  export type PromotionByShopOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    shabuShopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shabuShop?: ShabuShopOrderByWithRelationInput
  }

  export type PromotionByShopWhereUniqueInput = {
    id?: number
  }

  export type PromotionByShopOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    shabuShopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromotionByShopCountOrderByAggregateInput
    _avg?: PromotionByShopAvgOrderByAggregateInput
    _max?: PromotionByShopMaxOrderByAggregateInput
    _min?: PromotionByShopMinOrderByAggregateInput
    _sum?: PromotionByShopSumOrderByAggregateInput
  }

  export type PromotionByShopScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PromotionByShopScalarWhereWithAggregatesInput>
    OR?: Enumerable<PromotionByShopScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PromotionByShopScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    image?: StringWithAggregatesFilter | string
    shabuShopId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    profileImage?: string | null
    coverImage?: string | null
    tel?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutCreateByUserIdInput
    partyMembers?: PartyMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    profileImage?: string | null
    coverImage?: string | null
    tel?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutCreateByUserIdInput
    partyMembers?: PartyMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutCreateByUserIdNestedInput
    partyMembers?: PartyMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutCreateByUserIdNestedInput
    partyMembers?: PartyMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    profileImage?: string | null
    coverImage?: string | null
    tel?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCreateInput = {
    name: string
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createByUserId: UserCreateNestedOneWithoutPartiesInput
    table: ShabuShopTableCreateNestedOneWithoutPartiesInput
    partyMembers?: PartyMemberCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    shabuShopTableId: number
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    partyMembers?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createByUserId?: UserUpdateOneRequiredWithoutPartiesNestedInput
    table?: ShabuShopTableUpdateOneRequiredWithoutPartiesNestedInput
    partyMembers?: PartyMemberUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    shabuShopTableId?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyMembers?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyCreateManyInput = {
    id?: number
    name: string
    userId: number
    shabuShopTableId: number
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    shabuShopTableId?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberCreateInput = {
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    party: PartyCreateNestedOneWithoutPartyMembersInput
    user: UserCreateNestedOneWithoutPartyMembersInput
  }

  export type PartyMemberUncheckedCreateInput = {
    id?: number
    partyId: number
    userId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyMemberUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutPartyMembersNestedInput
    user?: UserUpdateOneRequiredWithoutPartyMembersNestedInput
  }

  export type PartyMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partyId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberCreateManyInput = {
    id?: number
    partyId: number
    userId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyMemberUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partyId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShabuShopCreateInput = {
    name: string
    shopImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShopBranchs?: ShabuShopBranchCreateNestedManyWithoutShabuShopInput
    promotionByShops?: PromotionByShopCreateNestedManyWithoutShabuShopInput
  }

  export type ShabuShopUncheckedCreateInput = {
    id?: number
    name: string
    shopImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShopBranchs?: ShabuShopBranchUncheckedCreateNestedManyWithoutShabuShopInput
    promotionByShops?: PromotionByShopUncheckedCreateNestedManyWithoutShabuShopInput
  }

  export type ShabuShopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shopImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShopBranchs?: ShabuShopBranchUpdateManyWithoutShabuShopNestedInput
    promotionByShops?: PromotionByShopUpdateManyWithoutShabuShopNestedInput
  }

  export type ShabuShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shopImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShopBranchs?: ShabuShopBranchUncheckedUpdateManyWithoutShabuShopNestedInput
    promotionByShops?: PromotionByShopUncheckedUpdateManyWithoutShabuShopNestedInput
  }

  export type ShabuShopCreateManyInput = {
    id?: number
    name: string
    shopImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShabuShopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    shopImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShabuShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shopImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShabuShopBranchCreateInput = {
    branchName: string
    tel: string
    shopDetail?: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShop: ShabuShopCreateNestedOneWithoutShabuShopBranchsInput
    shabuShopTables?: ShabuShopTableCreateNestedManyWithoutBranchInput
  }

  export type ShabuShopBranchUncheckedCreateInput = {
    id?: number
    shabuShopId: number
    branchName: string
    tel: string
    shopDetail?: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShopTables?: ShabuShopTableUncheckedCreateNestedManyWithoutBranchInput
  }

  export type ShabuShopBranchUpdateInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShop?: ShabuShopUpdateOneRequiredWithoutShabuShopBranchsNestedInput
    shabuShopTables?: ShabuShopTableUpdateManyWithoutBranchNestedInput
  }

  export type ShabuShopBranchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shabuShopId?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShopTables?: ShabuShopTableUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type ShabuShopBranchCreateManyInput = {
    id?: number
    shabuShopId: number
    branchName: string
    tel: string
    shopDetail?: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShabuShopBranchUpdateManyMutationInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShabuShopBranchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shabuShopId?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShabuShopTableCreateInput = {
    seatPerDesk: number
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: ShabuShopBranchCreateNestedOneWithoutShabuShopTablesInput
    parties?: PartyCreateNestedManyWithoutTableInput
  }

  export type ShabuShopTableUncheckedCreateInput = {
    id?: number
    shabuShopBranchId: number
    seatPerDesk: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutTableInput
  }

  export type ShabuShopTableUpdateInput = {
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: ShabuShopBranchUpdateOneRequiredWithoutShabuShopTablesNestedInput
    parties?: PartyUpdateManyWithoutTableNestedInput
  }

  export type ShabuShopTableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shabuShopBranchId?: IntFieldUpdateOperationsInput | number
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutTableNestedInput
  }

  export type ShabuShopTableCreateManyInput = {
    id?: number
    shabuShopBranchId: number
    seatPerDesk: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShabuShopTableUpdateManyMutationInput = {
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShabuShopTableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shabuShopBranchId?: IntFieldUpdateOperationsInput | number
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionByShopCreateInput = {
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShop: ShabuShopCreateNestedOneWithoutPromotionByShopsInput
  }

  export type PromotionByShopUncheckedCreateInput = {
    id?: number
    image: string
    shabuShopId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionByShopUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShop?: ShabuShopUpdateOneRequiredWithoutPromotionByShopsNestedInput
  }

  export type PromotionByShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    shabuShopId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionByShopCreateManyInput = {
    id?: number
    image: string
    shabuShopId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionByShopUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionByShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    shabuShopId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PartyListRelationFilter = {
    every?: PartyWhereInput
    some?: PartyWhereInput
    none?: PartyWhereInput
  }

  export type PartyMemberListRelationFilter = {
    every?: PartyMemberWhereInput
    some?: PartyMemberWhereInput
    none?: PartyMemberWhereInput
  }

  export type PartyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    tel?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    tel?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    tel?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShabuShopTableRelationFilter = {
    is?: ShabuShopTableWhereInput
    isNot?: ShabuShopTableWhereInput
  }

  export type PartyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    shabuShopTableId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    partyDetail?: SortOrder
    active?: SortOrder
    type?: SortOrder
    isFull?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shabuShopTableId?: SortOrder
  }

  export type PartyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    shabuShopTableId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    partyDetail?: SortOrder
    active?: SortOrder
    type?: SortOrder
    isFull?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    shabuShopTableId?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    partyDetail?: SortOrder
    active?: SortOrder
    type?: SortOrder
    isFull?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shabuShopTableId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type PartyRelationFilter = {
    is?: PartyWhereInput
    isNot?: PartyWhereInput
  }

  export type PartyMemberCountOrderByAggregateInput = {
    id?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
  }

  export type PartyMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyMemberMinOrderByAggregateInput = {
    id?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyMemberSumOrderByAggregateInput = {
    id?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
  }

  export type ShabuShopBranchListRelationFilter = {
    every?: ShabuShopBranchWhereInput
    some?: ShabuShopBranchWhereInput
    none?: ShabuShopBranchWhereInput
  }

  export type PromotionByShopListRelationFilter = {
    every?: PromotionByShopWhereInput
    some?: PromotionByShopWhereInput
    none?: PromotionByShopWhereInput
  }

  export type ShabuShopBranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionByShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShabuShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shopImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShabuShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shopImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shopImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ShabuShopRelationFilter = {
    is?: ShabuShopWhereInput
    isNot?: ShabuShopWhereInput
  }

  export type ShabuShopTableListRelationFilter = {
    every?: ShabuShopTableWhereInput
    some?: ShabuShopTableWhereInput
    none?: ShabuShopTableWhereInput
  }

  export type ShabuShopTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShabuShopBranchCountOrderByAggregateInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
    branchName?: SortOrder
    tel?: SortOrder
    shopDetail?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longtitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopBranchAvgOrderByAggregateInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longtitude?: SortOrder
  }

  export type ShabuShopBranchMaxOrderByAggregateInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
    branchName?: SortOrder
    tel?: SortOrder
    shopDetail?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longtitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopBranchMinOrderByAggregateInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
    branchName?: SortOrder
    tel?: SortOrder
    shopDetail?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longtitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopBranchSumOrderByAggregateInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    latitude?: SortOrder
    longtitude?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type ShabuShopBranchRelationFilter = {
    is?: ShabuShopBranchWhereInput
    isNot?: ShabuShopBranchWhereInput
  }

  export type ShabuShopTableCountOrderByAggregateInput = {
    id?: SortOrder
    shabuShopBranchId?: SortOrder
    seatPerDesk?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopTableAvgOrderByAggregateInput = {
    id?: SortOrder
    shabuShopBranchId?: SortOrder
    seatPerDesk?: SortOrder
  }

  export type ShabuShopTableMaxOrderByAggregateInput = {
    id?: SortOrder
    shabuShopBranchId?: SortOrder
    seatPerDesk?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopTableMinOrderByAggregateInput = {
    id?: SortOrder
    shabuShopBranchId?: SortOrder
    seatPerDesk?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShabuShopTableSumOrderByAggregateInput = {
    id?: SortOrder
    shabuShopBranchId?: SortOrder
    seatPerDesk?: SortOrder
  }

  export type PromotionByShopCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    shabuShopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionByShopAvgOrderByAggregateInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
  }

  export type PromotionByShopMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    shabuShopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionByShopMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    shabuShopId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionByShopSumOrderByAggregateInput = {
    id?: SortOrder
    shabuShopId?: SortOrder
  }

  export type PartyCreateNestedManyWithoutCreateByUserIdInput = {
    create?: XOR<Enumerable<PartyCreateWithoutCreateByUserIdInput>, Enumerable<PartyUncheckedCreateWithoutCreateByUserIdInput>>
    connectOrCreate?: Enumerable<PartyCreateOrConnectWithoutCreateByUserIdInput>
    createMany?: PartyCreateManyCreateByUserIdInputEnvelope
    connect?: Enumerable<PartyWhereUniqueInput>
  }

  export type PartyMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PartyMemberCreateWithoutUserInput>, Enumerable<PartyMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PartyMemberCreateOrConnectWithoutUserInput>
    createMany?: PartyMemberCreateManyUserInputEnvelope
    connect?: Enumerable<PartyMemberWhereUniqueInput>
  }

  export type PartyUncheckedCreateNestedManyWithoutCreateByUserIdInput = {
    create?: XOR<Enumerable<PartyCreateWithoutCreateByUserIdInput>, Enumerable<PartyUncheckedCreateWithoutCreateByUserIdInput>>
    connectOrCreate?: Enumerable<PartyCreateOrConnectWithoutCreateByUserIdInput>
    createMany?: PartyCreateManyCreateByUserIdInputEnvelope
    connect?: Enumerable<PartyWhereUniqueInput>
  }

  export type PartyMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PartyMemberCreateWithoutUserInput>, Enumerable<PartyMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PartyMemberCreateOrConnectWithoutUserInput>
    createMany?: PartyMemberCreateManyUserInputEnvelope
    connect?: Enumerable<PartyMemberWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PartyUpdateManyWithoutCreateByUserIdNestedInput = {
    create?: XOR<Enumerable<PartyCreateWithoutCreateByUserIdInput>, Enumerable<PartyUncheckedCreateWithoutCreateByUserIdInput>>
    connectOrCreate?: Enumerable<PartyCreateOrConnectWithoutCreateByUserIdInput>
    upsert?: Enumerable<PartyUpsertWithWhereUniqueWithoutCreateByUserIdInput>
    createMany?: PartyCreateManyCreateByUserIdInputEnvelope
    set?: Enumerable<PartyWhereUniqueInput>
    disconnect?: Enumerable<PartyWhereUniqueInput>
    delete?: Enumerable<PartyWhereUniqueInput>
    connect?: Enumerable<PartyWhereUniqueInput>
    update?: Enumerable<PartyUpdateWithWhereUniqueWithoutCreateByUserIdInput>
    updateMany?: Enumerable<PartyUpdateManyWithWhereWithoutCreateByUserIdInput>
    deleteMany?: Enumerable<PartyScalarWhereInput>
  }

  export type PartyMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PartyMemberCreateWithoutUserInput>, Enumerable<PartyMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PartyMemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PartyMemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PartyMemberCreateManyUserInputEnvelope
    set?: Enumerable<PartyMemberWhereUniqueInput>
    disconnect?: Enumerable<PartyMemberWhereUniqueInput>
    delete?: Enumerable<PartyMemberWhereUniqueInput>
    connect?: Enumerable<PartyMemberWhereUniqueInput>
    update?: Enumerable<PartyMemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PartyMemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PartyMemberScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PartyUncheckedUpdateManyWithoutCreateByUserIdNestedInput = {
    create?: XOR<Enumerable<PartyCreateWithoutCreateByUserIdInput>, Enumerable<PartyUncheckedCreateWithoutCreateByUserIdInput>>
    connectOrCreate?: Enumerable<PartyCreateOrConnectWithoutCreateByUserIdInput>
    upsert?: Enumerable<PartyUpsertWithWhereUniqueWithoutCreateByUserIdInput>
    createMany?: PartyCreateManyCreateByUserIdInputEnvelope
    set?: Enumerable<PartyWhereUniqueInput>
    disconnect?: Enumerable<PartyWhereUniqueInput>
    delete?: Enumerable<PartyWhereUniqueInput>
    connect?: Enumerable<PartyWhereUniqueInput>
    update?: Enumerable<PartyUpdateWithWhereUniqueWithoutCreateByUserIdInput>
    updateMany?: Enumerable<PartyUpdateManyWithWhereWithoutCreateByUserIdInput>
    deleteMany?: Enumerable<PartyScalarWhereInput>
  }

  export type PartyMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PartyMemberCreateWithoutUserInput>, Enumerable<PartyMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PartyMemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PartyMemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PartyMemberCreateManyUserInputEnvelope
    set?: Enumerable<PartyMemberWhereUniqueInput>
    disconnect?: Enumerable<PartyMemberWhereUniqueInput>
    delete?: Enumerable<PartyMemberWhereUniqueInput>
    connect?: Enumerable<PartyMemberWhereUniqueInput>
    update?: Enumerable<PartyMemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PartyMemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PartyMemberScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPartiesInput = {
    create?: XOR<UserCreateWithoutPartiesInput, UserUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartiesInput
    connect?: UserWhereUniqueInput
  }

  export type ShabuShopTableCreateNestedOneWithoutPartiesInput = {
    create?: XOR<ShabuShopTableCreateWithoutPartiesInput, ShabuShopTableUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: ShabuShopTableCreateOrConnectWithoutPartiesInput
    connect?: ShabuShopTableWhereUniqueInput
  }

  export type PartyMemberCreateNestedManyWithoutPartyInput = {
    create?: XOR<Enumerable<PartyMemberCreateWithoutPartyInput>, Enumerable<PartyMemberUncheckedCreateWithoutPartyInput>>
    connectOrCreate?: Enumerable<PartyMemberCreateOrConnectWithoutPartyInput>
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    connect?: Enumerable<PartyMemberWhereUniqueInput>
  }

  export type PartyMemberUncheckedCreateNestedManyWithoutPartyInput = {
    create?: XOR<Enumerable<PartyMemberCreateWithoutPartyInput>, Enumerable<PartyMemberUncheckedCreateWithoutPartyInput>>
    connectOrCreate?: Enumerable<PartyMemberCreateOrConnectWithoutPartyInput>
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    connect?: Enumerable<PartyMemberWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPartiesNestedInput = {
    create?: XOR<UserCreateWithoutPartiesInput, UserUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartiesInput
    upsert?: UserUpsertWithoutPartiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPartiesInput, UserUncheckedUpdateWithoutPartiesInput>
  }

  export type ShabuShopTableUpdateOneRequiredWithoutPartiesNestedInput = {
    create?: XOR<ShabuShopTableCreateWithoutPartiesInput, ShabuShopTableUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: ShabuShopTableCreateOrConnectWithoutPartiesInput
    upsert?: ShabuShopTableUpsertWithoutPartiesInput
    connect?: ShabuShopTableWhereUniqueInput
    update?: XOR<ShabuShopTableUpdateWithoutPartiesInput, ShabuShopTableUncheckedUpdateWithoutPartiesInput>
  }

  export type PartyMemberUpdateManyWithoutPartyNestedInput = {
    create?: XOR<Enumerable<PartyMemberCreateWithoutPartyInput>, Enumerable<PartyMemberUncheckedCreateWithoutPartyInput>>
    connectOrCreate?: Enumerable<PartyMemberCreateOrConnectWithoutPartyInput>
    upsert?: Enumerable<PartyMemberUpsertWithWhereUniqueWithoutPartyInput>
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    set?: Enumerable<PartyMemberWhereUniqueInput>
    disconnect?: Enumerable<PartyMemberWhereUniqueInput>
    delete?: Enumerable<PartyMemberWhereUniqueInput>
    connect?: Enumerable<PartyMemberWhereUniqueInput>
    update?: Enumerable<PartyMemberUpdateWithWhereUniqueWithoutPartyInput>
    updateMany?: Enumerable<PartyMemberUpdateManyWithWhereWithoutPartyInput>
    deleteMany?: Enumerable<PartyMemberScalarWhereInput>
  }

  export type PartyMemberUncheckedUpdateManyWithoutPartyNestedInput = {
    create?: XOR<Enumerable<PartyMemberCreateWithoutPartyInput>, Enumerable<PartyMemberUncheckedCreateWithoutPartyInput>>
    connectOrCreate?: Enumerable<PartyMemberCreateOrConnectWithoutPartyInput>
    upsert?: Enumerable<PartyMemberUpsertWithWhereUniqueWithoutPartyInput>
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    set?: Enumerable<PartyMemberWhereUniqueInput>
    disconnect?: Enumerable<PartyMemberWhereUniqueInput>
    delete?: Enumerable<PartyMemberWhereUniqueInput>
    connect?: Enumerable<PartyMemberWhereUniqueInput>
    update?: Enumerable<PartyMemberUpdateWithWhereUniqueWithoutPartyInput>
    updateMany?: Enumerable<PartyMemberUpdateManyWithWhereWithoutPartyInput>
    deleteMany?: Enumerable<PartyMemberScalarWhereInput>
  }

  export type PartyCreateNestedOneWithoutPartyMembersInput = {
    create?: XOR<PartyCreateWithoutPartyMembersInput, PartyUncheckedCreateWithoutPartyMembersInput>
    connectOrCreate?: PartyCreateOrConnectWithoutPartyMembersInput
    connect?: PartyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPartyMembersInput = {
    create?: XOR<UserCreateWithoutPartyMembersInput, UserUncheckedCreateWithoutPartyMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartyMembersInput
    connect?: UserWhereUniqueInput
  }

  export type PartyUpdateOneRequiredWithoutPartyMembersNestedInput = {
    create?: XOR<PartyCreateWithoutPartyMembersInput, PartyUncheckedCreateWithoutPartyMembersInput>
    connectOrCreate?: PartyCreateOrConnectWithoutPartyMembersInput
    upsert?: PartyUpsertWithoutPartyMembersInput
    connect?: PartyWhereUniqueInput
    update?: XOR<PartyUpdateWithoutPartyMembersInput, PartyUncheckedUpdateWithoutPartyMembersInput>
  }

  export type UserUpdateOneRequiredWithoutPartyMembersNestedInput = {
    create?: XOR<UserCreateWithoutPartyMembersInput, UserUncheckedCreateWithoutPartyMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartyMembersInput
    upsert?: UserUpsertWithoutPartyMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPartyMembersInput, UserUncheckedUpdateWithoutPartyMembersInput>
  }

  export type ShabuShopBranchCreateNestedManyWithoutShabuShopInput = {
    create?: XOR<Enumerable<ShabuShopBranchCreateWithoutShabuShopInput>, Enumerable<ShabuShopBranchUncheckedCreateWithoutShabuShopInput>>
    connectOrCreate?: Enumerable<ShabuShopBranchCreateOrConnectWithoutShabuShopInput>
    createMany?: ShabuShopBranchCreateManyShabuShopInputEnvelope
    connect?: Enumerable<ShabuShopBranchWhereUniqueInput>
  }

  export type PromotionByShopCreateNestedManyWithoutShabuShopInput = {
    create?: XOR<Enumerable<PromotionByShopCreateWithoutShabuShopInput>, Enumerable<PromotionByShopUncheckedCreateWithoutShabuShopInput>>
    connectOrCreate?: Enumerable<PromotionByShopCreateOrConnectWithoutShabuShopInput>
    createMany?: PromotionByShopCreateManyShabuShopInputEnvelope
    connect?: Enumerable<PromotionByShopWhereUniqueInput>
  }

  export type ShabuShopBranchUncheckedCreateNestedManyWithoutShabuShopInput = {
    create?: XOR<Enumerable<ShabuShopBranchCreateWithoutShabuShopInput>, Enumerable<ShabuShopBranchUncheckedCreateWithoutShabuShopInput>>
    connectOrCreate?: Enumerable<ShabuShopBranchCreateOrConnectWithoutShabuShopInput>
    createMany?: ShabuShopBranchCreateManyShabuShopInputEnvelope
    connect?: Enumerable<ShabuShopBranchWhereUniqueInput>
  }

  export type PromotionByShopUncheckedCreateNestedManyWithoutShabuShopInput = {
    create?: XOR<Enumerable<PromotionByShopCreateWithoutShabuShopInput>, Enumerable<PromotionByShopUncheckedCreateWithoutShabuShopInput>>
    connectOrCreate?: Enumerable<PromotionByShopCreateOrConnectWithoutShabuShopInput>
    createMany?: PromotionByShopCreateManyShabuShopInputEnvelope
    connect?: Enumerable<PromotionByShopWhereUniqueInput>
  }

  export type ShabuShopBranchUpdateManyWithoutShabuShopNestedInput = {
    create?: XOR<Enumerable<ShabuShopBranchCreateWithoutShabuShopInput>, Enumerable<ShabuShopBranchUncheckedCreateWithoutShabuShopInput>>
    connectOrCreate?: Enumerable<ShabuShopBranchCreateOrConnectWithoutShabuShopInput>
    upsert?: Enumerable<ShabuShopBranchUpsertWithWhereUniqueWithoutShabuShopInput>
    createMany?: ShabuShopBranchCreateManyShabuShopInputEnvelope
    set?: Enumerable<ShabuShopBranchWhereUniqueInput>
    disconnect?: Enumerable<ShabuShopBranchWhereUniqueInput>
    delete?: Enumerable<ShabuShopBranchWhereUniqueInput>
    connect?: Enumerable<ShabuShopBranchWhereUniqueInput>
    update?: Enumerable<ShabuShopBranchUpdateWithWhereUniqueWithoutShabuShopInput>
    updateMany?: Enumerable<ShabuShopBranchUpdateManyWithWhereWithoutShabuShopInput>
    deleteMany?: Enumerable<ShabuShopBranchScalarWhereInput>
  }

  export type PromotionByShopUpdateManyWithoutShabuShopNestedInput = {
    create?: XOR<Enumerable<PromotionByShopCreateWithoutShabuShopInput>, Enumerable<PromotionByShopUncheckedCreateWithoutShabuShopInput>>
    connectOrCreate?: Enumerable<PromotionByShopCreateOrConnectWithoutShabuShopInput>
    upsert?: Enumerable<PromotionByShopUpsertWithWhereUniqueWithoutShabuShopInput>
    createMany?: PromotionByShopCreateManyShabuShopInputEnvelope
    set?: Enumerable<PromotionByShopWhereUniqueInput>
    disconnect?: Enumerable<PromotionByShopWhereUniqueInput>
    delete?: Enumerable<PromotionByShopWhereUniqueInput>
    connect?: Enumerable<PromotionByShopWhereUniqueInput>
    update?: Enumerable<PromotionByShopUpdateWithWhereUniqueWithoutShabuShopInput>
    updateMany?: Enumerable<PromotionByShopUpdateManyWithWhereWithoutShabuShopInput>
    deleteMany?: Enumerable<PromotionByShopScalarWhereInput>
  }

  export type ShabuShopBranchUncheckedUpdateManyWithoutShabuShopNestedInput = {
    create?: XOR<Enumerable<ShabuShopBranchCreateWithoutShabuShopInput>, Enumerable<ShabuShopBranchUncheckedCreateWithoutShabuShopInput>>
    connectOrCreate?: Enumerable<ShabuShopBranchCreateOrConnectWithoutShabuShopInput>
    upsert?: Enumerable<ShabuShopBranchUpsertWithWhereUniqueWithoutShabuShopInput>
    createMany?: ShabuShopBranchCreateManyShabuShopInputEnvelope
    set?: Enumerable<ShabuShopBranchWhereUniqueInput>
    disconnect?: Enumerable<ShabuShopBranchWhereUniqueInput>
    delete?: Enumerable<ShabuShopBranchWhereUniqueInput>
    connect?: Enumerable<ShabuShopBranchWhereUniqueInput>
    update?: Enumerable<ShabuShopBranchUpdateWithWhereUniqueWithoutShabuShopInput>
    updateMany?: Enumerable<ShabuShopBranchUpdateManyWithWhereWithoutShabuShopInput>
    deleteMany?: Enumerable<ShabuShopBranchScalarWhereInput>
  }

  export type PromotionByShopUncheckedUpdateManyWithoutShabuShopNestedInput = {
    create?: XOR<Enumerable<PromotionByShopCreateWithoutShabuShopInput>, Enumerable<PromotionByShopUncheckedCreateWithoutShabuShopInput>>
    connectOrCreate?: Enumerable<PromotionByShopCreateOrConnectWithoutShabuShopInput>
    upsert?: Enumerable<PromotionByShopUpsertWithWhereUniqueWithoutShabuShopInput>
    createMany?: PromotionByShopCreateManyShabuShopInputEnvelope
    set?: Enumerable<PromotionByShopWhereUniqueInput>
    disconnect?: Enumerable<PromotionByShopWhereUniqueInput>
    delete?: Enumerable<PromotionByShopWhereUniqueInput>
    connect?: Enumerable<PromotionByShopWhereUniqueInput>
    update?: Enumerable<PromotionByShopUpdateWithWhereUniqueWithoutShabuShopInput>
    updateMany?: Enumerable<PromotionByShopUpdateManyWithWhereWithoutShabuShopInput>
    deleteMany?: Enumerable<PromotionByShopScalarWhereInput>
  }

  export type ShabuShopCreateNestedOneWithoutShabuShopBranchsInput = {
    create?: XOR<ShabuShopCreateWithoutShabuShopBranchsInput, ShabuShopUncheckedCreateWithoutShabuShopBranchsInput>
    connectOrCreate?: ShabuShopCreateOrConnectWithoutShabuShopBranchsInput
    connect?: ShabuShopWhereUniqueInput
  }

  export type ShabuShopTableCreateNestedManyWithoutBranchInput = {
    create?: XOR<Enumerable<ShabuShopTableCreateWithoutBranchInput>, Enumerable<ShabuShopTableUncheckedCreateWithoutBranchInput>>
    connectOrCreate?: Enumerable<ShabuShopTableCreateOrConnectWithoutBranchInput>
    createMany?: ShabuShopTableCreateManyBranchInputEnvelope
    connect?: Enumerable<ShabuShopTableWhereUniqueInput>
  }

  export type ShabuShopTableUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<Enumerable<ShabuShopTableCreateWithoutBranchInput>, Enumerable<ShabuShopTableUncheckedCreateWithoutBranchInput>>
    connectOrCreate?: Enumerable<ShabuShopTableCreateOrConnectWithoutBranchInput>
    createMany?: ShabuShopTableCreateManyBranchInputEnvelope
    connect?: Enumerable<ShabuShopTableWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShabuShopUpdateOneRequiredWithoutShabuShopBranchsNestedInput = {
    create?: XOR<ShabuShopCreateWithoutShabuShopBranchsInput, ShabuShopUncheckedCreateWithoutShabuShopBranchsInput>
    connectOrCreate?: ShabuShopCreateOrConnectWithoutShabuShopBranchsInput
    upsert?: ShabuShopUpsertWithoutShabuShopBranchsInput
    connect?: ShabuShopWhereUniqueInput
    update?: XOR<ShabuShopUpdateWithoutShabuShopBranchsInput, ShabuShopUncheckedUpdateWithoutShabuShopBranchsInput>
  }

  export type ShabuShopTableUpdateManyWithoutBranchNestedInput = {
    create?: XOR<Enumerable<ShabuShopTableCreateWithoutBranchInput>, Enumerable<ShabuShopTableUncheckedCreateWithoutBranchInput>>
    connectOrCreate?: Enumerable<ShabuShopTableCreateOrConnectWithoutBranchInput>
    upsert?: Enumerable<ShabuShopTableUpsertWithWhereUniqueWithoutBranchInput>
    createMany?: ShabuShopTableCreateManyBranchInputEnvelope
    set?: Enumerable<ShabuShopTableWhereUniqueInput>
    disconnect?: Enumerable<ShabuShopTableWhereUniqueInput>
    delete?: Enumerable<ShabuShopTableWhereUniqueInput>
    connect?: Enumerable<ShabuShopTableWhereUniqueInput>
    update?: Enumerable<ShabuShopTableUpdateWithWhereUniqueWithoutBranchInput>
    updateMany?: Enumerable<ShabuShopTableUpdateManyWithWhereWithoutBranchInput>
    deleteMany?: Enumerable<ShabuShopTableScalarWhereInput>
  }

  export type ShabuShopTableUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<Enumerable<ShabuShopTableCreateWithoutBranchInput>, Enumerable<ShabuShopTableUncheckedCreateWithoutBranchInput>>
    connectOrCreate?: Enumerable<ShabuShopTableCreateOrConnectWithoutBranchInput>
    upsert?: Enumerable<ShabuShopTableUpsertWithWhereUniqueWithoutBranchInput>
    createMany?: ShabuShopTableCreateManyBranchInputEnvelope
    set?: Enumerable<ShabuShopTableWhereUniqueInput>
    disconnect?: Enumerable<ShabuShopTableWhereUniqueInput>
    delete?: Enumerable<ShabuShopTableWhereUniqueInput>
    connect?: Enumerable<ShabuShopTableWhereUniqueInput>
    update?: Enumerable<ShabuShopTableUpdateWithWhereUniqueWithoutBranchInput>
    updateMany?: Enumerable<ShabuShopTableUpdateManyWithWhereWithoutBranchInput>
    deleteMany?: Enumerable<ShabuShopTableScalarWhereInput>
  }

  export type ShabuShopBranchCreateNestedOneWithoutShabuShopTablesInput = {
    create?: XOR<ShabuShopBranchCreateWithoutShabuShopTablesInput, ShabuShopBranchUncheckedCreateWithoutShabuShopTablesInput>
    connectOrCreate?: ShabuShopBranchCreateOrConnectWithoutShabuShopTablesInput
    connect?: ShabuShopBranchWhereUniqueInput
  }

  export type PartyCreateNestedManyWithoutTableInput = {
    create?: XOR<Enumerable<PartyCreateWithoutTableInput>, Enumerable<PartyUncheckedCreateWithoutTableInput>>
    connectOrCreate?: Enumerable<PartyCreateOrConnectWithoutTableInput>
    createMany?: PartyCreateManyTableInputEnvelope
    connect?: Enumerable<PartyWhereUniqueInput>
  }

  export type PartyUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<Enumerable<PartyCreateWithoutTableInput>, Enumerable<PartyUncheckedCreateWithoutTableInput>>
    connectOrCreate?: Enumerable<PartyCreateOrConnectWithoutTableInput>
    createMany?: PartyCreateManyTableInputEnvelope
    connect?: Enumerable<PartyWhereUniqueInput>
  }

  export type ShabuShopBranchUpdateOneRequiredWithoutShabuShopTablesNestedInput = {
    create?: XOR<ShabuShopBranchCreateWithoutShabuShopTablesInput, ShabuShopBranchUncheckedCreateWithoutShabuShopTablesInput>
    connectOrCreate?: ShabuShopBranchCreateOrConnectWithoutShabuShopTablesInput
    upsert?: ShabuShopBranchUpsertWithoutShabuShopTablesInput
    connect?: ShabuShopBranchWhereUniqueInput
    update?: XOR<ShabuShopBranchUpdateWithoutShabuShopTablesInput, ShabuShopBranchUncheckedUpdateWithoutShabuShopTablesInput>
  }

  export type PartyUpdateManyWithoutTableNestedInput = {
    create?: XOR<Enumerable<PartyCreateWithoutTableInput>, Enumerable<PartyUncheckedCreateWithoutTableInput>>
    connectOrCreate?: Enumerable<PartyCreateOrConnectWithoutTableInput>
    upsert?: Enumerable<PartyUpsertWithWhereUniqueWithoutTableInput>
    createMany?: PartyCreateManyTableInputEnvelope
    set?: Enumerable<PartyWhereUniqueInput>
    disconnect?: Enumerable<PartyWhereUniqueInput>
    delete?: Enumerable<PartyWhereUniqueInput>
    connect?: Enumerable<PartyWhereUniqueInput>
    update?: Enumerable<PartyUpdateWithWhereUniqueWithoutTableInput>
    updateMany?: Enumerable<PartyUpdateManyWithWhereWithoutTableInput>
    deleteMany?: Enumerable<PartyScalarWhereInput>
  }

  export type PartyUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<Enumerable<PartyCreateWithoutTableInput>, Enumerable<PartyUncheckedCreateWithoutTableInput>>
    connectOrCreate?: Enumerable<PartyCreateOrConnectWithoutTableInput>
    upsert?: Enumerable<PartyUpsertWithWhereUniqueWithoutTableInput>
    createMany?: PartyCreateManyTableInputEnvelope
    set?: Enumerable<PartyWhereUniqueInput>
    disconnect?: Enumerable<PartyWhereUniqueInput>
    delete?: Enumerable<PartyWhereUniqueInput>
    connect?: Enumerable<PartyWhereUniqueInput>
    update?: Enumerable<PartyUpdateWithWhereUniqueWithoutTableInput>
    updateMany?: Enumerable<PartyUpdateManyWithWhereWithoutTableInput>
    deleteMany?: Enumerable<PartyScalarWhereInput>
  }

  export type ShabuShopCreateNestedOneWithoutPromotionByShopsInput = {
    create?: XOR<ShabuShopCreateWithoutPromotionByShopsInput, ShabuShopUncheckedCreateWithoutPromotionByShopsInput>
    connectOrCreate?: ShabuShopCreateOrConnectWithoutPromotionByShopsInput
    connect?: ShabuShopWhereUniqueInput
  }

  export type ShabuShopUpdateOneRequiredWithoutPromotionByShopsNestedInput = {
    create?: XOR<ShabuShopCreateWithoutPromotionByShopsInput, ShabuShopUncheckedCreateWithoutPromotionByShopsInput>
    connectOrCreate?: ShabuShopCreateOrConnectWithoutPromotionByShopsInput
    upsert?: ShabuShopUpsertWithoutPromotionByShopsInput
    connect?: ShabuShopWhereUniqueInput
    update?: XOR<ShabuShopUpdateWithoutPromotionByShopsInput, ShabuShopUncheckedUpdateWithoutPromotionByShopsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type PartyCreateWithoutCreateByUserIdInput = {
    name: string
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: ShabuShopTableCreateNestedOneWithoutPartiesInput
    partyMembers?: PartyMemberCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutCreateByUserIdInput = {
    id?: number
    name: string
    shabuShopTableId: number
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    partyMembers?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutCreateByUserIdInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutCreateByUserIdInput, PartyUncheckedCreateWithoutCreateByUserIdInput>
  }

  export type PartyCreateManyCreateByUserIdInputEnvelope = {
    data: Enumerable<PartyCreateManyCreateByUserIdInput>
    skipDuplicates?: boolean
  }

  export type PartyMemberCreateWithoutUserInput = {
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    party: PartyCreateNestedOneWithoutPartyMembersInput
  }

  export type PartyMemberUncheckedCreateWithoutUserInput = {
    id?: number
    partyId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyMemberCreateOrConnectWithoutUserInput = {
    where: PartyMemberWhereUniqueInput
    create: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
  }

  export type PartyMemberCreateManyUserInputEnvelope = {
    data: Enumerable<PartyMemberCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PartyUpsertWithWhereUniqueWithoutCreateByUserIdInput = {
    where: PartyWhereUniqueInput
    update: XOR<PartyUpdateWithoutCreateByUserIdInput, PartyUncheckedUpdateWithoutCreateByUserIdInput>
    create: XOR<PartyCreateWithoutCreateByUserIdInput, PartyUncheckedCreateWithoutCreateByUserIdInput>
  }

  export type PartyUpdateWithWhereUniqueWithoutCreateByUserIdInput = {
    where: PartyWhereUniqueInput
    data: XOR<PartyUpdateWithoutCreateByUserIdInput, PartyUncheckedUpdateWithoutCreateByUserIdInput>
  }

  export type PartyUpdateManyWithWhereWithoutCreateByUserIdInput = {
    where: PartyScalarWhereInput
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyWithoutPartiesInput>
  }

  export type PartyScalarWhereInput = {
    AND?: Enumerable<PartyScalarWhereInput>
    OR?: Enumerable<PartyScalarWhereInput>
    NOT?: Enumerable<PartyScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    userId?: IntFilter | number
    shabuShopTableId?: IntFilter | number
    startDateTime?: DateTimeFilter | Date | string
    endDateTime?: DateTimeFilter | Date | string
    partyDetail?: StringNullableFilter | string | null
    active?: BoolFilter | boolean
    type?: StringFilter | string
    isFull?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PartyMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: PartyMemberWhereUniqueInput
    update: XOR<PartyMemberUpdateWithoutUserInput, PartyMemberUncheckedUpdateWithoutUserInput>
    create: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
  }

  export type PartyMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: PartyMemberWhereUniqueInput
    data: XOR<PartyMemberUpdateWithoutUserInput, PartyMemberUncheckedUpdateWithoutUserInput>
  }

  export type PartyMemberUpdateManyWithWhereWithoutUserInput = {
    where: PartyMemberScalarWhereInput
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyWithoutPartyMembersInput>
  }

  export type PartyMemberScalarWhereInput = {
    AND?: Enumerable<PartyMemberScalarWhereInput>
    OR?: Enumerable<PartyMemberScalarWhereInput>
    NOT?: Enumerable<PartyMemberScalarWhereInput>
    id?: IntFilter | number
    partyId?: IntFilter | number
    userId?: IntFilter | number
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutPartiesInput = {
    name: string
    email: string
    profileImage?: string | null
    coverImage?: string | null
    tel?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partyMembers?: PartyMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartiesInput = {
    id?: number
    name: string
    email: string
    profileImage?: string | null
    coverImage?: string | null
    tel?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partyMembers?: PartyMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartiesInput, UserUncheckedCreateWithoutPartiesInput>
  }

  export type ShabuShopTableCreateWithoutPartiesInput = {
    seatPerDesk: number
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: ShabuShopBranchCreateNestedOneWithoutShabuShopTablesInput
  }

  export type ShabuShopTableUncheckedCreateWithoutPartiesInput = {
    id?: number
    shabuShopBranchId: number
    seatPerDesk: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShabuShopTableCreateOrConnectWithoutPartiesInput = {
    where: ShabuShopTableWhereUniqueInput
    create: XOR<ShabuShopTableCreateWithoutPartiesInput, ShabuShopTableUncheckedCreateWithoutPartiesInput>
  }

  export type PartyMemberCreateWithoutPartyInput = {
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPartyMembersInput
  }

  export type PartyMemberUncheckedCreateWithoutPartyInput = {
    id?: number
    userId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyMemberCreateOrConnectWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    create: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput>
  }

  export type PartyMemberCreateManyPartyInputEnvelope = {
    data: Enumerable<PartyMemberCreateManyPartyInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPartiesInput = {
    update: XOR<UserUpdateWithoutPartiesInput, UserUncheckedUpdateWithoutPartiesInput>
    create: XOR<UserCreateWithoutPartiesInput, UserUncheckedCreateWithoutPartiesInput>
  }

  export type UserUpdateWithoutPartiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyMembers?: PartyMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyMembers?: PartyMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShabuShopTableUpsertWithoutPartiesInput = {
    update: XOR<ShabuShopTableUpdateWithoutPartiesInput, ShabuShopTableUncheckedUpdateWithoutPartiesInput>
    create: XOR<ShabuShopTableCreateWithoutPartiesInput, ShabuShopTableUncheckedCreateWithoutPartiesInput>
  }

  export type ShabuShopTableUpdateWithoutPartiesInput = {
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: ShabuShopBranchUpdateOneRequiredWithoutShabuShopTablesNestedInput
  }

  export type ShabuShopTableUncheckedUpdateWithoutPartiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    shabuShopBranchId?: IntFieldUpdateOperationsInput | number
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberUpsertWithWhereUniqueWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    update: XOR<PartyMemberUpdateWithoutPartyInput, PartyMemberUncheckedUpdateWithoutPartyInput>
    create: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput>
  }

  export type PartyMemberUpdateWithWhereUniqueWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    data: XOR<PartyMemberUpdateWithoutPartyInput, PartyMemberUncheckedUpdateWithoutPartyInput>
  }

  export type PartyMemberUpdateManyWithWhereWithoutPartyInput = {
    where: PartyMemberScalarWhereInput
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyWithoutPartyMembersInput>
  }

  export type PartyCreateWithoutPartyMembersInput = {
    name: string
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createByUserId: UserCreateNestedOneWithoutPartiesInput
    table: ShabuShopTableCreateNestedOneWithoutPartiesInput
  }

  export type PartyUncheckedCreateWithoutPartyMembersInput = {
    id?: number
    name: string
    userId: number
    shabuShopTableId: number
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyCreateOrConnectWithoutPartyMembersInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutPartyMembersInput, PartyUncheckedCreateWithoutPartyMembersInput>
  }

  export type UserCreateWithoutPartyMembersInput = {
    name: string
    email: string
    profileImage?: string | null
    coverImage?: string | null
    tel?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutCreateByUserIdInput
  }

  export type UserUncheckedCreateWithoutPartyMembersInput = {
    id?: number
    name: string
    email: string
    profileImage?: string | null
    coverImage?: string | null
    tel?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutCreateByUserIdInput
  }

  export type UserCreateOrConnectWithoutPartyMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartyMembersInput, UserUncheckedCreateWithoutPartyMembersInput>
  }

  export type PartyUpsertWithoutPartyMembersInput = {
    update: XOR<PartyUpdateWithoutPartyMembersInput, PartyUncheckedUpdateWithoutPartyMembersInput>
    create: XOR<PartyCreateWithoutPartyMembersInput, PartyUncheckedCreateWithoutPartyMembersInput>
  }

  export type PartyUpdateWithoutPartyMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createByUserId?: UserUpdateOneRequiredWithoutPartiesNestedInput
    table?: ShabuShopTableUpdateOneRequiredWithoutPartiesNestedInput
  }

  export type PartyUncheckedUpdateWithoutPartyMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    shabuShopTableId?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPartyMembersInput = {
    update: XOR<UserUpdateWithoutPartyMembersInput, UserUncheckedUpdateWithoutPartyMembersInput>
    create: XOR<UserCreateWithoutPartyMembersInput, UserUncheckedCreateWithoutPartyMembersInput>
  }

  export type UserUpdateWithoutPartyMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutCreateByUserIdNestedInput
  }

  export type UserUncheckedUpdateWithoutPartyMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutCreateByUserIdNestedInput
  }

  export type ShabuShopBranchCreateWithoutShabuShopInput = {
    branchName: string
    tel: string
    shopDetail?: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShopTables?: ShabuShopTableCreateNestedManyWithoutBranchInput
  }

  export type ShabuShopBranchUncheckedCreateWithoutShabuShopInput = {
    id?: number
    branchName: string
    tel: string
    shopDetail?: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShopTables?: ShabuShopTableUncheckedCreateNestedManyWithoutBranchInput
  }

  export type ShabuShopBranchCreateOrConnectWithoutShabuShopInput = {
    where: ShabuShopBranchWhereUniqueInput
    create: XOR<ShabuShopBranchCreateWithoutShabuShopInput, ShabuShopBranchUncheckedCreateWithoutShabuShopInput>
  }

  export type ShabuShopBranchCreateManyShabuShopInputEnvelope = {
    data: Enumerable<ShabuShopBranchCreateManyShabuShopInput>
    skipDuplicates?: boolean
  }

  export type PromotionByShopCreateWithoutShabuShopInput = {
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionByShopUncheckedCreateWithoutShabuShopInput = {
    id?: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionByShopCreateOrConnectWithoutShabuShopInput = {
    where: PromotionByShopWhereUniqueInput
    create: XOR<PromotionByShopCreateWithoutShabuShopInput, PromotionByShopUncheckedCreateWithoutShabuShopInput>
  }

  export type PromotionByShopCreateManyShabuShopInputEnvelope = {
    data: Enumerable<PromotionByShopCreateManyShabuShopInput>
    skipDuplicates?: boolean
  }

  export type ShabuShopBranchUpsertWithWhereUniqueWithoutShabuShopInput = {
    where: ShabuShopBranchWhereUniqueInput
    update: XOR<ShabuShopBranchUpdateWithoutShabuShopInput, ShabuShopBranchUncheckedUpdateWithoutShabuShopInput>
    create: XOR<ShabuShopBranchCreateWithoutShabuShopInput, ShabuShopBranchUncheckedCreateWithoutShabuShopInput>
  }

  export type ShabuShopBranchUpdateWithWhereUniqueWithoutShabuShopInput = {
    where: ShabuShopBranchWhereUniqueInput
    data: XOR<ShabuShopBranchUpdateWithoutShabuShopInput, ShabuShopBranchUncheckedUpdateWithoutShabuShopInput>
  }

  export type ShabuShopBranchUpdateManyWithWhereWithoutShabuShopInput = {
    where: ShabuShopBranchScalarWhereInput
    data: XOR<ShabuShopBranchUpdateManyMutationInput, ShabuShopBranchUncheckedUpdateManyWithoutShabuShopBranchsInput>
  }

  export type ShabuShopBranchScalarWhereInput = {
    AND?: Enumerable<ShabuShopBranchScalarWhereInput>
    OR?: Enumerable<ShabuShopBranchScalarWhereInput>
    NOT?: Enumerable<ShabuShopBranchScalarWhereInput>
    id?: IntFilter | number
    shabuShopId?: IntFilter | number
    branchName?: StringFilter | string
    tel?: StringFilter | string
    shopDetail?: StringNullableFilter | string | null
    address?: StringFilter | string
    openTime?: IntFilter | number
    closeTime?: IntFilter | number
    latitude?: FloatFilter | number
    longtitude?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PromotionByShopUpsertWithWhereUniqueWithoutShabuShopInput = {
    where: PromotionByShopWhereUniqueInput
    update: XOR<PromotionByShopUpdateWithoutShabuShopInput, PromotionByShopUncheckedUpdateWithoutShabuShopInput>
    create: XOR<PromotionByShopCreateWithoutShabuShopInput, PromotionByShopUncheckedCreateWithoutShabuShopInput>
  }

  export type PromotionByShopUpdateWithWhereUniqueWithoutShabuShopInput = {
    where: PromotionByShopWhereUniqueInput
    data: XOR<PromotionByShopUpdateWithoutShabuShopInput, PromotionByShopUncheckedUpdateWithoutShabuShopInput>
  }

  export type PromotionByShopUpdateManyWithWhereWithoutShabuShopInput = {
    where: PromotionByShopScalarWhereInput
    data: XOR<PromotionByShopUpdateManyMutationInput, PromotionByShopUncheckedUpdateManyWithoutPromotionByShopsInput>
  }

  export type PromotionByShopScalarWhereInput = {
    AND?: Enumerable<PromotionByShopScalarWhereInput>
    OR?: Enumerable<PromotionByShopScalarWhereInput>
    NOT?: Enumerable<PromotionByShopScalarWhereInput>
    id?: IntFilter | number
    image?: StringFilter | string
    shabuShopId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShabuShopCreateWithoutShabuShopBranchsInput = {
    name: string
    shopImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotionByShops?: PromotionByShopCreateNestedManyWithoutShabuShopInput
  }

  export type ShabuShopUncheckedCreateWithoutShabuShopBranchsInput = {
    id?: number
    name: string
    shopImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotionByShops?: PromotionByShopUncheckedCreateNestedManyWithoutShabuShopInput
  }

  export type ShabuShopCreateOrConnectWithoutShabuShopBranchsInput = {
    where: ShabuShopWhereUniqueInput
    create: XOR<ShabuShopCreateWithoutShabuShopBranchsInput, ShabuShopUncheckedCreateWithoutShabuShopBranchsInput>
  }

  export type ShabuShopTableCreateWithoutBranchInput = {
    seatPerDesk: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutTableInput
  }

  export type ShabuShopTableUncheckedCreateWithoutBranchInput = {
    id?: number
    seatPerDesk: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutTableInput
  }

  export type ShabuShopTableCreateOrConnectWithoutBranchInput = {
    where: ShabuShopTableWhereUniqueInput
    create: XOR<ShabuShopTableCreateWithoutBranchInput, ShabuShopTableUncheckedCreateWithoutBranchInput>
  }

  export type ShabuShopTableCreateManyBranchInputEnvelope = {
    data: Enumerable<ShabuShopTableCreateManyBranchInput>
    skipDuplicates?: boolean
  }

  export type ShabuShopUpsertWithoutShabuShopBranchsInput = {
    update: XOR<ShabuShopUpdateWithoutShabuShopBranchsInput, ShabuShopUncheckedUpdateWithoutShabuShopBranchsInput>
    create: XOR<ShabuShopCreateWithoutShabuShopBranchsInput, ShabuShopUncheckedCreateWithoutShabuShopBranchsInput>
  }

  export type ShabuShopUpdateWithoutShabuShopBranchsInput = {
    name?: StringFieldUpdateOperationsInput | string
    shopImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotionByShops?: PromotionByShopUpdateManyWithoutShabuShopNestedInput
  }

  export type ShabuShopUncheckedUpdateWithoutShabuShopBranchsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shopImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotionByShops?: PromotionByShopUncheckedUpdateManyWithoutShabuShopNestedInput
  }

  export type ShabuShopTableUpsertWithWhereUniqueWithoutBranchInput = {
    where: ShabuShopTableWhereUniqueInput
    update: XOR<ShabuShopTableUpdateWithoutBranchInput, ShabuShopTableUncheckedUpdateWithoutBranchInput>
    create: XOR<ShabuShopTableCreateWithoutBranchInput, ShabuShopTableUncheckedCreateWithoutBranchInput>
  }

  export type ShabuShopTableUpdateWithWhereUniqueWithoutBranchInput = {
    where: ShabuShopTableWhereUniqueInput
    data: XOR<ShabuShopTableUpdateWithoutBranchInput, ShabuShopTableUncheckedUpdateWithoutBranchInput>
  }

  export type ShabuShopTableUpdateManyWithWhereWithoutBranchInput = {
    where: ShabuShopTableScalarWhereInput
    data: XOR<ShabuShopTableUpdateManyMutationInput, ShabuShopTableUncheckedUpdateManyWithoutShabuShopTablesInput>
  }

  export type ShabuShopTableScalarWhereInput = {
    AND?: Enumerable<ShabuShopTableScalarWhereInput>
    OR?: Enumerable<ShabuShopTableScalarWhereInput>
    NOT?: Enumerable<ShabuShopTableScalarWhereInput>
    id?: IntFilter | number
    shabuShopBranchId?: IntFilter | number
    seatPerDesk?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShabuShopBranchCreateWithoutShabuShopTablesInput = {
    branchName: string
    tel: string
    shopDetail?: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShop: ShabuShopCreateNestedOneWithoutShabuShopBranchsInput
  }

  export type ShabuShopBranchUncheckedCreateWithoutShabuShopTablesInput = {
    id?: number
    shabuShopId: number
    branchName: string
    tel: string
    shopDetail?: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShabuShopBranchCreateOrConnectWithoutShabuShopTablesInput = {
    where: ShabuShopBranchWhereUniqueInput
    create: XOR<ShabuShopBranchCreateWithoutShabuShopTablesInput, ShabuShopBranchUncheckedCreateWithoutShabuShopTablesInput>
  }

  export type PartyCreateWithoutTableInput = {
    name: string
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createByUserId: UserCreateNestedOneWithoutPartiesInput
    partyMembers?: PartyMemberCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutTableInput = {
    id?: number
    name: string
    userId: number
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    partyMembers?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutTableInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutTableInput, PartyUncheckedCreateWithoutTableInput>
  }

  export type PartyCreateManyTableInputEnvelope = {
    data: Enumerable<PartyCreateManyTableInput>
    skipDuplicates?: boolean
  }

  export type ShabuShopBranchUpsertWithoutShabuShopTablesInput = {
    update: XOR<ShabuShopBranchUpdateWithoutShabuShopTablesInput, ShabuShopBranchUncheckedUpdateWithoutShabuShopTablesInput>
    create: XOR<ShabuShopBranchCreateWithoutShabuShopTablesInput, ShabuShopBranchUncheckedCreateWithoutShabuShopTablesInput>
  }

  export type ShabuShopBranchUpdateWithoutShabuShopTablesInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShop?: ShabuShopUpdateOneRequiredWithoutShabuShopBranchsNestedInput
  }

  export type ShabuShopBranchUncheckedUpdateWithoutShabuShopTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    shabuShopId?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyUpsertWithWhereUniqueWithoutTableInput = {
    where: PartyWhereUniqueInput
    update: XOR<PartyUpdateWithoutTableInput, PartyUncheckedUpdateWithoutTableInput>
    create: XOR<PartyCreateWithoutTableInput, PartyUncheckedCreateWithoutTableInput>
  }

  export type PartyUpdateWithWhereUniqueWithoutTableInput = {
    where: PartyWhereUniqueInput
    data: XOR<PartyUpdateWithoutTableInput, PartyUncheckedUpdateWithoutTableInput>
  }

  export type PartyUpdateManyWithWhereWithoutTableInput = {
    where: PartyScalarWhereInput
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyWithoutPartiesInput>
  }

  export type ShabuShopCreateWithoutPromotionByShopsInput = {
    name: string
    shopImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShopBranchs?: ShabuShopBranchCreateNestedManyWithoutShabuShopInput
  }

  export type ShabuShopUncheckedCreateWithoutPromotionByShopsInput = {
    id?: number
    name: string
    shopImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shabuShopBranchs?: ShabuShopBranchUncheckedCreateNestedManyWithoutShabuShopInput
  }

  export type ShabuShopCreateOrConnectWithoutPromotionByShopsInput = {
    where: ShabuShopWhereUniqueInput
    create: XOR<ShabuShopCreateWithoutPromotionByShopsInput, ShabuShopUncheckedCreateWithoutPromotionByShopsInput>
  }

  export type ShabuShopUpsertWithoutPromotionByShopsInput = {
    update: XOR<ShabuShopUpdateWithoutPromotionByShopsInput, ShabuShopUncheckedUpdateWithoutPromotionByShopsInput>
    create: XOR<ShabuShopCreateWithoutPromotionByShopsInput, ShabuShopUncheckedCreateWithoutPromotionByShopsInput>
  }

  export type ShabuShopUpdateWithoutPromotionByShopsInput = {
    name?: StringFieldUpdateOperationsInput | string
    shopImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShopBranchs?: ShabuShopBranchUpdateManyWithoutShabuShopNestedInput
  }

  export type ShabuShopUncheckedUpdateWithoutPromotionByShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shopImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShopBranchs?: ShabuShopBranchUncheckedUpdateManyWithoutShabuShopNestedInput
  }

  export type PartyCreateManyCreateByUserIdInput = {
    id?: number
    name: string
    shabuShopTableId: number
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyMemberCreateManyUserInput = {
    id?: number
    partyId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyUpdateWithoutCreateByUserIdInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: ShabuShopTableUpdateOneRequiredWithoutPartiesNestedInput
    partyMembers?: PartyMemberUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutCreateByUserIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shabuShopTableId?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyMembers?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateManyWithoutPartiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shabuShopTableId?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutPartyMembersNestedInput
  }

  export type PartyMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    partyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberUncheckedUpdateManyWithoutPartyMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    partyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberCreateManyPartyInput = {
    id?: number
    userId: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyMemberUpdateWithoutPartyInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPartyMembersNestedInput
  }

  export type PartyMemberUncheckedUpdateWithoutPartyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShabuShopBranchCreateManyShabuShopInput = {
    id?: number
    branchName: string
    tel: string
    shopDetail?: string | null
    address: string
    openTime: number
    closeTime: number
    latitude: number
    longtitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionByShopCreateManyShabuShopInput = {
    id?: number
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShabuShopBranchUpdateWithoutShabuShopInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShopTables?: ShabuShopTableUpdateManyWithoutBranchNestedInput
  }

  export type ShabuShopBranchUncheckedUpdateWithoutShabuShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shabuShopTables?: ShabuShopTableUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type ShabuShopBranchUncheckedUpdateManyWithoutShabuShopBranchsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    shopDetail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    openTime?: IntFieldUpdateOperationsInput | number
    closeTime?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longtitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionByShopUpdateWithoutShabuShopInput = {
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionByShopUncheckedUpdateWithoutShabuShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionByShopUncheckedUpdateManyWithoutPromotionByShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShabuShopTableCreateManyBranchInput = {
    id?: number
    seatPerDesk: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShabuShopTableUpdateWithoutBranchInput = {
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutTableNestedInput
  }

  export type ShabuShopTableUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutTableNestedInput
  }

  export type ShabuShopTableUncheckedUpdateManyWithoutShabuShopTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatPerDesk?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCreateManyTableInput = {
    id?: number
    name: string
    userId: number
    startDateTime: Date | string
    endDateTime: Date | string
    partyDetail?: string | null
    active?: boolean
    type: string
    isFull?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyUpdateWithoutTableInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createByUserId?: UserUpdateOneRequiredWithoutPartiesNestedInput
    partyMembers?: PartyMemberUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    partyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    isFull?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyMembers?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}