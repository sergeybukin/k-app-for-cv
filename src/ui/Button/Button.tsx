import React, { FC, PropsWithChildren, SyntheticEvent } from 'react'
import { IonButton } from '@ionic/react'
import cn from 'classnames'
import './Button.scss'

type TButtonColor = 'light' | 'dark' | 'transparent' | 'info'

export interface IButtonProps extends PropsWithChildren {
  onClick: (e: SyntheticEvent) => void
  className?: string
  color: TButtonColor
}

export const Button: FC<IButtonProps> = ({ onClick, className, color, children }) => {
  return (
    <IonButton onClick={onClick} className={cn('Button text', className, color)}>
      {children}
    </IonButton>
  )
}
