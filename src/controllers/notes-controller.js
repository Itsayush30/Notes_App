import NoteService from "../services/note-service.js";

const noteService = new NoteService();

export const createNote = async (req, res) => {
  try {
    console.log(req.body.user_name, req.body.note);
    const response = await noteService.createNote({
      note: req.body.note,
      user_name: req.body.user_name
    });

    return res.status(201).json({
      success: true,
      message: "Successfully created a new note",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: error,
    });
  }
};

export const getNotesByName = async (req, res) => {
  try {
    const user_name = req.params.user_name;
    const response = await noteService.getNotesByName(user_name);

    return res.status(200).json({
      success: true,
      message: "Successfully retrieved notes",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: error,
    });
  }
};
