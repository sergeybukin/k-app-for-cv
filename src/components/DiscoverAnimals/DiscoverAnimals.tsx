import React, { FC } from 'react'
import { IonText } from '@ionic/react'
import elephant from 'assets/png/elephant.png'
import './DiscoverAnimals.scss'

export const DiscoverAnimals: FC = () => {
  return (
    <div className={'DiscoverAnimals small-card'}>
      <IonText className={'text bold primary ion-text-end'}>Start discover animals</IonText>
      <img className={'DiscoverAnimals__img'} src={elephant} />
    </div>
  )
}
