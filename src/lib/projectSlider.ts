export function nextProjectStage(current: number, direction: number, count = 4) {
  return ((current + direction) % count + count) % count
}

export function swipeDirection(dx: number, dy: number) {
  // Leave vertical gestures to native page scrolling.
  return Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy) * 1.4 ? (dx < 0 ? 1 : -1) : 0
}
