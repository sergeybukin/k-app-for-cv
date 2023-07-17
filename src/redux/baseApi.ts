import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import baseQuery from '../api'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery(),
  endpoints: () => ({}),
})

export const baseFirebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
})
