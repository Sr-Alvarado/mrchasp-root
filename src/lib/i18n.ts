import type {LocaleString} from '../../sanity.types'

export const locales = ['es', 'en'] as const
export const defaultLocale = 'es'

export type Locale = (typeof locales)[number]

export const localize = (value: LocaleString | null | undefined, locale: Locale) => value?.[locale]
