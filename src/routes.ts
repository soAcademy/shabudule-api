import {
  addPartyMemberShabuduleHandler,
  createPartyShabuduleHandler,
  createPromotionShabuduleHandler,
  createShabuShopBranchShabuduleHandler,
  createShabuShopShabuduleHandler,
  createShabuShopTableShabuduleHandler,
  createUserShabuduleHandler,
  getBranchShabuduleHandler,
  getPartyShabuduleHandler,
  getPromotionShabuduleHandler,
  getShopShabuduleHandler,
  registerUserShabuduleHandler,
  updatePartyMemberStatusShabuduleHandler,
  updatePasswordShabuduleHandler,
  updatePromotionShabuduleHandler,
  updateShabuShopBranchShabuduleHandler,
  updateShabuShopShabuduleHandler,
  updateUserProfileShabuduleHandler,
} from "./shabudule API";

export const AppRoutes = [
  {
    path: "/function/registerUserShabudule",
    method: "post",
    action: registerUserShabuduleHandler,
  },
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
    path: "/function/updatePasswordShabudule",
    method: "post",
    action: updatePasswordShabuduleHandler,
  },
  {
    path: "/function/updatePartyMemberStatusShabudule",
    method: "post",
    action: updatePartyMemberStatusShabuduleHandler,
  },
  {
    path: "/function/updateUserProfileShabudule",
    method: "post",
    action: updateUserProfileShabuduleHandler,
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
];
