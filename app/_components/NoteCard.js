'use client';

import {
  DocumentDuplicateIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  PlayIcon,
  StarIcon as ActiveStarIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNotes } from '../_context/NotesContext';

export default function NoteCard({
  typeObj = { type: 'text', val: 'text' },
  id,
  title,
  content,
  date,
  isFav,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const { deleteNote, copyNote, toggleFavorites } = useNotes();
  const formattedDate = new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  function handleMenuClick(action) {
    if (action === 'delete') deleteNote(id);
    //if (action === "edit") deleteNote(id)
    if (action === 'copy') copyNote({ title, content });

    setShowMenu(false);
  }
  return (
    <>
      <div className="relative grid h-72 w-60 grid-rows-[auto_1fr_auto] gap-2 rounded-[1.5rem] border-[1px] border-gray-200 p-4 shadow-sm">
        <div className="row-start-1 flex items-center justify-between">
          <span className="text-xs text-gray-300">{formattedDate}</span>
          <span className="flex items-center gap-1 rounded-full bg-gray-200 px-2 py-[0.2rem] text-xs font-semibold">
            {typeObj.type === 'audio' && <PlayIcon className="size-3" />}
            {typeObj.type === 'text' && <DocumentTextIcon className="size-3" />}
            <span>{typeObj.val}</span>
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold">{title}</span>

          <span className="text-sm text-gray-400">{content}</span>
        </div>

        <div className="row-start-3 flex justify-end gap-1">
          <button onClick={() => handleMenuClick('copy')}>
            <DocumentDuplicateIcon className="size-5 cursor-pointer text-gray-300" />
          </button>

          <button onClick={() => toggleFavorites(id, isFav)}>
            {isFav ? (
              <ActiveStarIcon className="size-5 cursor-pointer text-gray-300" />
            ) : (
              <StarIcon className="size-5 cursor-pointer text-gray-300" />
            )}
          </button>

          <button onClick={() => setShowMenu((show) => !show)}>
            <EllipsisHorizontalIcon className="size-5 cursor-pointer text-gray-300" />
          </button>
        </div>
        {showMenu && (
          <div className="absolute -bottom-12 -right-10 z-10 flex flex-col justify-center gap-2 rounded-lg bg-purple-300 px-4 py-2 transition-all duration-200">
            <button
              className="flex items-center gap-1 text-xs text-gray-500"
              onClick={() => handleMenuClick('delete')}
            >
              <TrashIcon className="size-4 cursor-pointer text-gray-500" />
              Delete
            </button>

            <span className="border-[1px] border-b border-gray-200"></span>

            <button
              className="flex items-center gap-1 text-xs text-gray-500"
              onClick={() => handleMenuClick('edit')}
            >
              <PencilSquareIcon className="size-4 cursor-pointer text-gray-500" />
              Edit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
