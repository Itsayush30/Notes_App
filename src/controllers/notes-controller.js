import NoteService from "../services/note-service.js"

const noteService = new NoteService();

export const createNote = async (req, res) => {
  try {
    console.log(req.body.user_name,req.body.note,)
    const response = await noteService.createNote({
        note: req.body.note,
        user_name: req.body.user_name
      });

    return res.status(201).json({
      success: true,
      message: "Successfully created a new comment",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      data: {},
      err: error,
    });
  }
};