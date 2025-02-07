'use client';

import AudioInput from './AudioInput';
import TextInput from './TextInput';
import useTextNote from '../_hooks/useTextNote';

export default function InputBar() {
  const { text, setText, handleSubmit } = useTextNote();

  return (
    <div className="mx-auto grid w-[50vw] grid-cols-[1fr_auto] items-center gap-2 rounded-full border-[1px] border-gray-200 px-4 py-2 shadow-md">
      <TextInput setText={setText} text={text} handleSubmit={handleSubmit} />

      <AudioInput />
    </div>
  );
}
