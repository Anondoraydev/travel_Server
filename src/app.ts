import express, { Request, Response } from "express";
import { UserRoutes } from "./app/modules/user/user.route";
import cors from "cors";
import { globalErrorHandler } from "./app/middelewars/globaleErrorHandler";
import notFound from "./app/middelewars/notFound";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/user", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running" });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
