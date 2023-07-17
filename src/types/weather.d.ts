import { ECloudiness, EPrecipitation, EPrecipitationIntensity, EWeatherLang } from 'constants/weather'
import { ICoordinates } from 'types/locations'

export interface IPrecipitation {
  type: EPrecipitation
  amount: number
  intensity: EPrecipitationIntensity
}

export interface ICloudiness {
  percent: number
  type: ECloudiness
}

export interface IWind {
  direction: number
  speed: number
}

export interface IDateMapped {
  utc: string
  local: string
  timeZoneOffset: number
  unix: number
}

export interface IWeather {
  temperature: number
  description: string
  precipitation: IPrecipitation
  storm: boolean
  wind: IWind
  cloudiness: ICloudiness
  date: IDateMapped
}

export interface IGetWeather extends ICoordinates {
  lang?: EWeatherLang
  days?: number
}
