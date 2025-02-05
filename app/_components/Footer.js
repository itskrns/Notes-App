import {
  CircleStackIcon,
  PencilIcon,
  PhotoIcon,
} from '@heroicons/react/24/solid';
import Form from './Form';

export default function Footer() {
  return (
    <div className="mx-auto grid w-[50vw] grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full border-[1px] border-gray-200 px-4 py-2 shadow-md">
      <div className="flex items-center gap-3">
        <span>
          <PencilIcon className="size-3 cursor-pointer hover:text-purple-800" />
        </span>
        <span>
          <PhotoIcon className="size-3 cursor-pointer hover:text-purple-800" />
        </span>
      </div>

      <div>
        <Form />
      </div>

      <span>
        <button className="rounded-full bg-red-500 px-4 py-1 text-sm text-white hover:bg-red-600">
          start recording
        </button>
      </span>
    </div>
  );
}
