import * as functions from "firebase-functions";
import express from "express";
import adonisRouter from "./routes/adonis";
import collectionsRouter from "./routes/collections";
import staticBuildRouter from "./routes/staticBuild";
import messagingRouter from "./routes/messaging";
import logRouter from "./routes/log";
import agentsRouter from "./routes/agents";
import spaceRouter from "./routes/spaces";
import eventRouter from "./routes/events";
import mailRouter from "./routes/mail";

const app = express();

app.use("/adonis", adonisRouter);

app.use("/collections", collectionsRouter);

app.use("/build", staticBuildRouter);

app.use("/messaging", messagingRouter);

app.use("/logging", logRouter);

app.use("/agents", agentsRouter);

app.use("/spaces", spaceRouter);

app.use("/events", eventRouter);

app.use("/mail", mailRouter);

export const api = functions.https.onRequest(app);

// admin.atlascode.dev/api/v0/
