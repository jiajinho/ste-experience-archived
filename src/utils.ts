export function applyStyleIf(predicate: boolean, style: string) {
  if (predicate) return style;
  return '';
}