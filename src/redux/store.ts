import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { baseApi, baseFirebaseApi } from 'redux/baseApi'

const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [baseFirebaseApi.reducerPath]: baseFirebaseApi.reducer,
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware, baseFirebaseApi.middleware),
})

export type TRootState = ReturnType<typeof reducer>
export type TAppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
export const useAppDispatch = () => useDispatch<TAppDispatch>()

export default store
