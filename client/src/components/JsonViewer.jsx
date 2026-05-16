export default function JsonViewer({
  layout,
}) {
  return (
    <pre className="bg-black text-green-400 p-4 rounded-xl overflow-auto text-xs">
      {JSON.stringify(layout, null, 2)}
    </pre>
  );
} 