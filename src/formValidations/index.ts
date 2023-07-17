import { SchemaOf } from 'yup'
import * as yup from 'yup'
import { IAnimalForm } from 'types/animals'
import { EAnimalGroups, EAnimalHeightUnits, EAnimalStatus, EAnimalWeightUnits } from 'constants/animals'

export const animalFormISchema: SchemaOf<IAnimalForm> = yup
  .object()
  .shape({
    name: yup.string().required().min(2).max(20).label('Name'),
    species: yup.string().required().min(2).label('Species'),
    easySummary: yup.string().required().min(2).max(30).label('Short description'),
    fullDescription: yup.string().required().min(50).max(800).label('Full description'),
    additionalFacts: yup
      .array()
      .of(
        yup.object({
          title: yup.string().min(2).max(20).label('Fact title'),
          description: yup.string().min(50).max(800).label('Fact description'),
        }),
      )
      .required(),
    img: yup.string().required().label('Image'),
    animation: yup.string().required().label('Animation'),
    weight: yup
      .object({
        value: yup.number().required().label('Weight value'),
        units: yup.mixed<EAnimalWeightUnits>().oneOf(Object.values(EAnimalWeightUnits)).required().label('Weight unit'),
      })
      .required()
      .label('Weight'),
    height: yup
      .object({
        value: yup.number().required().label('Height value'),
        units: yup.mixed<EAnimalHeightUnits>().oneOf(Object.values(EAnimalHeightUnits)).required().label('Height unit'),
      })
      .required()
      .label('Height'),
    population: yup.number().required().label('Population'),
    regions: yup.array().of(yup.string()).label('Regions'),
    habitat: yup.string().min(50).max(800).label('Habitat'),
    interestingFacts: yup.string().min(20).max(800).label('Interesting facts'),
    groups: yup.array().of(yup.string()).required().label('Groups'),
    status: yup.string().required().label('Status IUCN'),
  })
  .default({
    id: '',
    name: '',
    species: '',
    easySummary: '',
    fullDescription: '',
    habitat: '',
    interestingFacts: '',
    additionalFacts: [{ title: '', description: '' }],
    weight: {
      value: null,
      unit: EAnimalWeightUnits.KG,
    },
    height: {
      value: null,
      unit: EAnimalHeightUnits.M,
    },
    population: null,
    regions: [],
    img: '',
    animation: '',
    groups: [],
    status: null,
  })
