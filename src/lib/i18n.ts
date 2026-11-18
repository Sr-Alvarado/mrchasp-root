import type {LocaleString, Project} from '../../sanity.types'

export const locales = ['es', 'en'] as const
export const defaultLocale = 'es'

export type Locale = (typeof locales)[number]

export const localize = (value: LocaleString | null | undefined, locale: Locale) => value?.[locale]

type Strings = {
  home: string
  now: string
  nowTitle: string
  contact: string
  viewCv: string
  contactMe: string
  sections: string
  channels: string
  language: string
  theme: string
  status: Record<NonNullable<Project['status']>, string>
}

export const ui: Record<Locale, Strings> = {
  es: {
    home: 'Inicio',
    now: 'Ando',
    nowTitle: 'En lo que ando',
    contact: 'Contacto',
    viewCv: 'Ver CV',
    contactMe: 'Contactar',
    sections: 'Secciones',
    channels: 'Canales',
    language: 'Idioma',
    theme: 'Cambiar tema',
    status: {live: 'Activo', beta: 'Beta', paused: 'En pausa', archived: 'Archivado'},
  },
  en: {
    home: 'Home',
    now: 'Now',
    nowTitle: "What I'm up to",
    contact: 'Contact',
    viewCv: 'View CV',
    contactMe: 'Get in touch',
    sections: 'Sections',
    channels: 'Channels',
    language: 'Language',
    theme: 'Toggle theme',
    status: {live: 'Live', beta: 'Beta', paused: 'Paused', archived: 'Archived'},
  },
}
