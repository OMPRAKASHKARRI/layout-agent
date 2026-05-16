export default function WireframePreview({
  layout,
}) {
  const rootId = layout.rootNodes?.[0];

  const artboard =
    layout.nodes?.[rootId];

  if (!artboard) {
    return (
      <div className="bg-white rounded-xl p-4">
        No Preview
      </div>
    );
  }

  const aspectRatio =
    artboard.height / artboard.width;

  return (
    <div
      className="relative w-full bg-white rounded-2xl overflow-hidden border shadow-lg"
      style={{
        paddingBottom: `${
          aspectRatio * 100
        }%`,
      }}
    >
      {/* Background */}

      {layout.imageUrl && (
        <img
          src={layout.imageUrl}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Nodes */}

      {artboard.children?.map((id) => {
        const node = layout.nodes[id];

        if (!node) return null;

        /*
          ==========================
          IMAGE NODES
          ==========================
        */

        if (node.type === 'image') {
          return (
            <img
              key={id}
              src={node.data?.sourceUrl}
              alt={node.name}
              style={{
                position: 'absolute',

                left: `${
                  (node.nx || 0) * 100
                }%`,

                top: `${
                  (node.ny || 0) * 100
                }%`,

                width: `${
                  (node.nw || 0) * 100
                }%`,

                height: `${
                  (node.nh || 0) * 100
                }%`,

                objectFit: 'cover',
              }}
            />
          );
        }

        /*
          ==========================
          TEXT NODES
          ==========================
        */

        if (node.type === 'text') {
          return (
            <div
              key={id}
              style={{
                position: 'absolute',

                left: `${
                  (node.nx || 0) * 100
                }%`,

                top: `${
                  (node.ny || 0) * 100
                }%`,

                width: `${
                  (node.nw || 0) * 100
                }%`,

                height: `${
                  (node.nh || 0) * 100
                }%`,

                color:
                  node.style?.visual?.color
                    ?.value || '#fff',

                fontSize:
                  (node.style?.visual
                    ?.fontSize || 16) * 0.45,

                fontWeight:
                  node.style?.visual
                    ?.fontWeight || 400,

                fontStyle:
                  node.style?.visual
                    ?.fontStyle || 'normal',

                fontFamily:
                  node.style?.visual
                    ?.fontFamily || 'Arial',

                whiteSpace: 'pre-wrap',

                overflow: 'hidden',

                lineHeight: 1.1,
              }}
            >
              {node.data?.content}
            </div>
          );
        }

        /*
          ==========================
          SHAPE NODES
          ==========================
        */

        if (node.type === 'shape') {
          return (
            <div
              key={id}
              style={{
                position: 'absolute',

                left: `${
                  (node.nx || 0) * 100
                }%`,

                top: `${
                  (node.ny || 0) * 100
                }%`,

                width: `${
                  (node.nw || 0) * 100
                }%`,

                height: `${
                  (node.nh || 0) * 100
                }%`,

                borderRadius: '999px',

                background:
                  node.style?.visual?.fill
                    ?.value || '#FFD700',
              }}
            />
          );
        }

        return null;
      })}
    </div>
  );
}