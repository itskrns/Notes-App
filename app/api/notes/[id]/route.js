import connectDB from '@/app/lib/mongodb';
import Note from '@/models/Note';

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await connectDB();

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return new Response('Note not found!', { status: 404 });
    }

    return new Response('Note deleted successfully!', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Error Deleting Note', { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const { id } = params;
  try {
    await connectDB();

    const { isFav } = await request.json();

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { isFav },
      { new: true },
    );

    if (!updatedNote) {
      return new Response('Note not found!', { status: 404 });
    }

    return new Response('Note added to favorites successfully!', {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Error adding to favorites', { status: 500 });
  }
}
