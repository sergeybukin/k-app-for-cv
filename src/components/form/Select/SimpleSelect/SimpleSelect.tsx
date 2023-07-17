import { Form } from 'antd'
import cn from 'classnames'
import { IFormField } from 'types/form'
import React, { HTMLAttributes, memo } from 'react'
import { IonSelect, IonSelectOption } from '@ionic/react'

export interface ISelectOption {
  value: any
  label: string | React.ReactNode
}

export interface ISelectProps extends IFormField, HTMLAttributes<HTMLIonSelectElement> {
  options: ISelectOption[]
}

export const SimpleSelect: React.FC<ISelectProps> = (props) => {
  const { label, helpText, helpTextStatus, wrapperClassName, options, ...selectProps } = props

  return (
    <Form.Item className={cn(wrapperClassName)} label={label} validateStatus={helpTextStatus} help={helpText}>
      <IonSelect {...selectProps}>
        {options.map((option) => (
          <IonSelectOption key={option.value} value={option.value}>
            {option.label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </Form.Item>
  )
}

export default memo(SimpleSelect)
