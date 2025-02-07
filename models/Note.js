import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  isFav: { type: Boolean, default: false },
  image: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

const Note = mongoose.models.Note || mongoose.model('Note', noteSchema);

export default Note;
