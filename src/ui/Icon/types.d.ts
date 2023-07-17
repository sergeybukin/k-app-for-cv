import { icons } from 'ui/Icon/icons'
import { SyntheticEvent } from 'react'

export type IconsType = typeof icons
export type IconNamesType = keyof IconsType

export interface IconProps {
  classList?: string
  onClick?: (e: SyntheticEvent) => void
  name: IconNamesType
  style?: CSS.Properties
}
