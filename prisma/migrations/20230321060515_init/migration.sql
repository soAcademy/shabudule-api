-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profileImage" TEXT,
    "coverImage" TEXT,
    "tel" TEXT,
    "bio" TEXT,
    "loginId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "loginUserName" TEXT NOT NULL,
    "loginPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "shabuShopTableId" INTEGER NOT NULL,
    "startDateTime" TIMESTAMP(3) NOT NULL,
    "endDateTime" TIMESTAMP(3) NOT NULL,
    "partyDetail" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartyMember" (
    "id" SERIAL NOT NULL,
    "partyId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'request',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartyMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShabuShop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shopImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShabuShop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShabuShopBranch" (
    "id" SERIAL NOT NULL,
    "shabuShopId" INTEGER NOT NULL,
    "branchName" TEXT NOT NULL,
    "googleMapLocation" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "shopDetail" TEXT NOT NULL,
    "openTime" INTEGER NOT NULL,
    "closeTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShabuShopBranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShabuShopTable" (
    "id" SERIAL NOT NULL,
    "shabuShopBranchId" INTEGER NOT NULL,
    "seatPerDesk" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShabuShopTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromotionByShop" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "shabuShopId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PromotionByShop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromoteJoinedShop" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PromoteJoinedShop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_loginId_key" ON "User"("loginId");

-- CreateIndex
CREATE UNIQUE INDEX "Login_loginUserName_key" ON "Login"("loginUserName");

-- CreateIndex
CREATE UNIQUE INDEX "ShabuShop_name_key" ON "ShabuShop"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_loginId_fkey" FOREIGN KEY ("loginId") REFERENCES "Login"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_shabuShopTableId_fkey" FOREIGN KEY ("shabuShopTableId") REFERENCES "ShabuShopTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyMember" ADD CONSTRAINT "PartyMember_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyMember" ADD CONSTRAINT "PartyMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShabuShopBranch" ADD CONSTRAINT "ShabuShopBranch_shabuShopId_fkey" FOREIGN KEY ("shabuShopId") REFERENCES "ShabuShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShabuShopTable" ADD CONSTRAINT "ShabuShopTable_shabuShopBranchId_fkey" FOREIGN KEY ("shabuShopBranchId") REFERENCES "ShabuShopBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionByShop" ADD CONSTRAINT "PromotionByShop_shabuShopId_fkey" FOREIGN KEY ("shabuShopId") REFERENCES "ShabuShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
