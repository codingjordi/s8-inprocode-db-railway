import { Router } from "express";
import { getFountains } from "../controllers/fountains.controllers.js";

const router = Router()

router.get('/fountains', getFountains)

export default router;
