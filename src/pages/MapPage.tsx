import { IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ProfileButton } from 'components/buttons/ProfileButton/ProfileButton'
import { Map } from 'components/Map/Map'
import './MapPage.scss'

const MapPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={'MapPage'}>
      <IonToolbar className={'MapPage__toolbar toolbar'}>
        <IonTitle className={'title small'}>{t('pageTitlesMap')}</IonTitle>
        <ProfileButton />
      </IonToolbar>
      <Map styles={{ position: 'absolute', top: -10 }} width={'100vw'} height={'100vh'} />
    </div>
  )
}

export default MapPage
