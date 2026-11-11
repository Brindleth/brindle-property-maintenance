export function comparisonAt(clientX: number, left: number, width: number) {
  if (width <= 0) return 50
  return Math.round(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)))
}
export function comparisonClip(split: number) {
  return `inset(0 0 0 ${Math.min(100, Math.max(0, split))}%)`
}
