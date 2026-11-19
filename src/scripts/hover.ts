export function trackHover(element: HTMLElement) {
  let hovered = false
  element.addEventListener('pointerenter', () => {
    hovered = true
  })
  element.addEventListener('pointerleave', () => {
    hovered = false
  })
  return () => hovered
}
