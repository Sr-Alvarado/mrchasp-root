type SiteColors = {colorLight: string | null; colorDark: string | null}

export const onBackground = ({colorLight, colorDark}: SiteColors) =>
  `light-dark(${colorLight}, ${colorDark})`

export const onInk = ({colorLight, colorDark}: SiteColors) =>
  `light-dark(${colorDark}, ${colorLight})`
