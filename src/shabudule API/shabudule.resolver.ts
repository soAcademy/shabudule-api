import { PrismaClient } from "../../prisma/client";
import dayjs from "dayjs";
import "dayjs/locale/pt";
import localeDe from "dayjs/locale/de";
import {
  IAddPartyMemberAuthShabudule,
  ICheckIsFullShabudule,
  ICreatePartyAuthShabudule,
  ICreatePromotionShabudule,
  ICreateShabuShopBranchShabudule,
  ICreateShabuShopShabudule,
  ICreateShabuShopTableShabudule,
  ICreateUserAuthShabudule,
  ICreateUserProfileAuthShabudule,
  IDeletePromotionShabudule,
  IGetAvailableSlotsShabudule,
  IGetBranchShabudule,
  IGetMyBookedTimeAuthShabudule,
  IGetMyJoinedPartyAuthShabudule,
  IGetMyPartyAuthShabudule,
  IGetUserProfileAuthShabudule,
  IUpdatePartyAuthShabudule,
  IUpdatePartyMemberStatusAuthShabudule,
  IUpdatePartyStatusAuthShabudule,
  IUpdatePromotionShabudule,
  IUpdateShabuShopBranchShabuduleCodec,
  IUpdateShabuShopShabudule,
  IUpdateUserBioAuthShabudule,
  IUpdateUserCoverImageAuthShabudule,
  IUpdateUserNameAuthShabudule,
  IUpdateUserProfileImageAuthShabudule,
  IUpdateUserTelAuthShabudule,
} from "./shabudule.interface";

const admin = require("firebase-admin");

const serciveAccountKey = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY
    ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
    : undefined,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
};

admin.initializeApp({
  credential: admin.credential.cert(serciveAccountKey),
});

export const prisma = new PrismaClient();

