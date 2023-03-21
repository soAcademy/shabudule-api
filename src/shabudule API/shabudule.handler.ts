import { Request, Response } from "express";
import {
  addPartyMemberShabuduleCodec,
  createPartyShabuduleCodec,
  createPromotionShabuduleCodec,
  createShabuShopBranchShabuduleCodec,
  createShabuShopShabuduleCodec,
  createShabuShopTableShabuduleCodec,
  createUserShabuduleCodec,
  getBranchShabuduleCodec,
  registerUserShabuduleCodec,
  updatePartyMemberStatusShabuduleCodec,
  updatePasswordShabuduleCodec,
  updatePromotionShabuduleCodec,
  updateShabuShopBranchShabuduleCodec,
  updateShabuShopShabuduleCodec,
  updateUserProfileShabuduleCodec,
} from "./shabudule.interface";
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

export const registerUserShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (registerUserShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await registerUserShabudule(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

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

export const updatePasswordShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updatePasswordShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updatePasswordShabudule(args);
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

export const updateUserProfileShabuduleHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (updateUserProfileShabuduleCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateUserProfileShabudule(args);
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
