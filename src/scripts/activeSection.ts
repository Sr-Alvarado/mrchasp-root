const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav]')
const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')]

const markActiveSection = () => {
  const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 1
  const active = atBottom
    ? sections.at(-1)
    : (sections.findLast((section) => section.getBoundingClientRect().top <= innerHeight / 4) ??
      sections[0])
  for (const link of links) {
    if (link.dataset.nav === active?.id) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  }
}

addEventListener('scroll', markActiveSection, {passive: true})
markActiveSection()
