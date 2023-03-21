import {
  addPartyMemberShabudule,
  createPartyShabudule,
  createPromotionShabudule,
  createShabuShopBranchShabudule,
  createShabuShopShabudule,
  createShabuShopTableShabudule,
  createUserShabudule,
  getBranchShabudule,
  getPartyShabudule,
  getPromotionShabudule,
  getShopShabudule,
  registerUserShabudule,
  updatePartyMemberStatusShabudule,
  updatePasswordShabudule,
  updatePromotionShabudule,
  updateShabuShopBranchShabudule,
  updateShabuShopShabudule,
  updateUserProfileShabudule,
} from "./shabudule.resolver";

describe("Shabudule", () => {
  // test("registerUserShabudule", async () => {
  //   const data = {
  //     loginUserName: "username4",
  //     loginPassword: "password4",
  //   };
  //   const result = await registerUserShabudule(data);
  //   console.log("registerUserShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createUserShabudule", async () => {
  //   const data = {
  //     name: "name3",
  //     profileImage: "aaaaaaa",
  //     coverImage: "aaaaaaaaaaa",
  //     tel: "111111111",
  //     bio: "aaaaaaaaaaa",
  //     loginId: 3,
  //   };
  //   const result = await createUserShabudule(data);
  //   console.log("createUserShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopShabudule", async () => {
  //   const data = {
  //     name: "MK",
  //     shopImage:
  //       "https://www.mkrestaurant.com/public/assets/img/icon/logo__mk-2.png",
  //   };
  //   const result = await createShabuShopShabudule(data);
  //   console.log("createShabuShopShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopBranchShabudule", async () => {
  //   const data = {
  //     shabuShopId: 2,
  //     branchName: "Lotus Bangkae",
  //     googleMapLocation: "aaaaaaaaaaa",
  //     tel: "1111111111",
  //     shopDetail: "aaaaaaaaaa",
  //     openTime: 11,
  //     closeTime: 21,
  //   };
  //   const result = await createShabuShopBranchShabudule(data);
  //   console.log("createShabuShopBranchShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopTableShabudule", async () => {
  //   const data = {
  //     branchId: 5,
  //     seatPerDesk: 4,
  //   };
  //   const result = await createShabuShopTableShabudule(data);
  //   console.log("createShabuShopTableShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createPromotionShabudule", async () => {
  //   const data = {
  //     image:
  //       "https://www.mo-mo-paradiseth.com/upload_file/restaurant/standard_pic_1.jpg",
  //     shabuShopId: 1,
  //   };
  //   const result = await createPromotionShabudule(data);
  //   console.log("createPromotionShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createPartyShabudule", async () => {
  //   const data = {
  //     name: "มากินชาบูกัน2",
  //     userId: 3,
  //     shabuShopTableId: 5,
  //     startDateTime: "2023-03-22T18:00:00",
  //     endDateTime: "2023-03-22T19:00:00",
  //     partyDetail: "asdasdsdsssssssssssss",
  //     type: "public",
  //   };
  //   const result = await createPartyShabudule(data);
  //   console.log("createPartyShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("addPartyMemberShabudule", async () => {
  //   const data = {
  //     userId: 3,
  //     partyId: 1,
  //     status: "accept",
  //   };
  //   const result = await addPartyMemberShabudule(data);
  //   console.log("addPartyMemberShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updatePasswordShabudule", async () => {
  //   const data = {
  //     userId: 1,
  //     loginPassword: "password1-1",
  //   };
  //   const result = await updatePasswordShabudule(data);
  //   console.log("updatePasswordShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserProfileShabudule", async () => {
  //   const data = {
  //     userId: 1,
  //     name: "name1-1",
  //     profileImage: "profileImage1-1",
  //     coverImage: "coverImage1-1",
  //     tel: "tel1-1",
  //     bio: "bio1-1",
  //   };
  //   const result = await updateUserProfileShabudule(data);
  //   console.log("updateUserProfileShabudule", result);
  // expect(result.name === data.name).toBe(true);
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
  //     branchName: "MK2",
  //     googleMapLocation: "profileImage1-1",
  //     tel: "1111111",
  //     shopDetail: "1111111",
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
  //     partyMemberId: 4,
  //     status: "decline",
  //   };
  //   const result = await updatePartyMemberStatusShabudule(data);
  //   console.log("updatePartyMemberStatusShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getPartyShabudule", async () => {
  //   const result = await getPartyShabudule();
  //   console.log("getPartyShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
});
