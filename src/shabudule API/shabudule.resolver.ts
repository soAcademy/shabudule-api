import { PrismaClient } from "../../prisma/client";
import {
  IAddPartyMemberShabudule,
  ICreatePartyShabudule,
  ICreatePromotionShabudule,
  ICreateShabuShopBranchShabudule,
  ICreateShabuShopShabudule,
  ICreateShabuShopTableShabudule,
  ICreateUserShabudule,
  IGetBranchShabudule,
  IRegisterUserShabudule,
  IUpdatePartyMemberStatusShabudule,
  IUpdatePasswordShabudule,
  IUpdatePromotionShabudule,
  IUpdateShabuShopBranchShabuduleCodec,
  IUpdateShabuShopShabudule,
  IUpdateUserProfileShabudule,
} from "./shabudule.interface";

export const prisma = new PrismaClient();

export const registerUserShabudule = (args: IRegisterUserShabudule) =>
  prisma.login.create({
    data: {
      loginUserName: args.loginUserName,
      loginPassword: args.loginPassword,
    },
  });

export const createUserShabudule = (args: ICreateUserShabudule) =>
  prisma.user.create({
    data: {
      name: args.name,
      profileImage: args?.profileImage,
      coverImage: args?.coverImage,
      tel: args?.tel,
      bio: args?.bio,
      login: { connect: { id: args.loginId } },
    },
  });

export const createPartyShabudule = (args: ICreatePartyShabudule) =>
  prisma.party.create({
    data: {
      name: args.name,
      createByUserId: { connect: { id: args.userId } },
      table: { connect: { id: args.shabuShopTableId } },
      startDateTime: new Date(args.startDateTime),
      endDateTime: new Date(args.endDateTime),
      partyDetail: args?.partyDetail,
      type: args.type,
    },
  });

export const addPartyMemberShabudule = (args: IAddPartyMemberShabudule) =>
  prisma.partyMember.create({
    data: {
      party: { connect: { id: args.partyId } },
      user: { connect: { id: args.userId } },
      status: args.status ?? undefined,
    },
  });

export const createShabuShopShabudule = (args: ICreateShabuShopShabudule) =>
  prisma.shabuShop.create({
    data: {
      name: args.name,
      shopImage: args.shopImage,
    },
  });

export const createShabuShopBranchShabudule = (
  args: ICreateShabuShopBranchShabudule
) =>
  prisma.shabuShopBranch.create({
    data: {
      shabuShop: { connect: { id: args.shabuShopId } },
      branchName: args.branchName,
      googleMapLocation: args.googleMapLocation,
      tel: args.tel,
      shopDetail: args.shopDetail,
      openTime: args.openTime,
      closeTime: args.closeTime,
    },
  });

export const createShabuShopTableShabudule = (
  args: ICreateShabuShopTableShabudule
) =>
  prisma.shabuShopTable.create({
    data: {
      branch: { connect: { id: args.branchId } },
      seatPerDesk: args.seatPerDesk,
    },
  });

export const createPromotionShabudule = (args: ICreatePromotionShabudule) =>
  prisma.promotionByShop.create({
    data: {
      image: args.image,
      shabuShop: { connect: { id: args.shabuShopId } },
    },
  });

export const updatePasswordShabudule = (args: IUpdatePasswordShabudule) =>
  prisma.login.update({
    where: { id: args.userId },
    data: {
      loginPassword: args.loginPassword,
    },
  });

export const updatePartyMemberStatusShabudule = (
  args: IUpdatePartyMemberStatusShabudule
) =>
  prisma.partyMember.update({
    where: { id: args.partyMemberId },
    data: {
      status: args.status,
    },
  });

export const updateUserProfileShabudule = (args: IUpdateUserProfileShabudule) =>
  prisma.user.update({
    where: { id: args.userId },
    data: {
      name: args.name,
      profileImage: args?.profileImage,
      coverImage: args?.coverImage,
      tel: args?.tel,
      bio: args?.bio,
    },
  });

export const updateShabuShopShabudule = (args: IUpdateShabuShopShabudule) =>
  prisma.shabuShop.update({
    where: { id: args.shopId },
    data: {
      name: args?.name,
      shopImage: args?.shopImage,
    },
  });

export const updateShabuShopBranchShabudule = (
  args: IUpdateShabuShopBranchShabuduleCodec
) =>
  prisma.shabuShopBranch.update({
    where: { id: args.branchId },
    data: {
      branchName: args?.branchName,
      googleMapLocation: args?.googleMapLocation,
      tel: args?.tel,
      shopDetail: args?.shopDetail,
    },
  });

export const updatePromotionShabudule = (args: IUpdatePromotionShabudule) =>
  prisma.promotionByShop.update({
    where: { id: args.promotionId },
    data: {
      image: args.image,
    },
  });

export const getPromotionShabudule = () => prisma.promotionByShop.findMany();

export const getShopShabudule = () =>
  prisma.shabuShop.findMany({
    include: { shabuShopBranchs: { select: { id: true, branchName: true } } },
  });

export const getBranchShabudule = (args: IGetBranchShabudule) =>
  prisma.shabuShopBranch.findUnique({
    where: { id: args.branchId },
    include: { shabuShop: true },
  });

export const getPartyShabudule = async () => {
  const currentTime = new Date();
  const activeParties = await prisma.party.findMany({
    where: {
      active: true,
      startDateTime: {
        gt: currentTime, // Filter for parties occurring after current time
      },
    },
    orderBy: {
      startDateTime: "asc", // Order parties by start time in ascending order
    },
  });
  return activeParties;
};
