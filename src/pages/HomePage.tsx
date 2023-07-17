import React from 'react'
import { IonTitle, IonToolbar, IonRow, IonCol, IonHeader } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { ProfileButton } from 'components/buttons/ProfileButton/ProfileButton'
import { WeatherSummary } from 'components/WeatherSummary/WeatherSummary'
import { DiscoverAnimals } from 'components/DiscoverAnimals/DiscoverAnimals'
import { HomeSummary } from 'components/HomeSummary/HomeSummary'
import { Button } from 'ui/Button/Button'
import { IoTicketOutline } from 'react-icons/io5'
import { useGetCurrentWeatherQuery, useGetForecastWeatherQuery } from 'redux/query/weatherApi'
import { EKrugerParts, KRUGER_PARTS_COORDINATES } from 'constants/locations'
import { IonLoader } from 'ui/IonLoader/IonLoader'
import { Map } from 'components/Map/Map'
import { ViewState } from 'react-map-gl'
import { Marker } from 'components/Map/Marker/Marker'
import './HomePage.scss'

const HomePage: React.FC = () => {
  const { t } = useTranslation()
  const { longitude, latitude } = KRUGER_PARTS_COORDINATES[EKrugerParts.CENTRAL]
  const { isFetching: isFetchingCurrent } = useGetCurrentWeatherQuery({ longitude, latitude })
  const { isFetching: isFetchingForecast } = useGetForecastWeatherQuery({ longitude, latitude, days: 1 })

  const isFetching = isFetchingCurrent || isFetchingForecast

  const mapInitialViewState: Partial<ViewState> = {
    longitude,
    latitude,
    zoom: 6,
  }

  const handleBuyTicket = () => {
    alert('buy')
  }

  if (isFetching) {
    return <IonLoader isOpen={isFetching} />
  }

  return (
    <div className={'HomePage'}>
      <IonHeader>
        <IonToolbar className={'toolbar'}>
          <IonTitle className={'title small'}>{t('pageTitlesHome')}</IonTitle>
          <ProfileButton />
        </IonToolbar>
      </IonHeader>
      <div className={'HomePage__content'}>
        <IonRow className={'ion-justify-content-evenly'}>
          <IonCol size='auto'>
            <WeatherSummary />
          </IonCol>
          <IonCol size='auto'>
            <DiscoverAnimals />
          </IonCol>
        </IonRow>
        <IonRow>
          <HomeSummary />
        </IonRow>
        <IonRow>
          <Map initialViewState={mapInitialViewState} height={'35vh'} width={'90vw'}>
            <Marker longitude={longitude} latitude={latitude} />
          </Map>
        </IonRow>
        <IonRow>
          <Button className={'BuyTicketBtn'} onClick={handleBuyTicket} color={'dark'}>
            <div className={'BuyTicketBtn__icon'}>
              <IoTicketOutline />
            </div>
            <div>{t('homePageBuyTicket')}</div>
          </Button>
        </IonRow>
      </div>
    </div>
  )
}

export default HomePage
