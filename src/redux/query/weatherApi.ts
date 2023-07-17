import { baseApi } from '../baseApi'
import { IGetWeather, IWeather } from 'types/weather'
import { EWeatherLang } from 'constants/weather'

export const weatherApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrentWeather: build.query<IWeather, IGetWeather>({
      query: ({ latitude, longitude, lang = EWeatherLang.EN }) => ({
        endpoint: `/current/?latitude=${latitude}&longitude=${longitude}&lang=${lang}`,
        method: 'get',
      }),
    }),
    getForecastWeather: build.query<IWeather[], IGetWeather>({
      query: ({ latitude, longitude, lang = EWeatherLang.EN, days = 2 }) => ({
        endpoint: `/forecast/?latitude=${latitude}&longitude=${longitude}&days=${days}&lang=${lang}`,
        method: 'get',
      }),
    }),
  }),
})

export const { useGetCurrentWeatherQuery, useGetForecastWeatherQuery } = weatherApi
