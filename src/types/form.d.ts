import { ReactNode } from 'react'
import { Control } from 'react-hook-form'
import { ObjectShape } from 'yup/lib/object'
import { ValidateStatus } from 'antd/es/form/FormItem'

type TObjectShapeValues = ObjectShape extends Record<string, infer V> ? V : never

export type TShape<T extends Record<any, any>> = Partial<Record<keyof T, TObjectShapeValues>>

export interface IFormLabel {
  label?: ReactNode
  helpText?: ReactNode
  helpTextStatus?: ValidateStatus
}

export interface IFormField extends IFormLabel {
  validateOnlyRequired?: boolean
  disableRTL?: boolean
  wrapperClassName?: string
  isSimple?: boolean
}

export interface IFieldConnectedProps<T extends IFormField> extends T {
  name: string
  control?: Control<any>
}

export interface IImageRestriction {
  type: 'size' | 'type'
  value: number | string[]
}
