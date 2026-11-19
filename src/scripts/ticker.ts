import {dragScroll} from './dragScroll'
import {trackHover} from './hover'

const loopDuration = 40000
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')

for (const ticker of document.querySelectorAll<HTMLElement>('[data-ticker]')) {
  dragScroll(ticker)
  const hovered = trackHover(ticker)
  let touching = false
  let position = 0
  let previous = performance.now()

  ticker.addEventListener(
    'touchstart',
    () => {
      touching = true
    },
    {passive: true},
  )
  ticker.addEventListener('touchend', () => {
    touching = false
  })

  const advance = (time: number) => {
    const half = ticker.scrollWidth / 2
    const paused = hovered() || touching || reducedMotion.matches
    position =
      (paused ? ticker.scrollLeft : position + (half * (time - previous)) / loopDuration) % half
    if (position !== ticker.scrollLeft) ticker.scrollLeft = position
    previous = time
    requestAnimationFrame(advance)
  }
  requestAnimationFrame(advance)
}
