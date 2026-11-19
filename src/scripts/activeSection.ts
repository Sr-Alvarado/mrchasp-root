const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav]')]
const lists = [...new Set(links.map((link) => link.closest('ul') as HTMLElement))]
const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')]

const markActiveSection = () => {
  const rects = sections.map((section) => section.getBoundingClientRect())
  const visible = rects.map(
    (rect, index) =>
      Math.min(innerHeight, rects[index + 1]?.top ?? rect.bottom) - Math.max(0, rect.top),
  )
  const active = sections[visible.indexOf(Math.max(...visible))]?.id

  for (const list of lists) {
    const vertical = getComputedStyle(list).flexDirection === 'column'
    const length = vertical ? list.clientHeight : list.clientWidth
    const items = [...list.children].map((item) => ({
      item: item as HTMLElement,
      min: Number.parseFloat(getComputedStyle(item)[vertical ? 'minHeight' : 'minWidth']),
    }))
    let before = 0
    let after = items.reduce((sum, {min}) => sum + min, 0)
    let start = 0
    items.forEach(({item, min}, index) => {
      before += min
      after -= min
      const boundary = ((rects[index + 1]?.top ?? innerHeight) * length) / innerHeight
      const end = Math.max(before, Math.min(boundary, length - after))
      item.style.flexBasis = `${end - start}px`
      start = end
    })
  }

  for (const link of links) {
    if (link.dataset.nav === active) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  }
}

addEventListener('scroll', markActiveSection, {passive: true})
addEventListener('resize', markActiveSection)
markActiveSection()
