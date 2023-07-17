import { IFieldConnectedProps } from 'types/form'
import React, { memo, useMemo } from 'react'
import { useController } from 'react-hook-form'
import TextInput, { ITextInputProps } from './TextInput'
import { omit } from 'lodash'

const TextInputConnected: React.FC<IFieldConnectedProps<ITextInputProps>> = (props) => {
  const { control, name, label, ...inputProps } = props

  const { field, fieldState } = useController({ name, control })

  const error = useMemo(() => {
    return fieldState?.error?.message
  }, [fieldState?.error])

  return (
    <TextInput
      {...omit(field, 'ref')}
      {...inputProps}
      label={label}
      helpText={error ? error : inputProps.helpText}
      helpTextStatus={error ? 'error' : ''}
    />
  )
}

export default memo(TextInputConnected)
