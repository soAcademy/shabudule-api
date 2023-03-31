import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const createUserShabuduleCodec = t.type({
  name: t.string,
  profileImage: optional(t.string),
  coverImage: optional(t.string),
  email: t.string,
  tel: optional(t.string),
  bio: optional(t.string),
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
  tel: t.string,
  shopDetail: optional(t.string),
  address: t.string,
  openTime: t.number,
  closeTime: t.number,
  latitude: t.number,
  longitude: t.number,
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

export const updateUserNameShabuduleCodec = t.type({
  userId: t.number,
  name: t.string,
});

export interface IUpdateUserNameShabudule
  extends t.TypeOf<typeof updateUserNameShabuduleCodec> {}

export const updateUserProfileImageShabuduleCodec = t.type({
  userId: t.number,
  profileImage: t.string,
});

export interface IUpdateUserProfileImageShabudule
  extends t.TypeOf<typeof updateUserProfileImageShabuduleCodec> {}

export const updateUserCoverImageShabuduleCodec = t.type({
  userId: t.number,
  coverImage: t.string,
});

export interface IUpdateUserCoverImageShabudule
  extends t.TypeOf<typeof updateUserCoverImageShabuduleCodec> {}

export const updateUserTelShabuduleCodec = t.type({
  userId: t.number,
  tel: t.string,
});

export interface IUpdateUserTelShabudule
  extends t.TypeOf<typeof updateUserTelShabuduleCodec> {}

export const updateUserBioShabuduleCodec = t.type({
  userId: t.number,
  bio: t.string,
});

export interface IUpdateUserBioShabudule
  extends t.TypeOf<typeof updateUserBioShabuduleCodec> {}

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
  tel: t.string,
  shopDetail: t.string,
  address: t.string,
  openTime: t.number,
  closeTime: t.number,
  latitude: t.number,
  longitude: t.number,
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

export const getMyPartyShabuduleCodec = t.type({
  userId: t.number,
});

export interface IGetMyPartyShabudule
  extends t.TypeOf<typeof getMyPartyShabuduleCodec> {}

export const getMyJoinedPartyShabuduleCodec = t.type({
  userId: t.number,
});

export interface IGetMyJoinedPartyShabudule
  extends t.TypeOf<typeof getMyJoinedPartyShabuduleCodec> {}

export const updatePartyShabuduleCodec = t.type({
  partyId: t.number,
  partyDetail: t.string,
});

export interface IUpdatePartyShabudule
  extends t.TypeOf<typeof updatePartyShabuduleCodec> {}

export const updatePartyStatusShabuduleCodec = t.type({
  partyId: t.number,
});

export interface IUpdatePartyStatusShabudule
  extends t.TypeOf<typeof updatePartyStatusShabuduleCodec> {}

export const deletePromotionShabuduleCodec = t.type({
  promotionId: t.number,
});

export interface IDeletePromotionShabudule
  extends t.TypeOf<typeof deletePromotionShabuduleCodec> {}

export const checkIsFullShabuduleCodec = t.type({
  partyId: t.number,
});

export interface ICheckIsFullShabudule
  extends t.TypeOf<typeof checkIsFullShabuduleCodec> {}

export const getAvailableSlotsShabuduleCodec = t.type({
  branchId: t.number,
  date: t.string,
});

export interface IGetAvailableSlotsShabudule
  extends t.TypeOf<typeof getAvailableSlotsShabuduleCodec> {}

export const getUserProfileShabuduleCodec = t.type({
  email: t.string,
});

export interface IGetUserProfileShabudule
  extends t.TypeOf<typeof getUserProfileShabuduleCodec> {}

// AUTHENTICATION
export const getUserProfileAuthShabuduleCodec = t.type({
  idToken: t.string,
});

export interface IGetUserProfileAuthShabudule
  extends t.TypeOf<typeof getUserProfileAuthShabuduleCodec> {}

export const createUserAuthShabuduleCodec = t.type({
  idToken: t.string,
});

export interface ICreateUserAuthShabudule
  extends t.TypeOf<typeof createUserAuthShabuduleCodec> {}

export const createUserProfileAuthShabuduleCodec = t.type({
  idToken: t.string,
  name: t.string,
  profileImage: optional(t.string),
  coverImage: optional(t.string),
  tel: optional(t.string),
  bio: optional(t.string),
});

export interface ICreateUserProfileAuthShabudule
  extends t.TypeOf<typeof createUserProfileAuthShabuduleCodec> {}

export const createPartyAuthShabuduleCodec = t.type({
  idToken: t.string,
  name: t.string,
  shabuShopTableId: t.number,
  startDateTime: t.string,
  endDateTime: t.string,
  partyDetail: optional(t.string),
  type: t.string,
});

export interface ICreatePartyAuthShabudule
  extends t.TypeOf<typeof createPartyAuthShabuduleCodec> {}

export const addPartyMemberAuthShabuduleCodec = t.type({
  idToken: t.string,
  partyId: t.number,
  status: optional(t.string),
});

export interface IAddPartyMemberAuthShabudule
  extends t.TypeOf<typeof addPartyMemberAuthShabuduleCodec> {}

export const updatePartyMemberStatusAuthShabuduleCodec = t.type({
  idToken: t.string,
  partyMemberId: t.number,
  status: t.string,
});

export interface IUpdatePartyMemberStatusAuthShabudule
  extends t.TypeOf<typeof updatePartyMemberStatusAuthShabuduleCodec> {}

export const updateUserNameAuthShabuduleCodec = t.type({
  idToken: t.string,
  name: t.string,
});

export interface IUpdateUserNameAuthShabudule
  extends t.TypeOf<typeof updateUserNameAuthShabuduleCodec> {}

export const updateUserProfileImageAuthShabuduleCodec = t.type({
  idToken: t.string,
  profileImage: t.string,
});

export interface IUpdateUserProfileImageAuthShabudule
  extends t.TypeOf<typeof updateUserProfileImageAuthShabuduleCodec> {}

export const updateUserCoverImageAuthShabuduleCodec = t.type({
  idToken: t.string,
  coverImage: t.string,
});

export interface IUpdateUserCoverImageAuthShabudule
  extends t.TypeOf<typeof updateUserCoverImageAuthShabuduleCodec> {}

export const updateUserTelAuthShabuduleCodec = t.type({
  idToken: t.string,
  tel: t.string,
});

export interface IUpdateUserTelAuthShabudule
  extends t.TypeOf<typeof updateUserTelAuthShabuduleCodec> {}

export const updateUserBioAuthShabuduleCodec = t.type({
  idToken: t.string,
  bio: t.string,
});

export interface IUpdateUserBioAuthShabudule
  extends t.TypeOf<typeof updateUserBioAuthShabuduleCodec> {}

export const updatePartyAuthShabuduleCodec = t.type({
  idToken: t.string,
  partyId: t.number,
  partyDetail: t.string,
});

export interface IUpdatePartyAuthShabudule
  extends t.TypeOf<typeof updatePartyAuthShabuduleCodec> {}

export const getMyPartyAuthShabuduleCodec = t.type({
  idToken: t.string,
});

export interface IGetMyPartyAuthShabudule
  extends t.TypeOf<typeof getMyPartyAuthShabuduleCodec> {}

export const getMyJoinedPartyAuthShabuduleCodec = t.type({
  idToken: t.string,
});

export interface IGetMyJoinedPartyAuthShabudule
  extends t.TypeOf<typeof getMyJoinedPartyAuthShabuduleCodec> {}

export const updatePartyStatusAuthShabuduleCodec = t.type({
  idToken: t.string,
  partyId: t.number,
});

export interface IUpdatePartyStatusAuthShabudule
  extends t.TypeOf<typeof updatePartyStatusAuthShabuduleCodec> {}

export const getMyBookedTimeAuthShabuduleCodec = t.type({
  idToken: t.string,
  date: t.string,
});

export interface IGetMyBookedTimeAuthShabudule
  extends t.TypeOf<typeof getMyBookedTimeAuthShabuduleCodec> {}
