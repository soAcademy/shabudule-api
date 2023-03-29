import { Request, Response } from "express";
import {
  addPartyMemberAuthShabuduleCodec,
  checkIsFullShabuduleCodec,
  createPartyAuthShabuduleCodec,
  createPromotionShabuduleCodec,
  createShabuShopBranchShabuduleCodec,
  createShabuShopShabuduleCodec,
  createShabuShopTableShabuduleCodec,
  createUserAuthShabuduleCodec,
  createUserProfileAuthShabuduleCodec,
  deletePromotionShabuduleCodec,
  getAvailableSlotsShabuduleCodec,
  getBranchShabuduleCodec,
  getMyJoinedPartyAuthShabuduleCodec,
  getMyPartyAuthShabuduleCodec,
  getUserProfileAuthShabuduleCodec,
  updatePartyAuthShabuduleCodec,
  updatePartyMemberStatusAuthShabuduleCodec,
  updatePartyStatusAuthShabuduleCodec,
  updatePromotionShabuduleCodec,
  updateShabuShopBranchShabuduleCodec,
  updateShabuShopShabuduleCodec,
  updateUserBioAuthShabuduleCodec,
  updateUserCoverImageAuthShabuduleCodec,
  updateUserNameAuthShabuduleCodec,
  updateUserProfileImageAuthShabuduleCodec,
  updateUserTelAuthShabuduleCodec,
} from "./shabudule.interface";
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

export const createUserAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createUserAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createUserAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createUserProfileAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createUserProfileAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createUserProfileAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createPartyAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createPartyAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createPartyAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const addPartyMemberAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (addPartyMemberAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await addPartyMemberAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createShabuShopShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createShabuShopShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createShabuShopShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createShabuShopBranchShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createShabuShopBranchShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createShabuShopBranchShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createShabuShopTableShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createShabuShopTableShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createShabuShopTableShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createPromotionShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createPromotionShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createPromotionShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updatePartyMemberStatusAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updatePartyMemberStatusAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePartyMemberStatusAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateShabuShopShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateShabuShopShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateShabuShopShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateShabuShopBranchShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateShabuShopBranchShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateShabuShopBranchShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updatePromotionShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updatePromotionShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePromotionShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updatePartyAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updatePartyAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePartyAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getPromotionShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await getPromotionShabudule();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const getShopShabuduleHandler = async (req: Request, res: Response) => {
  try {
    const response = await getShopShabudule();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const getBranchShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getBranchShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await getBranchShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getPartyShabuduleHandler = async (req: Request, res: Response) => {
  try {
    const response = await getPartyShabudule();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const getMyPartyAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getMyPartyAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await getMyPartyAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateUserNameAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserNameAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserNameAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateUserProfileImageAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserProfileImageAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserProfileImageAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
export const updateUserCoverImageAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserCoverImageAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserCoverImageAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
export const updateUserTelAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserTelAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserTelAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
export const updateUserBioAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserBioAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserBioAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getMyJoinedPartyAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getMyJoinedPartyAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await getMyJoinedPartyAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updatePartyStatusAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updatePartyStatusAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePartyStatusAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const deletePromotionShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (deletePromotionShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await deletePromotionShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const checkIsFullShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (checkIsFullShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await checkIsFullShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getAvailableSlotsShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getAvailableSlotsShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await getAvailableSlotsShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getUserProfileAuthShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getUserProfileAuthShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await getUserProfileAuthShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
