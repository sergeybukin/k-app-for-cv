import { IFieldConnectedProps } from 'types/form'
import React, { useCallback, useMemo } from 'react'
import { useController } from 'react-hook-form'
import SimpleSelect, { ISelectProps } from 'components/form/Select/SimpleSelect/SimpleSelect'

export const SimpleSelectConnected: React.FC<IFieldConnectedProps<ISelectProps>> = (props) => {
  const { control, name, label, ...inputProps } = props

  const { field, fieldState } = useController({ name, control })

  const error = useMemo(() => {
    return fieldState?.error?.message
  }, [fieldState?.error])

  const handleChange = useCallback<NonNullable<ISelectProps['onChange']>>(
    (...args) => {
      const [value] = args

      inputProps.onChange?.(...args)
      field.onChange(value)
    },
    [field, inputProps],
  )

  return (
    <SimpleSelect
      {...field}
      {...inputProps}
      label={label}
      helpText={error ? error : inputProps.helpText}
      helpTextStatus={error ? 'error' : ''}
      onChange={handleChange}
    />
  )
}
