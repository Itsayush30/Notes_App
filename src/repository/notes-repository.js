import Note from "../models/note.js";
import CrudRepository from "./crud-reopository.js";

class NoteRepository extends CrudRepository {
  constructor() {
    super(Note);
  }

  async findByUserName(user_name) {
    try {
      const notes = await this.model.find({ user_name });
      return notes;
    } catch (error) {
      throw error;
    }
  }
}

export default NoteRepository;
