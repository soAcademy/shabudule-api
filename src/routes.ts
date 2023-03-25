import {
  addPartyMemberShabuduleHandler,
  createPartyShabuduleHandler,
  createPromotionShabuduleHandler,
  createShabuShopBranchShabuduleHandler,
  createShabuShopShabuduleHandler,
  createShabuShopTableShabuduleHandler,
  createUserShabuduleHandler,
  getBranchShabuduleHandler,
  getMyJoinedPartyShabuduleHandler,
  getMyPartyShabuduleHandler,
  getPartyShabuduleHandler,
  getPromotionShabuduleHandler,
  getShopShabuduleHandler,
  updatePartyMemberStatusShabuduleHandler,
  updatePartyShabuduleHandler,
  updatePromotionShabuduleHandler,
  updateShabuShopBranchShabuduleHandler,
  updateShabuShopShabuduleHandler,
  updateUserBioShabuduleHandler,
  updateUserCoverImageShabuduleHandler,
  updateUserNameShabuduleHandler,
  updateUserProfileImageShabuduleHandler,
  updateUserTelShabuduleHandler,
} from "./shabudule API";

export const AppRoutes = [
  {
    path: "/function/createUserShabudule",
    method: "post",
    action: createUserShabuduleHandler,
  },
  {
    path: "/function/createPartyShabudule",
    method: "post",
    action: createPartyShabuduleHandler,
  },
  {
    path: "/function/addPartyMemberShabudule",
    method: "post",
    action: addPartyMemberShabuduleHandler,
  },
  {
    path: "/function/createShabuShopShabudule",
    method: "post",
    action: createShabuShopShabuduleHandler,
  },
  {
    path: "/function/createShabuShopBranchShabudule",
    method: "post",
    action: createShabuShopBranchShabuduleHandler,
  },
  {
    path: "/function/createShabuShopTableShabudule",
    method: "post",
    action: createShabuShopTableShabuduleHandler,
  },
  {
    path: "/function/createPromotionShabudule",
    method: "post",
    action: createPromotionShabuduleHandler,
  },
  {
    path: "/function/updatePartyMemberStatusShabudule",
    method: "post",
    action: updatePartyMemberStatusShabuduleHandler,
  },
  {
    path: "/function/updateShabuShopShabudule",
    method: "post",
    action: updateShabuShopShabuduleHandler,
  },
  {
    path: "/function/updateShabuShopBranchShabudule",
    method: "post",
    action: updateShabuShopBranchShabuduleHandler,
  },
  {
    path: "/function/updatePromotionShabudule",
    method: "post",
    action: updatePromotionShabuduleHandler,
  },
  {
    path: "/function/getPromotionShabudule",
    method: "post",
    action: getPromotionShabuduleHandler,
  },
  {
    path: "/function/getShopShabudule",
    method: "post",
    action: getShopShabuduleHandler,
  },
  {
    path: "/function/getBranchShabudule",
    method: "post",
    action: getBranchShabuduleHandler,
  },
  {
    path: "/function/getPartyShabudule",
    method: "post",
    action: getPartyShabuduleHandler,
  },
  {
    path: "/function/updatePartyShabudule",
    method: "post",
    action: updatePartyShabuduleHandler,
  },
  {
    path: "/function/getMyPartyShabudule",
    method: "post",
    action: getMyPartyShabuduleHandler,
  },
  {
    path: "/function/getMyJoinedPartyShabudule",
    method: "post",
    action: getMyJoinedPartyShabuduleHandler,
  },
  {
    path: "/function/updateUserNameShabudule",
    method: "post",
    action: updateUserNameShabuduleHandler,
  },
  {
    path: "/function/updateUserProfileImageShabudule",
    method: "post",
    action: updateUserProfileImageShabuduleHandler,
  },
  {
    path: "/function/updateUserCoverImageShabudule",
    method: "post",
    action: updateUserCoverImageShabuduleHandler,
  },
  {
    path: "/function/updateUserTelShabudule",
    method: "post",
    action: updateUserTelShabuduleHandler,
  },
  {
    path: "/function/updateUserBioShabudule",
    method: "post",
    action: updateUserBioShabuduleHandler,
  },
];
