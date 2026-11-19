import {openGraph} from './openGraph'
import {homeQuery} from './queries'
import {sanity} from './sanity'

const {profile, palettes, root, sites, feed, ...rest} = await sanity.fetch(homeQuery)

if (!profile || !palettes?.light || !palettes.dark || !root?.ui) {
  throw new Error('Sanity is missing the profile, theme or root site UI')
}

const enrichedFeed = await Promise.all(
  feed.map(async (item) => {
    const og =
      item.url && !(item.title && item.text && item.image && item.publishedAt)
        ? await openGraph(item.url)
        : {}
    return {
      ...item,
      title: item.title ?? og.title,
      text: item.text ?? og.text,
      image: item.image ?? og.image,
      publishedAt: item.publishedAt ?? og.publishedAt,
    }
  }),
)

export const content = {
  ...rest,
  profile,
  palettes: {light: palettes.light, dark: palettes.dark},
  root: {...root, ui: root.ui},
  sites: sites.flatMap(({key, ...site}) => (key ? [{...site, key}] : [])),
  feed: enrichedFeed
    .flatMap(({publishedAt, ...item}) => (publishedAt ? [{...item, publishedAt}] : []))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
}

export type FeedEntry = (typeof content.feed)[number]
export type ProjectEntry = (typeof content.projects)[number]
export type ChannelEntry = (typeof content.channels)[number]
