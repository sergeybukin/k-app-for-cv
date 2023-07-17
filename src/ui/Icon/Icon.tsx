import React, { FC } from 'react'
import { icons } from './icons'
import { IconProps } from './types'
import cn from 'classnames'
import './Icon.scss'

export const Icon: FC<IconProps> = ({ name, style, classList, onClick }) => {
  const IconComponent = icons[name]

  return (
    <div onClick={onClick} className={cn('Icon', classList)} style={style}>
      <IconComponent />
    </div>
  )
}
