export interface ICoordinates {
  longitude: number
  latitude: number
}

export interface ILocation {
  id: string
  name: string
  coordinates: ICoordinates
}

export interface ILocationPolygon {
  id: string
  name: string
}
