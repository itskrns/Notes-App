'use client';

import NoteCard from './_components/NoteCard';
import { useNotes } from './_context/NotesContext';

export default function Page() {
  const { notes } = useNotes();
  return (
    <>
      {notes.map((note, ind) => (
        <NoteCard
          key={ind}
          id={note._id}
          isFav={note?.isFav}
          title={note.title}
          date={note.createdAt}
          content={note.content}
        />
      ))}
    </>
  );
}
