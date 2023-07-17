import { IImageRestriction } from 'types/form'

export enum EAnimalGroups {
  MAMMAL = 'MAMMAL',
  BIRD = 'BIRD',
  AMPHIBIAN = 'AMPHIBIAN',
  REPTILE = 'REPTILE',
  UNGULATES = 'UNGULATES',
  CATS = 'CATS',
  PREDATORS = 'PREDATORS',
  MONKEY = 'MONKEY',
}

export const ANIMAL_GROUPS_LABELS: Record<EAnimalGroups, string> = {
  [EAnimalGroups.MAMMAL]: 'animalsGroupMammal',
  [EAnimalGroups.BIRD]: 'animalsGroupBird',
  [EAnimalGroups.AMPHIBIAN]: 'animalsGroupAmphibian',
  [EAnimalGroups.REPTILE]: 'animalsGroupReptile',
  [EAnimalGroups.UNGULATES]: 'animalsGroupUngulates',
  [EAnimalGroups.CATS]: 'animalsGroupCats',
  [EAnimalGroups.PREDATORS]: 'animalsGroupPredators',
  [EAnimalGroups.MONKEY]: 'animalsGroupMonkey',
}

export const ANIMAL_GROUPS: EAnimalGroups[] = Object.values(EAnimalGroups).map((key) => key as EAnimalGroups)

export enum EAnimalWeightUnits {
  KG = 'KG',
  LB = 'LB',
}

export enum EAnimalHeightUnits {
  CM = 'CM',
  IN = 'IN',
  M = 'M',
}

export const ANIMAL_WEIGHT_UNITS = Object.values(EAnimalWeightUnits).map((key) => key as EAnimalWeightUnits)

export const ANIMAL_WEIGHT_UNITS_LABELS: Record<EAnimalWeightUnits, string> = {
  [EAnimalWeightUnits.KG]: 'commonWeightKg',
  [EAnimalWeightUnits.LB]: 'commonWeightLb',
}

export const ANIMAL_HEIGHT_UNITS = Object.values(EAnimalHeightUnits).map((key) => key as EAnimalHeightUnits)

export const ANIMAL_HEIGHT_UNITS_LABELS: Record<EAnimalHeightUnits, string> = {
  [EAnimalHeightUnits.CM]: 'commonHeightCm',
  [EAnimalHeightUnits.IN]: 'commonHeightIn',
  [EAnimalHeightUnits.M]: 'commonHeightM',
}

export enum EAnimalStatus {
  EX = 'EX',
  EW = 'EW',
  CR = 'CR',
  EN = 'EN',
  VU = 'VU',
  NT = 'NT',
  CD = 'CD',
  LC = 'LC',
  DD = 'DD',
  NE = 'NE',
}

export const ANIMAL_STATUSES = Object.values(EAnimalStatus).map((key) => key as EAnimalStatus)

export const ANIMAL_STATUSES_LABELS: Record<EAnimalStatus, string> = {
  [EAnimalStatus.EX]: 'animalStatusEX',
  [EAnimalStatus.EW]: 'animalStatusEW',
  [EAnimalStatus.CR]: 'animalStatusCR',
  [EAnimalStatus.EN]: 'animalStatusEN',
  [EAnimalStatus.VU]: 'animalStatusVU',
  [EAnimalStatus.NT]: 'animalStatusNT',
  [EAnimalStatus.CD]: 'animalStatusCD',
  [EAnimalStatus.LC]: 'animalStatusLC',
  [EAnimalStatus.DD]: 'animalStatusDD',
  [EAnimalStatus.NE]: 'animalStatusNE',
}

export const ANIMAL_STATUSES_COLORS: Record<EAnimalStatus, string> = {
  [EAnimalStatus.EX]: '#1C1C1D',
  [EAnimalStatus.EW]: '#94749B',
  [EAnimalStatus.CR]: '#7A2828',
  [EAnimalStatus.EN]: '#E28835',
  [EAnimalStatus.VU]: '#FCBA00',
  [EAnimalStatus.NT]: '#B6D780',
  [EAnimalStatus.CD]: '#82AD3D',
  [EAnimalStatus.LC]: '#8CE7F2',
  [EAnimalStatus.DD]: '#A3A3A3',
  [EAnimalStatus.NE]: '#FEFEFE',
}

export const ANIMAL_AVATAR_RESTRICTION: IImageRestriction[] = [
  {
    type: 'type',
    value: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'],
  },
  {
    type: 'size',
    value: 2 * 1024 * 1024,
  },
]

export const ANIMAL_ANIMATION_RESTRICTION: IImageRestriction[] = [
  {
    type: 'type',
    value: ['image/gif', 'image/webp'],
  },
  {
    type: 'size',
    value: 4 * 1024 * 1024,
  },
]
