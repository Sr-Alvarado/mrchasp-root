import {defineConfig, fontProviders} from 'astro/config'
import {defaultLocale, locales} from './src/lib/i18n'

export default defineConfig({
  site: 'https://mrchasp.com',
  i18n: {locales: [...locales], defaultLocale},
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Lexend',
      cssVariable: '--font-lexend',
      options: {
        variants: [{src: ['./src/assets/fonts/lexend.woff2'], weight: '300 700', style: 'normal'}],
      },
    },
  ],
})
