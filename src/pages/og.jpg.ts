import {createImageUrlBuilder} from '@sanity/image-url'
import {content} from '../lib/content'
import {ogImage} from '../lib/ogImage'
import {sanity} from '../lib/sanity'

export const GET = () =>
  fetch(
    createImageUrlBuilder(sanity)
      .image(content.profile.og)
      .size(ogImage.width, ogImage.height)
      .fit('crop')
      .format('jpg')
      .url(),
  )
