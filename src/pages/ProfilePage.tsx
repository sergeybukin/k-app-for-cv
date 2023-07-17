import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { GoBackButton } from 'components/buttons/GoBackButton/GoBackButton'
import './HomePage.scss'

const ProfilePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <IonHeader>
        <IonToolbar className={'toolbar'}>
          <IonTitle className={'title small'}>{t('pageTitlesProfile')}</IonTitle>
          <GoBackButton />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'></IonHeader>
      </IonContent>
    </>
  )
}

export default ProfilePage
