import admin from "firebase-admin";

export const decodeToken = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization.split("")[1];
  try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    console.log(decodeValue);

    if (decodeValue) {
      return next();
    }
    return res.json({ message: "Un-Authorize" });
  } catch (e) {
    console.log(e);
    return res.json({ message: "Internal Error" });
  }
};
