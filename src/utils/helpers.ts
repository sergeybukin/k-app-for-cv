import { ISomeMatchParams } from 'types/common'
import * as pathToRegexp from 'path-to-regexp'

export const getRoute = (route: string, params: ISomeMatchParams = {}) => pathToRegexp.compile(route)(params)
