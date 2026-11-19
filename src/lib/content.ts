import {homeQuery} from './queries'
import {sanity} from './sanity'

const {profile, palettes, root, sites, ...rest} = await sanity.fetch(homeQuery)

if (!profile || !palettes?.light || !palettes.dark || !root?.ui) {
  throw new Error('Sanity is missing the profile, theme or root site UI')
}

export const content = {
  ...rest,
  profile,
  palettes: {light: palettes.light, dark: palettes.dark},
  root: {...root, ui: root.ui},
  sites: sites.flatMap(({key, ...site}) => (key ? [{...site, key}] : [])),
}

export type FeedEntry = (typeof content.feed)[number]
export type ProjectEntry = (typeof content.projects)[number]
export type ChannelEntry = (typeof content.channels)[number]
