'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useNotes } from '../_context/NotesContext';

export default function SearchBox() {
  const { search, setSearch } = useNotes();
  return (
    <div className="flex items-center rounded-full border-[1px] border-gray-200 pl-2 text-sm outline-none">
      <span>
        <MagnifyingGlassIcon className="size-5 text-gray-500" />
      </span>
      <input
        type="text"
        placeholder="Search"
        value={search}
        className="flex-1 rounded-full px-2 py-2 text-sm outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
