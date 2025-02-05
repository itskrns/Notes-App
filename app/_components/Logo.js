import { ServerStackIcon } from '@heroicons/react/24/solid';

export default function Logo() {
  return (
    <h1 className="flex items-center gap-2 font-semibold text-gray-400">
      <ServerStackIcon className="size-5 text-purple-800" />
      AI Notes
    </h1>
  );
}
