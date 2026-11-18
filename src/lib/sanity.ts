import {createClient} from '@sanity/client'

export const sanity = createClient({
  projectId: '6wzh28a3',
  dataset: 'production',
  apiVersion: '2026-11-01',
  useCdn: false,
})
