import en from '../translations/en.json'

export type Messages = Partial<typeof en>

export enum Language {
  en = 'en',
}

const translations = (
  language: Language = process.env.GATSBY_LANGUAGE as Language,
) => {
  switch (language) {
    case Language.en:
      return en as Messages
    default:
      return en as Messages
  }
}

export default translations
