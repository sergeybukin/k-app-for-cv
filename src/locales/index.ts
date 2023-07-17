import moment from 'moment'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { de as yupDeLocale } from 'yup-locales'
import { setLocale } from 'yup'
import { ELocales } from 'constants/resources'
import en from './en.json'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: ELocales.ENGLISH,
    lng: ELocales.ENGLISH,
    resources: { en },
    detection: { order: ['navigator'] },
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err)
  })

const changeYupLocale = (locale: ELocales) => {
  switch (locale) {
    case ELocales.ENGLISH:
      setLocale(yupDeLocale)
      break
    default:
      setLocale({})
  }
}
i18n.on('languageChanged', (lng) => {
  window.document.dir = i18n.dir(lng)
  moment.locale(lng)
  changeYupLocale(lng as ELocales)
})

changeYupLocale(ELocales.ENGLISH)

export default i18n
