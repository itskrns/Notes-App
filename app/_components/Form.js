'use client';

import { useState } from 'react';

function splitContent(text) {
  const [title, ...content] = text.split('\n');

  return {
    title: title.trim(),
    content: content.join('\n').trim(),
  };
}

export default function Form() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();

    const { title, content } = splitContent(text);

    setText('');

    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    setIsLoading(false);

    if (!res.ok) {
      console.error('Note not created');
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <textarea
        type="text"
        rows={1}
        placeholder="Enter text"
        className="w-full px-4 py-2 outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-full border-[1px] border-gray-200 bg-gray-300 px-3 py-1 text-sm font-semibold text-gray-500"
      >
        add
      </button>
    </form>
  );
}
