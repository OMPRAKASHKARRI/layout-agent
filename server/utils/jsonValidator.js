export function validateLayout(layout) {
  if (!layout) {
    throw new Error('Layout missing');
  }

  if (!Array.isArray(layout.rootNodes)) {
    throw new Error('rootNodes invalid');
  }

  if (typeof layout.nodes !== 'object') {
    throw new Error('nodes invalid');
  }

  return true;
}