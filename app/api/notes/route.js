import connectDB from '@/app/lib/mongodb.js';
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
    const { title, content, isFav = false } = await request.json();

    await connectDB();

    const newNote = new Note({
      title,
      content,
      isFav,
    });

    await newNote.save();

    return new Response(JSON.stringify(newNote), { status: 201 });
  } catch (error) {
    return new Response('Error Creating Note', { status: 500 });
  }
}
