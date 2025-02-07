'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, StarIcon } from '@heroicons/react/24/solid';

const menuItems = [
  {
    name: 'home',
    href: '/',
    icon: <HomeIcon className="size-4 text-purple-900" />,
  },

  {
    name: 'favorites',
    href: '/favorites',
    icon: <StarIcon className="size-4 text-purple-900" />,
  },
];

export default function Menu() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, ind) => {
          return (
            <li key={ind}>
              <Link
                href={item.href}
                className={`flex w-full items-center gap-2 rounded-full p-2 text-sm font-semibold capitalize text-gray-400 hover:bg-purple-200 ${pathname === item.href ? 'bg-purple-200 text-purple-900' : ''} transition-all duration-200`}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
