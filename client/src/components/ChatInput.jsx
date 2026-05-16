import { useState } from 'react';

export default function ChatInput({
  onSend,
  loading,
}) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onSend(text);

    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t flex gap-2"
    >
      <input
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        className="flex-1 border rounded-lg px-4 py-2"
        placeholder="Ask layout agent..."
      />

      <button
        disabled={loading}
        className="bg-black text-white px-4 rounded-lg"
      >
        Send
      </button>
    </form>
  );
}