'use client';

import Image from 'next/image';
import ActionsMenu from './ActionsMenu';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function NoteCard({ note }) {
  const { title, content, createdAt: date, image, duration } = note;
  const formattedDate = new Date(date).toLocaleString();

  return (
    <div className="relative grid h-72 w-60 grid-rows-[auto_1fr_auto] gap-2 rounded-xl border-[1px] border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-300">{formattedDate}</span>
        <span className="flex items-center gap-1 rounded-full bg-gray-200 px-2 text-xs font-semibold">
          {duration > 0 && <PlayIcon className="size-3" />}
          <span>{duration ? `${duration} sec` : 'Text'}</span>
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold">{title}</span>
        <span className="flex flex-col gap-1 text-sm text-gray-400">
          {content}
          {image !== '' && (
            <div className="relative h-20 w-20">
              <Image src={image} alt={title} className="object-cover" />
            </div>
          )}
        </span>
      </div>

      <ActionsMenu note={note} />
    </div>
  );
}
