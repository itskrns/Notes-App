import { useEffect, useState } from 'react';
import { useNotes } from '../_context/NotesContext';

export default function useNotesList() {
  const { notes, getNotes } = useNotes();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    getNotes().then(() => setIsLoading(false));
  }, []);

  return { isLoading, notes };
}
