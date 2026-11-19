import type {APIRoute, GetStaticPaths} from 'astro'
import sharp from 'sharp'
import logo from '../assets/logo.svg?raw'
import {content} from '../lib/content'
import {icons} from '../lib/icons'

export const getStaticPaths = (() =>
  icons.map((icon) => ({params: {icon: icon.name}, props: icon}))) satisfies GetStaticPaths

type Props = (typeof icons)[number]

export const GET: APIRoute<Props> = async ({props: {size, use}}) => {
  const svg = sharp(
    new TextEncoder().encode(logo.replace('currentColor', content.root.colorLight ?? '')),
    {
      density: 300,
    },
  ).resize(size, size)
  const png = await (use === 'apple-touch-icon'
    ? svg.flatten({background: content.palettes.light.bg})
    : svg
  )
    .png()
    .toBuffer()
  return new Response(new Uint8Array(png), {headers: {'Content-Type': 'image/png'}})
}
