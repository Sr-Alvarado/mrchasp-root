export const themeKey = 'theme'

export const currentTheme = () =>
  (document.documentElement.dataset.theme ??
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) as 'light' | 'dark'
