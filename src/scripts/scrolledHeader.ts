const header = document.querySelector<HTMLElement>('[data-header]')

const markScrolled = () => header?.toggleAttribute('data-scrolled', scrollY > 0)

addEventListener('scroll', markScrolled, {passive: true})
markScrolled()
