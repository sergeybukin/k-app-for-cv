import { IonButton, IonButtons } from '@ionic/react'
import { Icon } from 'ui/Icon/Icon'
import React, { FC } from 'react'
import { useHistory } from 'react-router'
import './GoBackButton.scss'

export const GoBackButton: FC = () => {
  const history = useHistory()

  const handleGoBack = () => {
    history.goBack()
  }

  return (
    <IonButtons onClick={handleGoBack} slot='start'>
      <IonButton className={'GoBackButton'}>
        <Icon classList={'GoBackButton__icon'} name={'back'} />
      </IonButton>
    </IonButtons>
  )
}
