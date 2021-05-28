import express, { Router } from "express";
import { createSpace, getCulturalSpaces } from "../../controllers/spaces";

const cors = require("cors");

const spaceRouter: Router = express.Router();

spaceRouter.options("*", cors());

spaceRouter.get("", cors(), getCulturalSpaces);
spaceRouter.post("", cors(), createSpace);

export default spaceRouter;
