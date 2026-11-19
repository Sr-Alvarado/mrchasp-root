const dragThreshold = 4

export function dragScroll(element: HTMLElement) {
  let start: number | undefined
  let last = 0
  let dragged = false

  element.addEventListener('dragstart', (event) => event.preventDefault())
  element.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') return
    start = last = event.clientX
    dragged = false
  })
  element.addEventListener('pointermove', (event) => {
    if (start === undefined || !event.buttons) return
    if (!dragged && Math.abs(event.clientX - start) > dragThreshold) {
      dragged = true
      element.setPointerCapture(event.pointerId)
      element.toggleAttribute('data-dragging', true)
    }
    if (!dragged) return
    element.scrollLeft -= event.clientX - last
    last = event.clientX
  })
  element.addEventListener('pointerup', () => {
    start = undefined
    element.toggleAttribute('data-dragging', false)
  })
  element.addEventListener('click', (event) => dragged && event.preventDefault(), true)
}
