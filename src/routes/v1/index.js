import express from "express";
const router = express.Router();

import {createNote,getNotesByName} from "../../controllers/notes-controller.js"

// /api/v1/notes POST
router.post("/notes", createNote);

// /api/v1/notes/:user_name GET
router.get("/notes/:user_name", getNotesByName);

export default router;