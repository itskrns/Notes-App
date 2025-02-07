'use client';

import useNotesList from '../_hooks/useNotesList';
import NoteCard from './NoteCard';

export default function NotesList() {
  const { isLoading, notes } = useNotesList();

  return (
    <div className="flex flex-wrap gap-2">
      {isLoading ? (
        <p className="mx-auto mt-4 text-sm text-gray-500">Loading notes...</p>
      ) : notes.length === 0 ? (
        <p className="mx-auto mt-4 text-sm text-gray-500">No Notes Available</p>
      ) : (
        notes.map((note, ind) => <NoteCard key={ind} note={note} />)
      )}
    </div>
  );
}
