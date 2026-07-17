import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
// import { env } from "./config/env";
import { env } from "./config/env";

import { errorHandler } from "./core/middlewares/errorHandler";
import { notFound } from "./core/middlewares/notFound";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use(cookieParser());

app.use("/api", routes);

// Les routes viendront ici
app.use(notFound);

app.use(errorHandler);

export default app;
