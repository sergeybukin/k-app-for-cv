import { IonButton, IonButtons } from '@ionic/react'
import { Icon } from 'ui/Icon/Icon'
import React, { FC } from 'react'
import { PROFILE_PAGE } from 'constants/routes'
import './ProfileButton.scss'
import { useHistory } from 'react-router'

export const ProfileButton: FC = () => {
  const history = useHistory()

  const handleProfileClick = () => {
    history.push(PROFILE_PAGE)
  }

  return (
    <IonButtons onClick={handleProfileClick} slot='end'>
      <IonButton className={'ProfileButton'}>
        <Icon classList={'ProfileButton__icon'} name={'profile'} />
      </IonButton>
    </IonButtons>
  )
}
