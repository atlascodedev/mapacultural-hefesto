import { Router } from "express";
import express from "express";
import { staticGithubActionBuild } from "../../controllers/hefesto/staticBuild";
const cors = require("cors");

const staticBuildRouter: Router = express.Router();

staticBuildRouter.options("*", cors());

staticBuildRouter.post("/forge", cors(), staticGithubActionBuild);

export default staticBuildRouter;
