import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const registerUserShabuduleCodec = t.type({
  loginUserName: t.string,
  loginPassword: t.string,
});

export interface IRegisterUserShabudule
  extends t.TypeOf<typeof registerUserShabuduleCodec> {}

export const createUserShabuduleCodec = t.type({
  name: t.string,
  profileImage: optional(t.string),
  coverImage: optional(t.string),
  tel: optional(t.string),
  bio: optional(t.string),
  loginId: t.number,
});

export interface ICreateUserShabudule
  extends t.TypeOf<typeof createUserShabuduleCodec> {}

export const createPartyShabuduleCodec = t.type({
  name: t.string,
  userId: t.number,
  shabuShopTableId: t.number,
  startDateTime: t.string,
  endDateTime: t.string,
  partyDetail: optional(t.string),
  type: t.string,
});

export interface ICreatePartyShabudule
  extends t.TypeOf<typeof createPartyShabuduleCodec> {}

export const addPartyMemberShabuduleCodec = t.type({
  partyId: t.number,
  userId: t.number,
  status: optional(t.string),
});

export interface IAddPartyMemberShabudule
  extends t.TypeOf<typeof addPartyMemberShabuduleCodec> {}

export const createShabuShopShabuduleCodec = t.type({
  name: t.string,
  shopImage: t.string,
});

export interface ICreateShabuShopShabudule
  extends t.TypeOf<typeof createShabuShopShabuduleCodec> {}

export const createShabuShopBranchShabuduleCodec = t.type({
  shabuShopId: t.number,
  branchName: t.string,
  googleMapLocation: t.string,
  tel: t.string,
  shopDetail: t.string,
  openTime: t.number,
  closeTime: t.number,
});

export interface ICreateShabuShopBranchShabudule
  extends t.TypeOf<typeof createShabuShopBranchShabuduleCodec> {}

export const createShabuShopTableShabuduleCodec = t.type({
  branchId: t.number,
  seatPerDesk: t.number,
});

export interface ICreateShabuShopTableShabudule
  extends t.TypeOf<typeof createShabuShopTableShabuduleCodec> {}

export const createPromotionShabuduleCodec = t.type({
  image: t.string,
  shabuShopId: t.number,
});

export interface ICreatePromotionShabudule
  extends t.TypeOf<typeof createPromotionShabuduleCodec> {}

export const createPromoteJoinShopShabuduleCodec = t.type({
  image: t.string,
});

export interface ICreatePromoteJoinShopShabudule
  extends t.TypeOf<typeof createPromoteJoinShopShabuduleCodec> {}

export const updatePasswordShabuduleCodec = t.type({
  userId: t.number,
  loginPassword: t.string,
});

export interface IUpdatePasswordShabudule
  extends t.TypeOf<typeof updatePasswordShabuduleCodec> {}

export const updateUserProfileShabuduleCodec = t.type({
  userId: t.number,
  name: t.string,
  profileImage: optional(t.string),
  coverImage: optional(t.string),
  tel: optional(t.string),
  bio: optional(t.string),
});

export interface IUpdateUserProfileShabudule
  extends t.TypeOf<typeof updateUserProfileShabuduleCodec> {}

export const updateShabuShopShabuduleCodec = t.type({
  shopId: t.number,
  name: t.string,
  shopImage: t.string,
});

export interface IUpdateShabuShopShabudule
  extends t.TypeOf<typeof updateShabuShopShabuduleCodec> {}

export const updateShabuShopBranchShabuduleCodec = t.type({
  branchId: t.number,
  branchName: t.string,
  googleMapLocation: t.string,
  tel: t.string,
  shopDetail: t.string,
});

export interface IUpdateShabuShopBranchShabuduleCodec
  extends t.TypeOf<typeof updateShabuShopBranchShabuduleCodec> {}

export const updatePromotionShabuduleCodec = t.type({
  promotionId: t.number,
  image: t.string,
});

export interface IUpdatePromotionShabudule
  extends t.TypeOf<typeof updatePromotionShabuduleCodec> {}

export const updatePromoteJoinedShopShabuduleCodec = t.type({
  promoteId: t.number,
  image: t.string,
});

export interface IUpdatePromoteJoinedShopShabudule
  extends t.TypeOf<typeof updatePromoteJoinedShopShabuduleCodec> {}

export const getBranchShabuduleCodec = t.type({
  branchId: t.number,
});

export interface IGetBranchShabudule
  extends t.TypeOf<typeof getBranchShabuduleCodec> {}

export const updatePartyMemberStatusShabuduleCodec = t.type({
  partyMemberId: t.number,
  status: t.string,
});

export interface IUpdatePartyMemberStatusShabudule
  extends t.TypeOf<typeof updatePartyMemberStatusShabuduleCodec> {}
