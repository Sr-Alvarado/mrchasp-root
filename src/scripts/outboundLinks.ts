document.addEventListener('click', (event) => {
  const link = event.target instanceof Element ? event.target.closest('a') : null
  if (link && link.origin !== location.origin) {
    const {umami} = window as Window & {
      umami?: {track: (name: string, data: Record<string, string>) => void}
    }
    umami?.track('outbound-link', {url: link.href})
  }
})
