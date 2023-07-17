import { InputProps, Input, TextArea, TextAreaProps } from 'antd-mobile'
import { Form } from 'antd'
import { IFormField } from 'types/form'
import React, { memo } from 'react'
import cn from 'classnames'

type TIonInputProps = InputProps & TextAreaProps

export interface ITextInputProps extends IFormField, TIonInputProps {
  type?: 'text' | 'password' | 'number' | 'email' | 'textarea'
}

const TextInput: React.FC<ITextInputProps> = (props) => {
  const { label, wrapperClassName, helpText, helpTextStatus, type, ...inputProps } = props

  const InputComponent = type === 'textarea' ? TextArea : Input

  return (
    <Form.Item className={cn(wrapperClassName)} label={label} validateStatus={helpTextStatus} help={helpText}>
      <InputComponent {...inputProps} />
    </Form.Item>
  )
}

export default memo(TextInput)
