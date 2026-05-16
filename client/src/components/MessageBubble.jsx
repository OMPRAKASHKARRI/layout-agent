export default function MessageBubble({
  message,
}) {
  return (
    <div
      className={`max-w-[80%] p-3 rounded-xl text-sm ${
        message.role === 'user'
          ? 'ml-auto bg-blue-500 text-white'
          : 'bg-gray-200 text-black'
      }`}
    >
      {message.content}
    </div>
  );
}