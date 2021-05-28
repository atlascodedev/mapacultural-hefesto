import express, { Router } from "express";
import { createEvent, getEvents } from "../../controllers/events";

const cors = require("cors");

const eventRouter: Router = express.Router();

eventRouter.options("*", cors());

eventRouter.get("", cors(), getEvents);
eventRouter.post("", cors(), createEvent);

export default eventRouter;
