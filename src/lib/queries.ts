import {defineQuery} from 'groq'

export const homeQuery = defineQuery(`{
  "profile": *[_type == "profile"][0]{
    alias,
    "displayName": array::join(array::compact([name.first, name.last, name.secondLast]), " "),
    "bio": bio.short,
    "cutout": images[role == "cutout"][0].image.asset->{url, "width": metadata.dimensions.width, "height": metadata.dimensions.height},
    "og": images[role == "og"][0].image.asset->url
  },
  "palettes": *[_type == "theme"][0]{light, dark},
  "root": *[_type == "site" && key == "root"][0]{colorLight, colorDark, ui},
  "sites": *[_type == "site" && key in ["lab", "blog", "brain", "talks", "cv"]] | order(order asc){
    key, name, url, colorLight, colorDark, description
  },
  "channels": *[_type == "channel"] | order(priority asc){_id, platform, handle, url, showInHero},
  "projects": *[_type == "project" && featured] | order(order asc){
    _id, name, status, summary, stack, links, "image": images[0].asset->url
  },
  "feed": *[_type == "feedItem"]{
    _id, source, title, text, "image": image.asset->url, url, publishedAt
  }
}`)
