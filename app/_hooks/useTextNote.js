'use client';

import { useState } from 'react';
import { useNotes } from '../_context/NotesContext';
import { splitContent } from '../_lib/formatNote';

export default function useTextNote() {
  const [text, setText] = useState('');
  const { getNotes } = useNotes();

  async function handleSubmit(e) {
    e.preventDefault();

    const { title, content } = splitContent(text);

    const noteData = {
      title,
      content,
      noteType: 'text',
    };

    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });

    if (res.ok) {
      setText('');
      getNotes();
    } else {
      throw new Error('Note not created');
    }
  }

  return { text, setText, handleSubmit };
}
