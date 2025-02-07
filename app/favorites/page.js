'use client';

import { useEffect, useState } from 'react';
import { useNotes } from '../_context/NotesContext';
import NoteCard from '../_components/NoteCard';

export default function Page() {
  const { notes, getNotes } = useNotes();
  const [isLoading, setIsLoading] = useState(true);

  const filteredNotes = notes.filter((note) => note.isFav);

  useEffect(
    function () {
      getNotes().then(() => setIsLoading(false));
    },
    [getNotes],
  );

  return (
    <div className="flex flex-wrap gap-2">
      {isLoading ? (
        <div className="mx-auto text-sm text-gray-500">
          Loading favorites notes...
        </div>
      ) : filteredNotes.length === 0 ? (
        <div className="mx-auto text-sm text-gray-500">
          No Note has been added to favorites
        </div>
      ) : (
        filteredNotes.map((note, ind) => (
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
