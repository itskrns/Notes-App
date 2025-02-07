export default function TextInput({ setText, text }) {
  return (
    <textarea
      type="text"
      rows={1}
      required
      value={text}
      placeholder="Enter text"
      onChange={(e) => setText(e.target.value)}
      className="w-full px-4 py-2 outline-none"
    />
  );
}
