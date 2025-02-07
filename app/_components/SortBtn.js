'use client';

import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';
import { useNotes } from '../_context/NotesContext';

export default function SortBtn() {
  const { sortBy, setSortBy } = useNotes();
  return (
    <button
      className="flex items-center gap-1 rounded-md bg-purple-800 p-2 text-sm font-semibold text-white outline-none"
      onClick={() => setSortBy(sortBy === 'asc' ? 'desc' : 'asc')}
    >
      {sortBy === 'desc' ? (
        <BarsArrowDownIcon className="size-4" />
      ) : (
        <BarsArrowUpIcon className="size-4" />
      )}
      Sort
    </button>
  );
}
