import mongoose from 'mongoose';

const { Schema } = mongoose;

const noteSchema = new Schema({
  note: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
