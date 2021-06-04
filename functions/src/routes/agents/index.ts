import express, { Router } from "express";

import { createAgent, getAgents } from "../../controllers/forms/agents";
const cors = require("cors");

const agentsRouter: Router = express.Router();

agentsRouter.options("*", cors());

agentsRouter.post("", cors(), createAgent);

agentsRouter.get("", cors(), getAgents);

export default agentsRouter;
