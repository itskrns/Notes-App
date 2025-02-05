'use client';

import { HomeIcon, StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            href="/"
            className={`${pathname === '/' ? 'bg-purple-200 font-semibold text-purple-900' : ''} flex w-full items-center gap-2 rounded-full p-2 text-sm text-gray-400 hover:bg-purple-200 hover:font-semibold`}
          >
            <HomeIcon
              className={`size-4 ${pathname === '/' ? 'text-purple-900' : ''}`}
            />
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/favorites"
            className={`${pathname === '/favorites' ? 'bg-purple-200 font-semibold text-purple-900' : ''} flex w-full items-center gap-2 rounded-full p-2 text-sm text-gray-400 hover:bg-purple-200 hover:font-semibold`}
          >
            <StarIcon
              className={`size-4 ${pathname === '/favorites' ? 'text-purple-900' : ''}`}
            />
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
