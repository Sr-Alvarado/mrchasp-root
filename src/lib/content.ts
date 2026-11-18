import {homeQuery} from './queries'
import {sanity} from './sanity'

const {profile, palettes, root, sites, ...rest} = await sanity.fetch(homeQuery)

if (!profile || !palettes?.light || !palettes.dark || !root) {
  throw new Error('Sanity is missing the profile, theme or root site document')
}

export const content = {
  ...rest,
  profile,
  palettes: {light: palettes.light, dark: palettes.dark},
  root,
  sites: sites.flatMap(({key, ...site}) => (key ? [{...site, key}] : [])),
}

export type FeedEntry = (typeof content.feed)[number]
export type ProjectEntry = (typeof content.projects)[number]
export type ChannelEntry = (typeof content.channels)[number]
