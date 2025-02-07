'use client';

import useCardActions from '../_hooks/useCardActions';
import { StarIcon } from '@heroicons/react/24/outline';
import {
  PencilSquareIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  EllipsisHorizontalIcon,
  StarIcon as ActiveStarIcon,
} from '@heroicons/react/24/solid';

const menuActions = [
  {
    name: 'delete',
    icon: <TrashIcon className="size-4 text-white" />,
  },
  {
    name: 'copy',
    icon: <DocumentDuplicateIcon className="size-4 text-white" />,
  },
];

export default function ActionsMenu({ note }) {
  const { showMenu, setShowMenu, handleCardOptions } = useCardActions(note);

  return (
    <>
      <div className="flex justify-end gap-1">
        <button onClick={() => handleCardOptions('favorites')}>
          {note.isFav ? (
            <ActiveStarIcon className="size-5 cursor-pointer text-purple-800" />
          ) : (
            <StarIcon className="size-5 cursor-pointer text-gray-300" />
          )}
        </button>

        <button onClick={() => setShowMenu((show) => !show)}>
          <EllipsisHorizontalIcon className="size-5 cursor-pointer text-gray-300" />
        </button>
      </div>

      {showMenu && (
        <div className="absolute -bottom-12 -right-10 z-10 grid gap-2 rounded-lg bg-purple-300 px-4 py-2 transition-all duration-200">
          {menuActions.map((action, index) => (
            <button
              key={index}
              className="flex items-center gap-1 text-xs capitalize text-gray-200"
              onClick={() => handleCardOptions(action.name)}
            >
              {action.icon}
              {action.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
