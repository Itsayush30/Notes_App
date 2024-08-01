import Note from "../models/note.js";
import CrudRepository from "./crud-reopository.js";

class NoteRespository extends CrudRepository {
  constructor() {
    super(Note);
  }

}

export default NoteRespository;