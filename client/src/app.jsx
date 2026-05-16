import { useLayoutAgent } from './hooks/useLayoutAgent';

import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import JsonViewer from './components/JsonViewer';
import WireframePreview from './components/WireframePreview';

function App() {
  const {
    layout,
    messages,
    loading,
    sendMessage,
  } = useLayoutAgent();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* TOP CHAT SECTION */}

      <div className="bg-white border-b shadow-sm">

        <div className="max-w-7xl mx-auto p-4">

          <h1 className="text-2xl font-bold mb-4">
            AI Layout Agent
          </h1>

          <ChatInput
            onSend={sendMessage}
            loading={loading}
          />

          <div className="mt-4">
            <ChatWindow messages={messages} />
          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 p-4">

        {/* PREVIEW */}

        <div className="space-y-4">

          <h2 className="text-xl font-semibold">
            Live Preview
          </h2>

          <WireframePreview layout={layout} />

        </div>

        {/* JSON */}

        <div className="space-y-4">

          <h2 className="text-xl font-semibold">
            Updated JSON
          </h2>

          <JsonViewer layout={layout} />

        </div>

      </div>

    </div>
  );
}

export default App;