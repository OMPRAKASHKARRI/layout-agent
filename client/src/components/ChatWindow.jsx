import MessageBubble from './MessageBubble';

export default function ChatWindow({
  messages,
}) {
  return (
    <div className="space-y-3 max-h-52 overflow-y-auto">

      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          message={message}
        />
      ))}

    </div>
  );
}