import { DefaultOptionType } from 'rc-select/lib/Select'
import i18n from 'i18next'

export const mapSelectOptions = (array: string[], labels?: Record<string, string>): DefaultOptionType[] => {
  return array.map((item) => {
    if (labels && labels[item]) {
      return { value: item, label: i18n.t(labels[item]) }
    }

    return { value: item, label: item }
  })
}
