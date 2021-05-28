import express, { Router } from "express";

import { createAgent } from "../../controllers/agents";
const cors = require("cors");

const agentsRouter: Router = express.Router();

agentsRouter.options("*", cors());

agentsRouter.post("", cors(), createAgent);

agentsRouter.get("", cors(), () => console.log("yolo"));

export default agentsRouter;
