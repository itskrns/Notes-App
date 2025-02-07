'use client';

import { PhotoIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import img from '../../public/next.svg';
import Image from 'next/image';

export default function ImgInput({ setImgFile }) {
  const [imgUrl, setImgUrl] = useState(null);
  const fileInputRef = useRef(null);

  function handleClick() {
    fileInputRef.current.click();
  }

  async function handleFileChange(e) {
    const file = e.target.files[0];

    if (file) {
      setImgFile(file);

      const previewUrl = URL.createObjectURL(file);
      setImgUrl(previewUrl);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleClick}>
        <PhotoIcon className="size-3 cursor-pointer hover:text-purple-800" />
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden cursor-pointer hover:text-purple-800"
      />

      {imgUrl && (
        <div className="relative h-6 w-6">
          <Image src={imgUrl} alt="img" fill className="rounded object-cover" />
        </div>
      )}
    </div>
  );
}
