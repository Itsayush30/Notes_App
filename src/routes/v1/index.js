import express from "express";
const router = express.Router();

import {createNote} from "../../controllers/notes-controller.js"

// /api/v1/notes POST
router.post("/notes", createNote);

//router.get("/tweets/:id", getTweet);

export default router;