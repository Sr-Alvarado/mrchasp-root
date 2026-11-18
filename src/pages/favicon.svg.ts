import logo from '../assets/logo.svg?raw'
import {content} from '../lib/content'

const {colorLight, colorDark} = content.root

export const GET = () =>
  new Response(
    logo.replace(
      '>',
      `><style>svg{fill:${colorLight}}@media(prefers-color-scheme:dark){svg{fill:${colorDark}}}</style>`,
    ),
    {headers: {'Content-Type': 'image/svg+xml'}},
  )