export const getUserProfileAuthShabudule = (
  args: IGetUserProfileAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;
      console.log(uid, email);

      return prisma.user.findMany({
        where: { email: { email: email } },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const createUserAuthShabudule = (args: ICreateUserAuthShabudule) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      return prisma.userFirebase.create({
        data: {
          email: email,
          uid: uid,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const createUserProfileAuthShabudule = (
  args: ICreateUserProfileAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      return prisma.user.create({
        data: {
          name: args.name,
          profileImage: args?.profileImage,
          coverImage: args?.coverImage,
          tel: args?.tel,
          bio: args?.bio,
          email: { connect: { email: email } },
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const createPartyAuthShabudule = (args: ICreatePartyAuthShabudule) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      return prisma.party.create({
        data: {
          name: args.name,
          createByUserFirebaseEmail: { connect: { email: email } },
          table: { connect: { id: args.shabuShopTableId } },
          startDateTime: new Date(args.startDateTime),
          endDateTime: new Date(args.endDateTime),
          partyDetail: args?.partyDetail,
          type: args.type,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const addPartyMemberAuthShabudule = (
  args: IAddPartyMemberAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      return prisma.partyMember.create({
        data: {
          party: { connect: { id: args.partyId } },
          userFirebase: { connect: { email: email } },
          status: args.status ?? undefined,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

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
      longitude: args.longitude,
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

export const updatePartyMemberStatusAuthShabudule = (
  args: IUpdatePartyMemberStatusAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      return prisma.partyMember.update({
        where: { id: args.partyMemberId },
        data: {
          status: args.status,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const updateUserNameAuthShabudule = (
  args: IUpdateUserNameAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      return prisma.user.update({
        where: { userFirebaseEmail: email },
        data: {
          name: args.name,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const updateUserProfileImageAuthShabudule = (
  args: IUpdateUserProfileImageAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      return prisma.user.update({
        where: { userFirebaseEmail: email },
        data: {
          profileImage: args.profileImage,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const updateUserCoverImageAuthShabudule = (
  args: IUpdateUserCoverImageAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;
      return prisma.user.update({
        where: { userFirebaseEmail: email },
        data: {
          coverImage: args.coverImage,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const updateUserTelAuthShabudule = (
  args: IUpdateUserTelAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;
      return prisma.user.update({
        where: { userFirebaseEmail: email },
        data: {
          tel: args.tel,
        },
      });
    });
};

export const updateUserBioAuthShabudule = (
  args: IUpdateUserBioAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      return prisma.user.update({
        where: { userFirebaseEmail: email },
        data: {
          bio: args.bio,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

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
      longitude: args.longitude,
    },
  });

export const updatePromotionShabudule = (args: IUpdatePromotionShabudule) =>
  prisma.promotionByShop.update({
    where: { id: args.promotionId },
    data: {
      image: args.image,
    },
  });

export const updatePartyAuthShabudule = (args: IUpdatePartyAuthShabudule) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      return prisma.party.update({
        where: { id: args.partyId },
        data: {
          partyDetail: args.partyDetail,
        },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

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
    include: {
      createByUserFirebaseEmail: { include: { user: true } },
      table: { include: { branch: { include: { shabuShop: true } } } },
      partyMembers: { include: { userFirebase: { include: { user: true } } } },
    },
    orderBy: {
      startDateTime: "asc",
    },
  });
  return activeParties;
};

export const getMyPartyAuthShabudule = async (
  args: IGetMyPartyAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      const currentTime = new Date();
      const activeParties = prisma.party.findMany({
        where: {
          userFirebaseEmail: email,
          active: true,
          startDateTime: {
            gt: currentTime,
          },
        },
        include: {
          createByUserFirebaseEmail: { include: { user: true } },
          table: { include: { branch: { include: { shabuShop: true } } } },
          partyMembers: {
            include: { userFirebase: { include: { user: true } } },
          },
        },
        orderBy: {
          startDateTime: "asc",
        },
      });
      return activeParties;
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const getMyJoinedPartyAuthShabudule = async (
  args: IGetMyJoinedPartyAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;
      const currentTime = new Date();
      const activeParties = prisma.party.findMany({
        where: {
          partyMembers: { some: { userFirebaseEmail: email } },
          active: true,
          startDateTime: {
            gt: currentTime,
          },
          NOT: { userFirebaseEmail: email },
        },
        include: {
          createByUserFirebaseEmail: { include: { user: true } },
          table: { include: { branch: { include: { shabuShop: true } } } },
          partyMembers: {
            include: { userFirebase: { include: { user: true } } },
          },
        },
        orderBy: {
          startDateTime: "asc",
        },
      });
      return activeParties;
    })
    .catch((e: any) => {
      console.error(e);
    });
};

export const updatePartyStatusAuthShabudule = (
  args: IUpdatePartyStatusAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then((decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      return prisma.party.update({
        where: { id: args.partyId },
        data: { active: false },
      });
    })
    .catch((e: any) => {
      console.error(e);
    });
};

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
  } else {
    const result = prisma.party.update({
      where: { id: args.partyId },
      data: { isFull: false },
    });
    return result;
  }
};

export const getAvailableSlotsShabudule = async (
  args: IGetAvailableSlotsShabudule
) => {
  const inputDate = new Date(args.date);
  console.log("inputDate", inputDate);

  const startOfDay = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate(),
    0,
    0,
    0
  );
  const endOfDay = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate(),
    23,
    59,
    59
  );
  console.log("startOfDay", startOfDay);
  console.log("endOfDay", endOfDay);

  const bookedPartyOnDate = await prisma.shabuShopTable.findMany({
    where: {
      shabuShopBranchId: args.branchId,
      parties: {
        some: {
          AND: [
            { startDateTime: { lte: endOfDay } },
            { endDateTime: { gte: startOfDay } },
          ],
        },
      },
    },
    include: {
      parties: {
        where: {
          AND: [
            { startDateTime: { lte: endOfDay } },
            { endDateTime: { gte: startOfDay } },
          ],
        },
      },
    },
  });

  const notBookedPartyOnDate = await prisma.shabuShopTable.findMany({
    where: {
      shabuShopBranchId: args.branchId,
      NOT: {
        parties: {
          some: {
            AND: [
              { startDateTime: { lte: endOfDay } },
              { endDateTime: { gte: startOfDay } },
            ],
          },
        },
      },
    },
    include: {
      parties: {
        where: {
          AND: [
            { startDateTime: { lte: endOfDay } },
            { endDateTime: { gte: startOfDay } },
          ],
        },
      },
    },
  });

  const branchDetail = await prisma.shabuShopBranch.findMany({
    where: { id: args.branchId },
  });

  const openTime: any = branchDetail[0]?.openTime;
  const closeTime: any = branchDetail[0]?.closeTime;
  // const shabuShopTables = partyOnDate[0]?.shabuShopTables;
  console.log("openTime", openTime);
  console.log("closeTime", closeTime);
  // console.log("shabuShopTables", JSON.stringify(shabuShopTables));
  console.log("bookedPartyOnDate", JSON.stringify(bookedPartyOnDate));
  console.log("notNookedPartyOnDate", JSON.stringify(notBookedPartyOnDate));

  const availableSlotBookedDesk = bookedPartyOnDate?.map((r) => {
    const alreadyBookStartTime = r.parties.map((i) =>
      Number(i.startDateTime.toISOString().substr(11, 2))
    );
    console.log("alreadyBookStartTime", alreadyBookStartTime);

    const arr: number[] = [];
    for (let i: any = openTime; i <= closeTime; i++) {
      arr.push(i);
    }
    console.log("arr", arr);

    const filteredAvailableSlot = arr.filter(
      (r) => !alreadyBookStartTime.includes(r)
    );
    console.log("filteredAvailableSlot", filteredAvailableSlot);

    return {
      tableId: r.id,
      seatPerDesk: r.seatPerDesk,
      availableSlot: filteredAvailableSlot,
    };
  });

  const availableSlotNotBookedDesk = notBookedPartyOnDate?.map((r) => {
    const arr: number[] = [];
    for (let i: any = openTime; i <= closeTime; i++) {
      arr.push(i);
    }
    console.log("arr", arr);

    return {
      tableId: r.id,
      seatPerDesk: r.seatPerDesk,
      availableSlot: arr,
    };
  });

  const result = [...availableSlotBookedDesk, ...availableSlotNotBookedDesk];
  console.log("result", result);
  return result;
};

export const getMyBookedTimeAuthShabudule = async (
  args: IGetMyBookedTimeAuthShabudule
) => {
  return admin
    .auth()
    .verifyIdToken(args.idToken)
    .then(async (decodedToken: any) => {
      const uid: string = decodedToken.uid;
      const email: string = decodedToken.email;

      const inputDate = new Date(args.date);
      console.log("inputDate", inputDate);

      const startOfDay = new Date(
        inputDate.getFullYear(),
        inputDate.getMonth(),
        inputDate.getDate(),
        0,
        0,
        0
      );
      const endOfDay = new Date(
        inputDate.getFullYear(),
        inputDate.getMonth(),
        inputDate.getDate(),
        23,
        59,
        59
      );
      console.log("startOfDay", startOfDay);
      console.log("endOfDay", endOfDay);

      const parties = await prisma.partyMember.findMany({
        where: {
          userFirebaseEmail: email,
          status: { not: "decline" },
          party: {
            AND: [
              { startDateTime: { lte: endOfDay } },
              { endDateTime: { gte: startOfDay } },
              { active: true },
            ],
          },
        },
        include: { party: true },
      });

      console.log("parties", parties);

      const alreadyBookStartTime = parties?.map((r) => {
        return Number(r.party.startDateTime.toISOString().substr(11, 2));
      });
      return [...new Set(alreadyBookStartTime)];
    })
    .catch((e: any) => {
      console.error(e);
    });
};
