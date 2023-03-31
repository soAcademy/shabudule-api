import {
  addPartyMemberAuthShabudule,
  checkIsFullShabudule,
  createPartyAuthShabudule,
  createPromotionShabudule,
  createShabuShopBranchShabudule,
  createShabuShopShabudule,
  createShabuShopTableShabudule,
  createUserAuthShabudule,
  createUserProfileAuthShabudule,
  deletePromotionShabudule,
  getAvailableSlotsShabudule,
  getBranchShabudule,
  getMyJoinedPartyAuthShabudule,
  getMyPartyAuthShabudule,
  getPartyShabudule,
  getPromotionShabudule,
  getShopShabudule,
  getUserProfileAuthShabudule,
  updatePartyAuthShabudule,
  updatePartyMemberStatusAuthShabudule,
  updatePartyStatusAuthShabudule,
  updatePromotionShabudule,
  updateShabuShopBranchShabudule,
  updateShabuShopShabudule,
  updateUserBioAuthShabudule,
  updateUserCoverImageAuthShabudule,
  updateUserNameAuthShabudule,
  updateUserProfileImageAuthShabudule,
  updateUserTelAuthShabudule,
} from "./shabudule.resolver";

describe("Shabudule", () => {
  // test("createUserAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDY0MjgyLCJ1c2VyX2lkIjoiOGRsZjFLWW10NVlubjBkcHJ5SE15aVk5dU9ZMiIsInN1YiI6IjhkbGYxS1ltdDVZbm4wZHByeUhNeWlZOXVPWTIiLCJpYXQiOjE2ODAwNjQyODIsImV4cCI6MTY4MDA2Nzg4MiwiZW1haWwiOiJlbWFpbDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ijkylGqTs8RE02zcxYRFFRZsrlOMuwpgW7ZSkBUyQ7uez8_E2mFuhQWXHcP6jypZkD7gNbWOZb7qjC91JZI3elGdict6XpE0bHwKhPyy_FSGhv4Xlv8MAyfB0iobeSEXc6_ShNGafxWubpmWCt0htrosb0U6I3_ijZ1LL6t_yM2ABxxvcwt-6_8Ff9ehLtBEI9ZJkRRT5JjR7EGzNDLJ7kv5-38Q9-lO8KHETmy4lEeRqZWnfap467lIpjf1I0j_DtFVP3P1k0HuX-j3iDm0z2-EX_kyv99HmYblK-aNQJUVrVp6SepqmRsZXgRM7onEbkFKZKEJN9DJEAzpoBae4g",
  //   };
  //   const result = await createUserAuthShabudule(data);
  //   console.log("createUserAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createUserProfileAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDY0MjgyLCJ1c2VyX2lkIjoiOGRsZjFLWW10NVlubjBkcHJ5SE15aVk5dU9ZMiIsInN1YiI6IjhkbGYxS1ltdDVZbm4wZHByeUhNeWlZOXVPWTIiLCJpYXQiOjE2ODAwNjQyODIsImV4cCI6MTY4MDA2Nzg4MiwiZW1haWwiOiJlbWFpbDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ijkylGqTs8RE02zcxYRFFRZsrlOMuwpgW7ZSkBUyQ7uez8_E2mFuhQWXHcP6jypZkD7gNbWOZb7qjC91JZI3elGdict6XpE0bHwKhPyy_FSGhv4Xlv8MAyfB0iobeSEXc6_ShNGafxWubpmWCt0htrosb0U6I3_ijZ1LL6t_yM2ABxxvcwt-6_8Ff9ehLtBEI9ZJkRRT5JjR7EGzNDLJ7kv5-38Q9-lO8KHETmy4lEeRqZWnfap467lIpjf1I0j_DtFVP3P1k0HuX-j3iDm0z2-EX_kyv99HmYblK-aNQJUVrVp6SepqmRsZXgRM7onEbkFKZKEJN9DJEAzpoBae4g",
  //     name: "name2",
  //     profileImage: "profileImage2",
  //     coverImage: "coverImage2",
  //     tel: "089-1111111",
  //     bio: "bio2",
  //   };
  //   const result = await createUserProfileAuthShabudule(data);
  //   console.log("createUserProfileAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopShabudule", async () => {
  //   const data = {
  //     name: "Penguin Eat Shabu",
  //     shopImage:
  //       "https://media-cdn.tripadvisor.com/media/photo-s/09/47/46/aa/penguin-eat-sha.jpg",
  //   };
  //   const result = await createShabuShopShabudule(data);
  //   console.log("createShabuShopShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopBranchShabudule", async () => {
  //   const data = {
  //     shabuShopId: 4,
  //     branchName: "Central RAMA 2",
  //     tel: "02-222-2222",
  //     shopDetail: "test",
  //     address: "1691/2 ถ. พหลโยธิน แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900",
  //     openTime: 11,
  //     closeTime: 21,
  //     latitude: 13.7268226,
  //     longitude: 100.510294,
  //   };
  //   const result = await createShabuShopBranchShabudule(data);
  //   console.log("createShabuShopBranchShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShabuShopTableShabudule", async () => {
  //   const data = {
  //     branchId: 5,
  //     seatPerDesk: 2,
  //   };
  //   const result = await createShabuShopTableShabudule(data);
  //   console.log("createShabuShopTableShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createPromotionShabudule", async () => {
  //   const data = {
  //     image:
  //       "https://i0.wp.com/marketeeronline.co/wp-content/uploads/2018/01/Penguin-Eat-Shabu-WEB.jpg?fit=816%2C454&ssl=1",
  //     shabuShopId: 4,
  //   };
  //   const result = await createPromotionShabudule(data);
  //   console.log("createPromotionShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createPartyAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     name: "มากินชาบูกัน2",
  //     shabuShopTableId: 2,
  //     startDateTime: "2023-04-01T18:00:00+07:00",
  //     endDateTime: "2023-04-01T19:00:00+07:00",
  //     partyDetail: "มากินชาบูกันนน",
  //     type: "public",
  //   };
  //   const result = await createPartyAuthShabudule(data);
  //   console.log("createPartyAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("addPartyMemberAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDY0MjgyLCJ1c2VyX2lkIjoiOGRsZjFLWW10NVlubjBkcHJ5SE15aVk5dU9ZMiIsInN1YiI6IjhkbGYxS1ltdDVZbm4wZHByeUhNeWlZOXVPWTIiLCJpYXQiOjE2ODAwNjQyODIsImV4cCI6MTY4MDA2Nzg4MiwiZW1haWwiOiJlbWFpbDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ijkylGqTs8RE02zcxYRFFRZsrlOMuwpgW7ZSkBUyQ7uez8_E2mFuhQWXHcP6jypZkD7gNbWOZb7qjC91JZI3elGdict6XpE0bHwKhPyy_FSGhv4Xlv8MAyfB0iobeSEXc6_ShNGafxWubpmWCt0htrosb0U6I3_ijZ1LL6t_yM2ABxxvcwt-6_8Ff9ehLtBEI9ZJkRRT5JjR7EGzNDLJ7kv5-38Q9-lO8KHETmy4lEeRqZWnfap467lIpjf1I0j_DtFVP3P1k0HuX-j3iDm0z2-EX_kyv99HmYblK-aNQJUVrVp6SepqmRsZXgRM7onEbkFKZKEJN9DJEAzpoBae4g",
  //     partyId: 1,
  //     status: "request",
  //   };
  //   const result = await addPartyMemberAuthShabudule(data);
  //   console.log("addPartyMemberAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateShabuShopShabudule", async () => {
  //   const data = {
  //     shopId: 1,
  //     name: "MOMO Paradisev2",
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
  //     longitude: 13.9889524,
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
  //   console.log("getBranchShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getUserProfileAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDc3NjczLCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNzc2NzMsImV4cCI6MTY4MDA4MTI3MywiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.YKrTaapXOwkAPR9jeswLw1YbDG1c9W2523OV7lcUjg5IsnXxt1bIQF1fhykLWgh9WCVgCS9AJ1YkQ-lS1GHuvLsh-WL_CdKdkb4vwq1XXek2AwiLONmpDM3y7EKgJnMpHKqrdanEgtcPHTJbJ02D26w0v8yuYAVHoIMxo6uOX6a8uqXVvIlaouCtLUtyVDZooE3u_uf-2zjgGyINW05CjylyPdOv6XcmRu8Vh5LCHGTipMdIWogw7sM4jIWGxX1dB7NWVlymq5YAjXSpdswhtJKs361vyqz3f2AbiuWYhMxGmeTWz_YrAaVYHYA5x8bljNN4uJYvqeXdKX9YzCmwyA",
  //   };
  //   const result = await getUserProfileAuthShabudule(data);
  //   console.log("getUserProfileAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updatePartyMemberStatusAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     partyMemberId: 1,
  //     status: "accept",
  //   };
  //   const result = await updatePartyMemberStatusAuthShabudule(data);
  //   console.log("updatePartyMemberStatusAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getPartyShabudule", async () => {
  //   const result = await getPartyShabudule();
  //   console.log("getPartyShabudule", JSON.stringify(result));
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getMyPartyAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //   };
  //   const result = await getMyPartyAuthShabudule(data);
  //   console.log("getMyPartyAuthShabudule", JSON.stringify(result));
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getMyJoinedPartyAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDY0MjgyLCJ1c2VyX2lkIjoiOGRsZjFLWW10NVlubjBkcHJ5SE15aVk5dU9ZMiIsInN1YiI6IjhkbGYxS1ltdDVZbm4wZHByeUhNeWlZOXVPWTIiLCJpYXQiOjE2ODAwNjQyODIsImV4cCI6MTY4MDA2Nzg4MiwiZW1haWwiOiJlbWFpbDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ijkylGqTs8RE02zcxYRFFRZsrlOMuwpgW7ZSkBUyQ7uez8_E2mFuhQWXHcP6jypZkD7gNbWOZb7qjC91JZI3elGdict6XpE0bHwKhPyy_FSGhv4Xlv8MAyfB0iobeSEXc6_ShNGafxWubpmWCt0htrosb0U6I3_ijZ1LL6t_yM2ABxxvcwt-6_8Ff9ehLtBEI9ZJkRRT5JjR7EGzNDLJ7kv5-38Q9-lO8KHETmy4lEeRqZWnfap467lIpjf1I0j_DtFVP3P1k0HuX-j3iDm0z2-EX_kyv99HmYblK-aNQJUVrVp6SepqmRsZXgRM7onEbkFKZKEJN9DJEAzpoBae4g",
  //   };
  //   const result = await getMyJoinedPartyAuthShabudule(data);
  //   console.log("getMyJoinedPartyAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updatePartyAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     partyId: 1,
  //     partyDetail: "test1",
  //   };
  //   const result = await updatePartyAuthShabudule(data);
  //   console.log("updatePartyAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserNameAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     name: "test1",
  //   };
  //   const result = await updateUserNameAuthShabudule(data);
  //   console.log("updateUserNameAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserProfileImageAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     profileImage: "test1",
  //   };
  //   const result = await updateUserProfileImageAuthShabudule(data);
  //   console.log("updateUserProfileImageAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserCoverImageAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     coverImage: "test1",
  //   };
  //   const result = await updateUserCoverImageAuthShabudule(data);
  //   console.log("updateUserCoverImageAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserTelAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     tel: "test1",
  //   };
  //   const result = await updateUserTelAuthShabudule(data);
  //   console.log("updateUserTelAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updateUserBioAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     bio: "test1",
  //   };
  //   const result = await updateUserBioAuthShabudule(data);
  //   console.log("updateUserBioAuthShabudule", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("updatePartyStatusAuthShabudule", async () => {
  //   const data = {
  //     idToken:
  //       "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhYnVkdWxlIiwiYXVkIjoic2hhYnVkdWxlIiwiYXV0aF90aW1lIjoxNjgwMDYwODk1LCJ1c2VyX2lkIjoiZzFTMG91NlZKNmRLY2wzY1VGTVdpQkU1a2xxMiIsInN1YiI6ImcxUzBvdTZWSjZkS2NsM2NVRk1XaUJFNWtscTIiLCJpYXQiOjE2ODAwNjA4OTUsImV4cCI6MTY4MDA2NDQ5NSwiZW1haWwiOiJlbWFpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVtYWlsMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VqduyiE0SxpCCgpUb4TXTrRtaTuD_h4E2zdAvS2UJGLq_qlpjdFnMIlkiv7VIh44pZ-c_EsOBR5Fgfu9UPIBp6dHQxvqur-gMUu9LsBTYuDFYQeM0lOZQ9rX9ayNzcDrKDAUO9TFv84ZHBA6tjOe1qK6hM6olYs9y9LAHYdKzZ3NppR5IhV9nCp38ZGihpTU4et7JvFXKRtHJpVSnOECJKDZh8371ramLuhsjcb3WKMxrn7EtHmd9D7IpqnkwilrcP-S1UA9H7l3rLzxOneWqVpVuFyY3gKgkgO7rpeCo4iQ3LWmRXD-oMeJQr8SnUAuO5xNDm-1fmNUO8JL6CZOqA",
  //     partyId: 2,
  //   };
  //   const result = await updatePartyStatusAuthShabudule(data);
  //   console.log("updatePartyStatusAuthShabudule", result);
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
      branchId: 1,
      date: "2023-04-03T12:59:59.999Z",
    };
    const result = await getAvailableSlotsShabudule(data);
    console.log("getAvailableSlotsShabudule", result);
    // expect(result.name === data.name).toBe(true);
  });
});
