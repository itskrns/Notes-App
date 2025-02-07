import { useState } from 'react';
import { useNotes } from '../_context/NotesContext';

export default function useCardActions(note) {
  const [showMenu, setShowMenu] = useState(false);
  const { deleteNote, editNote, copyNote, toggleFavorites } = useNotes();
  const { _id: id, title, content, isFav } = note;

  function handleCardOptions(option) {
    if (option === 'favorites') toggleFavorites(id, isFav);
    if (option === 'copy') copyNote({ title, content });
    if (option === 'delete') deleteNote(id);

    setShowMenu(false);
  }

  return { showMenu, setShowMenu, handleCardOptions };
}
