import ogs from 'open-graph-scraper'

type OpenGraph = Partial<Record<'title' | 'text' | 'image' | 'publishedAt', string | undefined>>

export const openGraph = (url: string): Promise<OpenGraph> =>
  ogs({url, timeout: 5})
    .then(({result}) => {
      const image = result.ogImage?.[0]?.url
      const publishedAt = result.articlePublishedTime
      return {
        title: result.ogTitle,
        text: result.ogDescription,
        image: image && new URL(image, url).href,
        publishedAt: publishedAt && new Date(publishedAt).toISOString(),
      }
    })
    .catch(() => ({}))
