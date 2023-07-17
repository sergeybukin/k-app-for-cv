import React, { FC } from 'react'
import { IonNavLink, IonText } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import './HomeSummary.scss'

export const HomeSummary: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={'HomeSummary block column'}>
      <IonText className={'title small'}>{t('homePageSummary')}</IonText>
      <IonText className={'HomeSummary__info text easy-gray'}>
        Today is the best chance to find an elephant nearby water reserve.
      </IonText>
      <IonNavLink className={'text link'}>{t('homePageSummaryLink')}</IonNavLink>
    </div>
  )
}
