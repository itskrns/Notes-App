import connectDB from '@/app/_lib/mongodb.js';
import Note from '@/models/Note';

export async function GET() {
  try {
    await connectDB();

    const notes = await Note.find();

    return new Response(JSON.stringify(notes), { status: 200 });
  } catch (error) {
    return new Response('Error fetching notes', { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      title,
      content,
      noteType,
      duration = 0,
      isFav = false,
    } = await request.json();

    if (!title || !content || !noteType)
      return new Response('Missing Required Fields', { status: 400 });

    if (noteType === 'audio' && isNaN(duration)) {
      return new Response('Invalid duration for audio note', {
        status: 400,
      });
    }

    await connectDB();

    const newNote = new Note({
      title,
      content,
      noteType,
      isFav,
      duration: noteType === 'audio' ? duration : undefined,
    });

    await newNote.save();

    return new Response(JSON.stringify(newNote), { status: 201 });
  } catch (error) {
    return new Response('Error Creating Note', { status: 500 });
  }
}
