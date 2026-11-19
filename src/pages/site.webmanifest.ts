import {content} from '../lib/content'
import {icons} from '../lib/icons'

const {profile, palettes} = content

export const GET = () =>
  Response.json({
    name: profile.alias,
    short_name: profile.alias,
    start_url: '/',
    display: 'standalone',
    background_color: palettes.light.bg,
    theme_color: palettes.light.bg,
    icons: icons
      .filter((icon) => icon.use === 'manifest')
      .map(({name, size}) => ({src: `/${name}.png`, sizes: `${size}x${size}`, type: 'image/png'})),
  })
