import { Request, Response } from "express";
import {
  addPartyMemberShabuduleCodec,
  checkIsFullShabuduleCodec,
  createPartyShabuduleCodec,
  createPromotionShabuduleCodec,
  createShabuShopBranchShabuduleCodec,
  createShabuShopShabuduleCodec,
  createShabuShopTableShabuduleCodec,
  createUserShabuduleCodec,
  deletePromotionShabuduleCodec,
  getBranchShabuduleCodec,
  getMyJoinedPartyShabuduleCodec,
  getMyPartyShabuduleCodec,
  updatePartyMemberStatusShabuduleCodec,
  updatePartyShabuduleCodec,
  updatePartyStatusShabuduleCodec,
  updatePromotionShabuduleCodec,
  updateShabuShopBranchShabuduleCodec,
  updateShabuShopShabuduleCodec,
  updateUserBioShabuduleCodec,
  updateUserCoverImageShabuduleCodec,
  updateUserNameShabuduleCodec,
  updateUserProfileImageShabuduleCodec,
  updateUserTelShabuduleCodec,
} from "./shabudule.interface";
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

export const createUserShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createUserShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createUserShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createPartyShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (createPartyShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await createPartyShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const addPartyMemberShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (addPartyMemberShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await addPartyMemberShabudule(args);
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

export const updatePartyMemberStatusShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updatePartyMemberStatusShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePartyMemberStatusShabudule(args);
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

export const updatePartyShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updatePartyShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePartyShabudule(args);
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

export const getMyPartyShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getMyPartyShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await getMyPartyShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateUserNameShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserNameShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserNameShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateUserProfileImageShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserProfileImageShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserProfileImageShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
export const updateUserCoverImageShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserCoverImageShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserCoverImageShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
export const updateUserTelShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserTelShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserTelShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
export const updateUserBioShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserBioShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserBioShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getMyJoinedPartyShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (getMyJoinedPartyShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await getMyJoinedPartyShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updatePartyStatusShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updatePartyStatusShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePartyStatusShabudule(args);
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
