import { SelectProps } from 'antd'
import { IFieldConnectedProps } from 'types/form'
import React, { useCallback, useMemo } from 'react'
import { useController } from 'react-hook-form'
import Select, { ISelectProps } from 'components/form/Select/Select/Select'
import { omit } from 'lodash'

export const SelectConnected: React.FC<IFieldConnectedProps<ISelectProps>> = (props) => {
  const { control, name, label, validateOnlyRequired, ...inputProps } = props

  const { field, fieldState } = useController({ name, control })

  const error = useMemo(() => {
    return fieldState?.error?.message
  }, [fieldState?.error])

  const handleChange = useCallback<NonNullable<SelectProps['onChange']>>(
    (...args) => {
      const [value] = args

      inputProps.onChange?.(...args)
      field.onChange(value)
    },
    [field, inputProps],
  )

  const helpText = useMemo(() => {
    if (validateOnlyRequired) {
      return !error && inputProps.helpText
    }

    return error ? error : inputProps.helpText
  }, [validateOnlyRequired, error, inputProps.helpText])

  return (
    <Select
      {...omit(field, 'ref')}
      {...inputProps}
      label={label}
      helpText={helpText}
      helpTextStatus={error ? 'error' : ''}
      onChange={handleChange}
    />
  )
}
