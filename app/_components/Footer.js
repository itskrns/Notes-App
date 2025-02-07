'use client';

import ImgInput from './ImgInput';
import { useState } from 'react';
import TextInput from './TextInput';
import { useNotes } from '../_context/NotesContext';

function splitContent(text) {
  const [title, ...content] = text.split('\n');

  return {
    title: title.trim(),
    content: content.join('\n').trim(),
  };
}

export default function Footer() {
  const [imgFile, setImgFile] = useState(null);
  const [text, setText] = useState('');

  const { getNotes } = useNotes();

  async function handleSubmit(e) {
    e.preventDefault();

    const { title, content } = splitContent(text);
    let imageUrl = '';

    if (imageUrl) {
      const formData = new FormData();
      formData.append('file', imgFile);

      const res = await fetch('api/upload', { method: 'POST', body: formData });

      if (res.ok) {
        const data = await res.json();
        imageUrl = data.url;
      }
    }

    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, isFav: false, image: imageUrl }),
    });

    if (res.ok) {
      setText('');
      setImgFile(null);
      getNotes();
    } else {
      console.error('Note not created');
    }
  }

  return (
    <div className="mx-auto grid w-[50vw] grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full border-[1px] border-gray-200 px-4 py-2 shadow-md">
      <ImgInput setImgFile={setImgFile} />

      <TextInput setText={setText} text={text} />

      <span className="flex items-center gap-2">
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-full border-[1px] border-gray-200 bg-gray-300 px-3 py-1 text-sm font-semibold text-gray-500"
        >
          add
        </button>

        <button className="rounded-full bg-red-500 px-4 py-1 text-sm text-white hover:bg-red-600">
          start recording
        </button>
      </span>
    </div>
  );
}
