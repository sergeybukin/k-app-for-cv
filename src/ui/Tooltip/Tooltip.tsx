import React, { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import './Tooltip.scss'

export interface IButtonProps extends PropsWithChildren {
  className?: string
}

export const Tooltip: FC<IButtonProps> = ({ className, children }) => {
  return <div className={cn('Tooltip', className)}>{children}</div>
}
