import { Router } from "express";
import { getGraphicData } from "../controllers/graphic-data.controllers.js";

const router = Router();

router.get('/graphic-data', getGraphicData)

export default router;