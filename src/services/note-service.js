import { NoteRepository } from "../repository/index.js";

class NoteService {
  constructor() {
    this.noteRepository = new NoteRepository();
  }

  async createNote(data) {
    try {
      console.log("Creating note with data:", data);
      const note = await this.noteRepository.create(data);
      return note;
    } catch (error) {
      throw error;
    }
  }

  async getNotesByName(user_name) {
    try {
      console.log("Getting notes for user:", user_name);
      const notes = await this.noteRepository.findByUserName(user_name);
      return notes;
    } catch (error) {
      throw error;
    }
  }
}

export default NoteService;
