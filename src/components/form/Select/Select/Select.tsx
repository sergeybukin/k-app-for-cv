import { Form, Select as AntSelect, SelectProps } from 'antd'
import cn from 'classnames'
import { IFormField } from 'types/form'
import React, { memo, useState } from 'react'
import './Select.scss'

export interface ISelectProps extends IFormField, SelectProps {}

const Select: React.FC<ISelectProps> = (props) => {
  const { label, helpText, helpTextStatus, wrapperClassName, bordered = false, ...selectProps } = props
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Form.Item
      className={cn(wrapperClassName, 'CustomSelect')}
      label={label}
      validateStatus={helpTextStatus}
      help={helpText}
    >
      <AntSelect
        {...selectProps}
        maxTagCount={props.maxTagCount || 'responsive'}
        popupClassName={cn('CustomSelect__dropdown', props.popupClassName)}
        className={cn('CustomSelect__select', props.className)}
        bordered={bordered}
        options={props.options}
        open={isOpened}
        onDropdownVisibleChange={setIsOpened}
      />
    </Form.Item>
  )
}

export default memo(Select)
