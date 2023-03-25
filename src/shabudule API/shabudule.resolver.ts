import { PrismaClient } from "../../prisma/client";
import dayjs from "dayjs";
import "dayjs/locale/pt";
import localeDe from "dayjs/locale/de";
import {
  IAddPartyMemberShabudule,
  ICheckIsFullShabudule,
  ICreatePartyShabudule,
  ICreatePromotionShabudule,
  ICreateShabuShopBranchShabudule,
  ICreateShabuShopShabudule,
  ICreateShabuShopTableShabudule,
  ICreateUserShabudule,
  IDeletePromotionShabudule,
  IGetBranchShabudule,
  IGetMyJoinedPartyShabudule,
  IGetMyPartyShabudule,
  ITestShabudule,
  IUpdatePartyMemberStatusShabudule,
  IUpdatePartyShabudule,
  IUpdatePartyStatusShabudule,
  IUpdatePromotionShabudule,
  IUpdateShabuShopBranchShabuduleCodec,
  IUpdateShabuShopShabudule,
  IUpdateUserBioShabudule,
  IUpdateUserCoverImageShabudule,
  IUpdateUserNameShabudule,
  IUpdateUserProfileImageShabudule,
  IUpdateUserTelShabudule,
} from "./shabudule.interface";

export const prisma = new PrismaClient();

export const createUserShabudule = (args: ICreateUserShabudule) =>
  prisma.user.create({
    data: {
      name: args.name,
      profileImage: args?.profileImage,
      coverImage: args?.coverImage,
      tel: args?.tel,
      bio: args?.bio,
      email: args.email,
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
      tel: args.tel,
      shopDetail: args?.shopDetail,
      address: args.address,
      openTime: args.openTime,
      closeTime: args.closeTime,
      latitude: args.latitude,
      longtitude: args.longtitude,
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

export const updatePartyMemberStatusShabudule = (
  args: IUpdatePartyMemberStatusShabudule
) =>
  prisma.partyMember.update({
    where: { id: args.partyMemberId },
    data: {
      status: args.status,
    },
  });

export const updateUserNameShabudule = (args: IUpdateUserNameShabudule) =>
  prisma.user.update({
    where: { id: args.userId },
    data: {
      name: args.name,
    },
  });
export const updateUserProfileImageShabudule = (
  args: IUpdateUserProfileImageShabudule
) =>
  prisma.user.update({
    where: { id: args.userId },
    data: {
      profileImage: args.profileImage,
    },
  });
export const updateUserCoverImageShabudule = (
  args: IUpdateUserCoverImageShabudule
) =>
  prisma.user.update({
    where: { id: args.userId },
    data: {
      coverImage: args.coverImage,
    },
  });
export const updateUserTelShabudule = (args: IUpdateUserTelShabudule) =>
  prisma.user.update({
    where: { id: args.userId },
    data: {
      tel: args.tel,
    },
  });
export const updateUserBioShabudule = (args: IUpdateUserBioShabudule) =>
  prisma.user.update({
    where: { id: args.userId },
    data: {
      bio: args.bio,
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
      branchName: args.branchName,
      tel: args.tel,
      shopDetail: args.shopDetail,
      address: args.address,
      openTime: args.openTime,
      closeTime: args.closeTime,
      latitude: args.latitude,
      longtitude: args.longtitude,
    },
  });

export const updatePromotionShabudule = (args: IUpdatePromotionShabudule) =>
  prisma.promotionByShop.update({
    where: { id: args.promotionId },
    data: {
      image: args.image,
    },
  });

export const updatePartyShabudule = (args: IUpdatePartyShabudule) =>
  prisma.party.update({
    where: { id: args.partyId },
    data: {
      partyDetail: args.partyDetail,
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
  console.log(currentTime);
  const activeParties = await prisma.party.findMany({
    where: {
      active: true,
      startDateTime: {
        gt: currentTime,
      },
      type: "public",
    },
    include: { table: true, partyMembers: true },
    orderBy: {
      startDateTime: "asc",
    },
  });
  return activeParties;
};

export const getMyPartyShabudule = async (args: IGetMyPartyShabudule) => {
  const currentTime = new Date();
  const activeParties = await prisma.party.findMany({
    where: {
      userId: args.userId,
      active: true,
      startDateTime: {
        gt: currentTime,
      },
    },
    include: { table: true, partyMembers: true },
    orderBy: {
      startDateTime: "asc",
    },
  });
  return activeParties;
};

export const getMyJoinedPartyShabudule = async (
  args: IGetMyJoinedPartyShabudule
) => {
  const currentTime = new Date();
  const activeParties = await prisma.party.findMany({
    where: {
      partyMembers: { some: { userId: args.userId } },
      active: true,
      startDateTime: {
        gt: currentTime,
      },
      NOT: { userId: args.userId },
    },
    include: { table: true, partyMembers: true },
    orderBy: {
      startDateTime: "asc",
    },
  });
  return activeParties;
};

export const updatePartyStatusShabudule = (args: IUpdatePartyStatusShabudule) =>
  prisma.party.update({
    where: { id: args.partyId },
    data: { active: false },
  });

export const deletePromotionShabudule = (args: IDeletePromotionShabudule) =>
  prisma.promotionByShop.delete({
    where: { id: args.promotionId },
  });

export const checkIsFullShabudule = async (args: ICheckIsFullShabudule) => {
  const party = await prisma.party.findUnique({
    where: { id: args.partyId },
    include: {
      partyMembers: true,
      table: true,
    },
  });
  console.log("party", party);

  const acceptMember = party?.partyMembers.filter(
    (r) => r.status === "accept"
  )?.length;

  console.log("acceptMember", acceptMember);

  const seat = party?.table?.seatPerDesk;
  console.log("seat", seat);

  if (acceptMember === seat) {
    const result = prisma.party.update({
      where: { id: args.partyId },
      data: { isFull: true },
    });
    return result;
  }
};

// export const testShabudule = async (args: ITestShabudule) => {
//   const result1 = await prisma.shabuShopBranch.findUnique({
//     where: { id: args.branchId },
//   });
//   const openTime: any = result1?.openTime;
//   const closeTime: any = result1?.closeTime;
//   console.log("openTime", openTime);
//   console.log("closeTime", closeTime);

//   const arr: number[] = [];
//   for (let i: any = openTime; i <= closeTime; i++) {
//     arr.push(i);
//   }
//   console.log("arr", arr);

//   // console.log("dayjs", dayjs());
//   // console.log("dayjs", dayjs().format("DD/MM/YYYY"));
//   // console.log("dayjs", dayjs().locale(localeDe).format());

//   const inputDate = new Date(args.date);
//   console.log("inputDate", inputDate);

//   const startOfDay = new Date(
//     Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())
//   );

//   console.log("startOfDay", startOfDay);

//   const parties = await prisma.party.findMany({
//     where: {
//       startDateTime: {
//         gte: startOfDay,
//       },
//     },
//   });

//   console.log("parties", parties);

// const result2 = await prisma.party.findMany({
//   where: { startDateTime: {likes : new Date(args.date) },
// });
// };
