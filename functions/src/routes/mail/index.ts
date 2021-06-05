import express from "express";
import { acceptSubmission, rejectSubmission } from "../../controllers/mail";
const cors = require("cors");

const mailRouter = express.Router();

mailRouter.options("*", cors());

mailRouter.post("/accept", cors(), acceptSubmission);

mailRouter.post("/reject", cors(), rejectSubmission);

export default mailRouter;
