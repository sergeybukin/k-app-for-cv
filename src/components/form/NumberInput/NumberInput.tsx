import { Form, InputNumber, InputNumberProps } from 'antd'
import { IFormField } from 'types/form'
import React, { memo } from 'react'

export interface IInputNumberProps extends IFormField, Omit<InputNumberProps<number>, 'children'> {}

const NumberInput: React.FC<IInputNumberProps> = (props) => {
  const { wrapperClassName, label, helpTextStatus, helpText, ...inputProps } = props

  return (
    <Form.Item className={wrapperClassName} label={label} validateStatus={helpTextStatus} help={helpText}>
      <InputNumber {...inputProps} />
    </Form.Item>
  )
}

export default memo(NumberInput)
