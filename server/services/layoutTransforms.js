export function resizeArtboard(
  layout,
  newWidth,
  newHeight
) {
  const updated = structuredClone(layout);

  // Safety check
  const rootId = updated.rootNodes?.[0];

  if (!rootId) {
    throw new Error('No root node found');
  }

  const artboard = updated.nodes[rootId];

  if (!artboard) {
    throw new Error('Artboard missing');
  }

  // Update artboard size
  artboard.width = newWidth;
  artboard.height = newHeight;

  // Update all children safely
  if (artboard.children) {
    artboard.children.forEach((childId) => {
      const node = updated.nodes[childId];

      if (!node) return;

      // Recalculate absolute positions
      node.x = (node.nx || 0) * newWidth;
      node.y = (node.ny || 0) * newHeight;

      // Recalculate sizes
      node.width = (node.nw || 0) * newWidth;
      node.height = (node.nh || 0) * newHeight;
    });
  }

  return updated;
}

export function moveNode(layout, nodeId, position) {
  const updated = structuredClone(layout);

  const rootId = updated.rootNodes?.[0];

  if (!rootId) {
    throw new Error('No root node found');
  }

  const artboard = updated.nodes[rootId];

  const node = updated.nodes[nodeId];

  if (!node || !artboard) return updated;

  switch (position) {
    case 'top':
      node.y = 60;
      break;

    case 'center':
      node.y =
        artboard.height / 2 -
        node.height / 2;
      break;

    case 'bottom':
      node.y =
        artboard.height -
        node.height -
        60;
      break;

    case 'higher':
      node.y -= 80;
      break;
  }

  // Update normalized coordinate
  node.ny = node.y / artboard.height;

  return updated;
}

export function resizeNode(
  layout,
  nodeId,
  scale
) {
  const updated = structuredClone(layout);

  const rootId = updated.rootNodes?.[0];

  if (!rootId) {
    throw new Error('No root node found');
  }

  const artboard = updated.nodes[rootId];

  const node = updated.nodes[nodeId];

  if (!node || !artboard) return updated;

  node.width *= scale;
  node.height *= scale;

  node.nw = node.width / artboard.width;
  node.nh = node.height / artboard.height;

  // Resize font safely
  if (
    node.type === 'text' &&
    node.style?.visual?.fontSize
  ) {
    node.style.visual.fontSize *= scale;
  }

  return updated;
}

export function findHeadlineNode(layout) {
  return Object.values(layout.nodes).find(
    (node) =>
      node.type === 'text' &&
      node.data?.content?.includes(
        'Luxury Comfort'
      )
  );
}

export function findBadgeNode(layout) {
  return Object.values(layout.nodes).find(
    (node) =>
      node.type === 'text' &&
      node.data?.content?.includes('20%')
  );
}

export function findProductNode(layout) {
  return Object.values(layout.nodes).find(
    (node) =>
      node.name?.includes('Product')
  );
}