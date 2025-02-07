'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState('desc');
  const [search, setSearch] = useState('');

  async function getNotes() {
    try {
      const res = await fetch('/api/notes');
      const data = await res.json();

      const sortedNotes = [...data].sort((a, b) => {
        return sortBy === 'asc'
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      });

      const filteredNotes = sortedNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(search.toLowerCase()) ||
          note.content.toLowerCase().includes(search.toLowerCase()),
      );

      setNotes(filteredNotes);

      console.log('Notes fetched successfully!');
    } catch (error) {
      console.log('Error fetching notes!');
    }
  }

  useEffect(
    function () {
      getNotes();
    },
    [sortBy, search],
  );

  async function toggleFavorites(id, isFav) {
    if (!id) return;

    const res = await fetch(`/api/notes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFav: !isFav }),
    });

    if (res.ok) getNotes();
    else console.error('Error updating favorites...');
  }

  async function deleteNote(id) {
    const res = await fetch(`/api/notes/${id}`, { method: 'DELETE' });

    if (res.ok) getNotes();
    else console.error('Error deleting note');
  }

  async function copyNote({ title, content }) {
    const textToCopy = `${title}\n${content}`;

    navigator.clipboard.writeText(textToCopy).then(() => alert('Note Copied'));
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        getNotes,
        sortBy,
        setSortBy,
        search,
        setSearch,
        deleteNote,
        copyNote,
        toggleFavorites,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);

  if (context === undefined) throw new Error('Context used out of the scope');

  return context;
}
