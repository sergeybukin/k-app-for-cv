import React, { FC, useMemo } from 'react'
import { IonText } from '@ionic/react'
import { Icon } from 'ui/Icon/Icon'
import { EKrugerParts, KRUGER_PARTS_COORDINATES } from 'constants/locations'
import { useGetCurrentWeatherQuery, useGetForecastWeatherQuery } from 'redux/query/weatherApi'
import { find, round } from 'lodash'
import { IconNamesType } from 'ui/Icon/types'
import { ECloudiness, EPrecipitation } from 'constants/weather'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import './WeatherSummary.scss'

const location = KRUGER_PARTS_COORDINATES[EKrugerParts.CENTRAL]

export const WeatherSummary: FC = () => {
  const { t } = useTranslation()

  const { data: currentWeather } = useGetCurrentWeatherQuery({ ...location })
  const { data: forecast } = useGetForecastWeatherQuery({ ...location, days: 1 })

  const isPrecipitationToday = useMemo(() => {
    if (currentWeather && currentWeather.description.length > 15) {
      return null
    }

    if (currentWeather?.precipitation.type !== EPrecipitation.NO_PRECIPITATION) {
      const hour = find(forecast, (hour) => hour.precipitation.type === EPrecipitation.NO_PRECIPITATION)

      return hour
        ? `${t('weatherSummaryRainUntil')} ${moment(hour.date.local).format('hh:mm')}`
        : `${t('weatherSummaryRainWholeDay')}}`
    }

    if (!forecast) {
      return t('weatherSummaryNoRain')
    }

    const hour = find(forecast, (hour) => hour.precipitation.type !== EPrecipitation.NO_PRECIPITATION)
    return hour ? `${t('weatherSummaryRainAt')} ${moment(hour.date.local).format('hh:mm')}` : t('weatherSummaryNoRain')
  }, [forecast, currentWeather, t])

  const weatherIcon: IconNamesType = useMemo(() => {
    if (!currentWeather) {
      return 'sun'
    }

    if (currentWeather.precipitation.type !== EPrecipitation.NO_PRECIPITATION) {
      return 'rain'
    }

    switch (currentWeather.cloudiness.type) {
      case ECloudiness.CLEAR:
        return 'sun'
      case ECloudiness.MAINLY_CLOUDY:
        return 'cloud'
      case ECloudiness.CLOUDY:
        return 'cloud'
      case ECloudiness.PARTLY_CLOUDY:
        return 'sunCloud'
      case ECloudiness.SLIGHTLY_CLOUDY:
        return 'sunCloud'

      default:
        return 'sun'
    }
  }, [currentWeather])

  return (
    <div className={'WeatherSummary small-card'}>
      {currentWeather ? (
        <>
          <div className={'block column'}>
            <div className={'block row'}>
              <IonText className={'title large primary'}>{round(currentWeather.temperature)}ºC</IonText>
              <Icon classList={'WeatherSummary__icon'} name={weatherIcon} />
            </div>
            <IonText className={'text'}>{currentWeather.description}</IonText>
          </div>
          {isPrecipitationToday ? <IonText className={'text medium bold'}>{isPrecipitationToday}</IonText> : null}
        </>
      ) : null}
    </div>
  )
}
