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
  longtitude: t.number,
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
  longtitude: t.number,
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
