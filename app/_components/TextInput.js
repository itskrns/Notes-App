'use client';

export default function TextInput({ setText, text, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={text}
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 outline-none"
      />
    </form>
  );
}
