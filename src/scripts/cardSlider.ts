import {dragScroll} from './dragScroll'
import {trackHover} from './hover'

const interval = 5000

for (const slider of document.querySelectorAll<HTMLElement>('[data-slider]')) {
  dragScroll(slider)
  const hovered = trackHover(slider)

  setInterval(() => {
    if (hovered()) return
    const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1
    slider.scrollTo({
      left: atEnd ? 0 : slider.scrollLeft + (slider.firstElementChild?.clientWidth ?? 0),
      behavior: 'smooth',
    })
  }, interval)
}
