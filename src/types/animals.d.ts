import { EAnimalGroups, EAnimalStatus } from 'constants/animals'
import { EKrugerParts, EKrugerRegions } from 'constants/locations'

interface IAnimalFact {
  id?: string
  title: string
  description: string
}

export interface IMultiField {
  value: number | null
  units: string
}

export interface IAnimal {
  id: string
  name: string
  species: string
  easySummary: string
  fullDescription: string
  interestingFacts: string
  additionalFacts: IAnimalFact[]
  weight: IMultiField
  height: IMultiField
  population: number | null
  habitat: string
  regions: EKrugerRegions[]
  img: string
  animation: string
  groups: EAnimalGroups[]
  status: EAnimalStatus
}

export interface IAnimalForm extends Omit<IAnimal, 'id'> {}

export interface IUpdateAnimal {
  id: string
  data: IAnimal
}
