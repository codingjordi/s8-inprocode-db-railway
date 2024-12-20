import { Router } from "express";
import { getEvents, createEvent, deleteEvent } from "../controllers/events.controllers.js";

const router = Router()

router.get('/events', getEvents)
router.post('/events', createEvent)
router.delete('/events/:id', deleteEvent)

export default router;