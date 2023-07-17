import { IFieldConnectedProps } from 'types/form'
import React, { memo, useMemo } from 'react'
import { useController } from 'react-hook-form'
import NumberInput, { IInputNumberProps } from './NumberInput'
import { omit } from 'lodash'

const NumberInputConnected: React.FC<IFieldConnectedProps<IInputNumberProps>> = (props) => {
  const { control, name, label, validateOnlyRequired, ...inputProps } = props

  const { field, fieldState } = useController({ name, control })

  const error = useMemo(() => {
    return fieldState?.error?.message
  }, [fieldState?.error])

  const helpText = useMemo(() => {
    if (validateOnlyRequired) {
      return !error && inputProps.helpText
    }

    return error ? error : inputProps.helpText
  }, [validateOnlyRequired, error, inputProps.helpText])

  return (
    <NumberInput
      {...omit(field, 'ref')}
      {...inputProps}
      label={label}
      helpText={helpText}
      helpTextStatus={error ? 'error' : ''}
    />
  )
}

export default memo(NumberInputConnected)
