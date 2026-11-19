const interval = 5000
const dragThreshold = 4

for (const slider of document.querySelectorAll<HTMLElement>('[data-slider]')) {
  let start: {x: number; scroll: number} | undefined
  let dragged = false
  let hovered = false

  slider.addEventListener('dragstart', (event) => event.preventDefault())
  slider.addEventListener('pointerenter', () => {
    hovered = true
  })
  slider.addEventListener('pointerleave', () => {
    hovered = false
  })
  slider.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') return
    start = {x: event.clientX, scroll: slider.scrollLeft}
    dragged = false
  })
  slider.addEventListener('pointermove', (event) => {
    if (!start || !event.buttons) return
    const delta = event.clientX - start.x
    if (!dragged && Math.abs(delta) > dragThreshold) {
      dragged = true
      slider.setPointerCapture(event.pointerId)
      slider.toggleAttribute('data-dragging', true)
    }
    if (dragged) slider.scrollLeft = start.scroll - delta
  })
  slider.addEventListener('pointerup', () => {
    start = undefined
    slider.toggleAttribute('data-dragging', false)
  })
  slider.addEventListener('click', (event) => dragged && event.preventDefault(), true)

  setInterval(() => {
    if (hovered) return
    const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1
    slider.scrollTo({
      left: atEnd ? 0 : slider.scrollLeft + (slider.firstElementChild?.clientWidth ?? 0),
      behavior: 'smooth',
    })
  }, interval)
}
