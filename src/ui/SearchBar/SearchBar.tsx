import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from 'ui/Icon/Icon'
import { SearchBar as AntSearchBar } from 'antd-mobile'
import './SearchBar.scss'

export interface IProps {
  onChange: (value: string) => void
  value: string
}

export const SearchBar: FC<IProps> = ({ onChange, value }) => {
  const { t } = useTranslation()

  return (
    <div className={'SearchBar'}>
      <AntSearchBar
        className={'SearchBar__input'}
        icon={null}
        value={value}
        placeholder={`${t('commonSearch')}`}
        onChange={onChange}
      />
      {!value ? <Icon classList={'SearchBar__icon'} name={'search-outline'} /> : null}
    </div>
  )
}
