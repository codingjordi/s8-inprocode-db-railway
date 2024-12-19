import { Router } from "express";
import { getEvents, createEvent, deleteEvent } from "../controllers/calendar.controllers.js";

const router = Router()

router.get('/calendar', getEvents)
router.post('/calendar', createEvent)
router.delete('/calendar/:id', deleteEvent)

export default router;