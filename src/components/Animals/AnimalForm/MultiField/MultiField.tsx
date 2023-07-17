import React, { FC, useMemo } from 'react'
import { SelectConnected } from 'components/form/Select/Select/SelectConnected'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { IonIcon } from '@ionic/react'
import { chevronExpandOutline } from 'ionicons/icons'
import NumberInputConnected from 'components/form/NumberInput/NumberInputConnected'
import { Control, useController } from 'react-hook-form'
import './MultiField.scss'

interface IProps {
  label: string
  inputName: string
  selectName?: string
  selectOptions?: DefaultOptionType[]
  control?: Control<any>
}

export const MultiField: FC<IProps> = (props) => {
  const { label, inputName, selectName, selectOptions, control } = props

  const inputField = useController({ name: inputName, control })
  const selectField = useController({ name: selectName || '', control })

  const error = useMemo(() => {
    return inputField.fieldState?.error || selectField.fieldState?.error
  }, [inputField, selectField])

  return (
    <div className={'MultiField'}>
      <div className={'MultiField__label text'}>
        {label}
        {error ? <span className={'MultiField__label-error'}>*</span> : null}
      </div>
      <div className={'MultiField__fields'}>
        <NumberInputConnected
          validateOnlyRequired
          control={control}
          placeholder={'Number'}
          wrapperClassName={'MultiField__input'}
          name={inputName}
        />
        {selectOptions && selectName ? (
          <SelectConnected
            validateOnlyRequired
            control={control}
            suffixIcon={<IonIcon className={'MultiField__select-arrow'} icon={chevronExpandOutline} />}
            wrapperClassName={'MultiField__select'}
            options={selectOptions}
            name={selectName}
          />
        ) : null}
      </div>
    </div>
  )
}
