-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "startDateTime" TIMESTAMP(3) NOT NULL,
    "endDateTime" TIMESTAMP(3) NOT NULL,
    "partyDetail" TEXT,
    "memberQuantity" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'open',
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
    "tel" TEXT NOT NULL,
    "shopDetail" TEXT NOT NULL,
    "shopPromotion" TEXT,
    "shopMenu" TEXT,
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
    "availableTimeStart" TIMESTAMP(3) NOT NULL,
    "availableTimeEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShabuShopBranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShabuShopTable" (
    "id" SERIAL NOT NULL,
    "shabuShopBranchId" INTEGER NOT NULL,
    "setPerDesk" INTEGER NOT NULL,
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

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
