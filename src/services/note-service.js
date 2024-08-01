import { NoteRepository } from "../repository/index.js";
class NoteService {
  constructor() {
    this.noteRepository = new NoteRepository();
  }

  async createNote(data) {
    try {
      console.log("here",);
      const user = await this.noteRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

}

export default NoteService;