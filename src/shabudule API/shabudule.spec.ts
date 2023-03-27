import {
  addPartyMemberShabudule,
  checkIsFullShabudule,
  createPartyShabudule,
  createPromotionShabudule,
  createShabuShopBranchShabudule,
  createShabuShopShabudule,
  createShabuShopTableShabudule,
  createUserShabudule,
  deletePromotionShabudule,
  getAvailableSlotsShabudule,
  getBranchShabudule,
  getMyJoinedPartyShabudule,
  getMyPartyShabudule,
  getPartyShabudule,
  getPromotionShabudule,
  getShopShabudule,
  updatePartyMemberStatusShabudule,
  updatePartyShabudule,
  updatePartyStatusShabudule,
  updatePromotionShabudule,
  updateShabuShopBranchShabudule,
  updateShabuShopShabudule,
  updateUserBioShabudule,
  updateUserCoverImageShabudule,
  updateUserNameShabudule,
  updateUserProfileImageShabudule,
  updateUserTelShabudule,
} from "./shabudule.resolver";

describe("Shabudule", () => {
  // test("createUserShabudule", async () => {
  //   const data = {
  //     name: "name5",
  //     profileImage: "profileImage5",
  //     coverImage: "coverImage5",
  //     tel: "089-11111111",
  //     bio: "bio5",
  //     email: "email5@gmail.com",
  //   };
  //   const result = await createUserShabudule(data);
  //   console.log("createUserShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopShabudule", async () => {
  //   const data = {
  //     name: "MOMO Paradise",
  //     shopImage:
  //       "https://www.mega-bangna.com/public/uploads/store/218aa2ce02f618d47a21a30426094651.jpg",
  //   };
  //   const result = await createShabuShopShabudule(data);
  //   console.log("createShabuShopShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopBranchShabudule", async () => {
  //   const data = {
  //     shabuShopId: 1,
  //     branchName: "บิ๊กซี เอ็กซ์ตร้า ลาดพร้าว",
  //     tel: "02-222-2222",
  //     shopDetail: "test",
  //     address: "1691/2 ถ. พหลโยธิน แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900",
  //     openTime: 11,
  //     closeTime: 21,
  //     latitude: 13.7268226,
  //     longtitude: 100.510294,
  //   };
  //   const result = await createShabuShopBranchShabudule(data);
  //   console.log("createShabuShopBranchShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopTableShabudule", async () => {
  //   const data = {
  //     branchId: 3,
  //     seatPerDesk: 2,
  //   };
  //   const result = await createShabuShopTableShabudule(data);
  //   console.log("createShabuShopTableShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createPromotionShabudule", async () => {
  //   const data = {
  //     image:
  //       "https://www.mo-mo-paradiseth.com/upload_file/restaurant/standard_pic_1.jpg",
  //     shabuShopId: 2,
  //   };
  //   const result = await createPromotionShabudule(data);
  //   console.log("createPromotionShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createPartyShabudule", async () => {
  //   const data = {
  //     name: "มากินชาบูกัน1",
  //     userId: 1,
  //     shabuShopTableId: 5,
  //     startDateTime: "2023-03-28T17:00:00+07:00",
  //     endDateTime: "2023-03-28T18:00:00+07:00",
  //     partyDetail: "มากินชาบูกันนน",
  //     type: "private",
  //   };
  //   const result = await createPartyShabudule(data);
  //   console.log("createPartyShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("addPartyMemberShabudule", async () => {
  //   const data = {
  //     userId: 4,
  //     partyId: 1,
  //     status: "accept",
  //   };
  //   const result = await addPartyMemberShabudule(data);
  //   console.log("addPartyMemberShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateShabuShopShabudule", async () => {
  //   const data = {
  //     shopId: 1,
  //     name: "MK2",
  //     shopImage: "profileImage1-1",
  //   };
  //   const result = await updateShabuShopShabudule(data);
  //   console.log("updateShabuShopShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateShabuShopBranchShabudule", async () => {
  //   const data = {
  //     branchId: 1,
  //     branchName: "Lotus Bangkae",
  //     tel: "1111111111",
  //     shopDetail: "aaaaaaaaaa",
  //     address: "aaaaaa",
  //     openTime: 11,
  //     closeTime: 21,
  //     latitude: 100.6184404,
  //     longtitude: 13.9889524,
  //   };
  //   const result = await updateShabuShopBranchShabudule(data);
  //   console.log("updateShabuShopBranchShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updatePromotionShabudule", async () => {
  //   const data = {
  //     promotionId: 1,
  //     image: "12132123133",
  //   };
  //   const result = await updatePromotionShabudule(data);
  //   console.log("updatePromotionShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getPromotionShabudule", async () => {
  //   const result = await getPromotionShabudule();
  //   console.log("getPromotionShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getShopShabudule", async () => {
  //   const result = await getShopShabudule();
  //   console.log("getShopShabudule", JSON.stringify(result));
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getBranchShabudule", async () => {
  //   const data = {
  //     branchId: 1,
  //   };
  //   const result = await getBranchShabudule(data);
  //   console.log("getShopShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updatePartyMemberStatusShabudule", async () => {
  //   const data = {
  //     partyMemberId: 6,
  //     status: "accept",
  //   };
  //   const result = await updatePartyMemberStatusShabudule(data);
  //   console.log("updatePartyMemberStatusShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getPartyShabudule", async () => {
  //   const result = await getPartyShabudule();
  //   console.log("getPartyShabudule", JSON.stringify(result));
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getMyPartyShabudule", async () => {
  //   const data = {
  //     userId: 1,
  //   };
  //   const result = await getMyPartyShabudule(data);
  //   console.log("getPartyShabudule", JSON.stringify(result));
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getMyJoinedPartyShabudule", async () => {
  //   const data = {
  //     userId: 2,
  //   };
  //   const result = await getMyJoinedPartyShabudule(data);
  //   console.log("getMyJoinedPartyShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updatePartyShabudule", async () => {
  //   const data = {
  //     partyId: 1,
  //     partyDetail: "test1",
  //   };
  //   const result = await updatePartyShabudule(data);
  //   console.log("updatePartyShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserNameShabudule", async () => {
  //   const data = {
  //     userId: 1,
  //     name: "test1",
  //   };
  //   const result = await updateUserNameShabudule(data);
  //   console.log("updateUserNameShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserProfileImageShabudule", async () => {
  //   const data = {
  //     userId: 1,
  //     profileImage: "test1",
  //   };
  //   const result = await updateUserProfileImageShabudule(data);
  //   console.log("updateUserProfileImageShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserCoverImageShabudule", async () => {
  //   const data = {
  //     userId: 1,
  //     coverImage: "test1",
  //   };
  //   const result = await updateUserCoverImageShabudule(data);
  //   console.log("updateUserCoverImageShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserTelShabudule", async () => {
  //   const data = {
  //     userId: 1,
  //     tel: "test1",
  //   };
  //   const result = await updateUserTelShabudule(data);
  //   console.log("updateUserTelShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserBioShabudule", async () => {
  //   const data = {
  //     userId: 1,
  //     bio: "test1",
  //   };
  //   const result = await updateUserBioShabudule(data);
  //   console.log("updateUserBioShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updatePartyStatusShabudule", async () => {
  //   const data = {
  //     partyId: 1,
  //   };
  //   const result = await updatePartyStatusShabudule(data);
  //   console.log("updatePartyStatusShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("deletePromotionShabudule", async () => {
  //   const data = {
  //     promotionId: 1,
  //   };
  //   const result = await deletePromotionShabudule(data);
  //   console.log("deletePromotionShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("checkIsFullShabudule", async () => {
  //   const data = {
  //     partyId: 1,
  //   };
  //   const result = await checkIsFullShabudule(data);
  //   console.log("checkIsFullShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  test("getAvailableSlotsShabudule", async () => {
    const data = {
      branchId: 2,
      date: "2023-03-29T00:00:00",
    };
    const result = await getAvailableSlotsShabudule(data);
    console.log("getAvailableSlotsShabudule", result);
    // expect(result.name === data.name).toBe(true);
  });
});
