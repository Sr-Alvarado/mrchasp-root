import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  typegen: {path: './src/**/*.{ts,astro}'},
})
