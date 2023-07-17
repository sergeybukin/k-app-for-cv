import axios from 'axios'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosError } from 'axios'
import { IBaseQuery } from 'types/api'
import { BASE_API_URL } from 'config'
import { getErrorMessage } from 'utils/api'

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status

    switch (status) {
      case 401:
        break
    }

    throw error
  },
)

const baseQuery = (): BaseQueryFn<IBaseQuery, unknown, unknown> => {
  return async ({ endpoint, method, data, params }) => {
    try {
      const result = await api({
        url: endpoint,
        method,
        data,
        params,
      })

      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      const errorText = getErrorMessage(err.response?.data)

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || errorText,
        },
      }
    }
  }
}

export default baseQuery
