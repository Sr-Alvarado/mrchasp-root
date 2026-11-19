import type {LocaleString} from '../../sanity.types'
import {content} from './content'
import {type Locale, locales, localize} from './i18n'

const {status, ...labels} = content.root.ui

type Strings = Record<keyof typeof labels, string> & {
  status: Record<keyof NonNullable<typeof status>, string>
}

const translate = (strings: Record<string, LocaleString | undefined>, locale: Locale) =>
  Object.fromEntries(Object.entries(strings).map(([key, value]) => [key, localize(value, locale)]))

export const ui = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {...translate(labels, locale), status: translate(status ?? {}, locale)},
  ]),
) as Record<Locale, Strings>
