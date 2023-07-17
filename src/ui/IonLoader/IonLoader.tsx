import React, { FC } from 'react'
import { IonLoading } from '@ionic/react'
import './IonLoader.scss'

export interface IProps {
  isOpen: boolean
  duration?: number
}

export const IonLoader: FC<IProps> = ({ isOpen, duration }) => {
  return (
    <IonLoading duration={duration} message={'Loading...'} className={'IonLoader'} spinner='circles' isOpen={isOpen} />
  )
}
