import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    noteType: { type: String, enum: ['text', 'audio'], required: true },
    isFav: { type: Boolean, default: false },
    duration: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.models.Note || mongoose.model('Note', noteSchema);
