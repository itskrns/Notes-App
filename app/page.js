'use client';

import { useEffect, useState } from 'react';
import NoteCard from './_components/NoteCard';
import { useNotes } from './_context/NotesContext';

export default function Page() {
  const { notes, getNotes } = useNotes();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      getNotes().then(() => setIsLoading(false));
    },
    [getNotes],
  );

  return (
    <div className="flex flex-wrap gap-2">
      {isLoading ? (
        <div className="mx-auto text-sm text-gray-500">Loading notes...</div>
      ) : notes.length === 0 ? (
        <div className="mx-auto text-sm text-gray-500">No Notes Available</div>
      ) : (
        notes.map((note, ind) => (
          <NoteCard
            key={ind}
            id={note._id}
            isFav={note.isFav}
            title={note.title}
            date={note.createdAt}
            content={note.content}
          />
        ))
      )}
    </div>
  );
}
