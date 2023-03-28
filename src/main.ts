import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes";
import cors from "cors";
import * as admin from "firebase-admin";
import { decodeToken } from "./middleware";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(decodeToken);

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request, response: Response) => route.action(request, response)
  );
});

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});

module.exports = app;
