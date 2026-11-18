import {defineConfig, fontProviders} from 'astro/config'
import icon from 'astro-icon'
import {defaultLocale, locales} from './src/lib/i18n'

export default defineConfig({
  site: 'https://mrchasp.com',
  integrations: [icon()],
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
