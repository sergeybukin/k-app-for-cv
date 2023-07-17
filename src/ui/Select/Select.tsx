import React, { FC, useState } from 'react'
import CSS from 'csstype'
import { IonSelect, IonSelectOption } from '@ionic/react'
import { SelectChangeEventDetail, SelectInterface } from '@ionic/core'
import { IonSelectCustomEvent } from '@ionic/core/dist/types/components'
import './Select.scss'

export interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]

  placeholder?: string
  onChange: (value: string) => void
  classList?: string
  styles?: CSS.Properties
  multiple?: boolean
  defaultValue?: string
  listMode?: SelectInterface
  listClass?: string
}

export const Select: FC<SelectProps> = ({
  options,
  onChange,
  classList = '',
  styles = {},
  placeholder = 'Select option',
  multiple = false,
  defaultValue,
  listMode = 'popover',
  listClass = '',
}) => {
  const [value, setValue] = useState(() => defaultValue)
  const onSelectChange = (e: IonSelectCustomEvent<SelectChangeEventDetail>) => {
    onChange(e.detail.value)
    setValue(e.detail.value)
  }

  return (
    <IonSelect
      style={styles}
      placeholder={placeholder}
      onIonChange={onSelectChange}
      multiple={multiple}
      className={classList + ' custom-select'}
      interface={listMode}
      interfaceOptions={{ cssClass: listClass }}
      value={value}
    >
      {options.map((option) => (
        <IonSelectOption key={option.value} value={option.value}>
          {option.label}
        </IonSelectOption>
      ))}
    </IonSelect>
  )
}
