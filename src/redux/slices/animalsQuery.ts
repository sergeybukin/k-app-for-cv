import { collection, doc, updateDoc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'
import { firestore } from '../../firebase'
import { IAnimal, IAnimalForm, IUpdateAnimal } from 'types/animals'
import { baseFirebaseApi } from 'redux/baseApi'
import { getInvalidatesTags } from 'redux/utils/getInvalidatesTags'
import { Toast } from 'antd-mobile'

enum EAnimalsTags {
  getAnimals = 'getChannels',
}

export const animalsApi = baseFirebaseApi
  .enhanceEndpoints({ addTagTypes: Object.values(EAnimalsTags) })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAnimals: builder.query<IAnimal[], void>({
        async queryFn() {
          try {
            const ref = collection(firestore, 'animals')
            const querySnapshot = await getDocs(ref)
            const animalsData: IAnimal[] = []
            querySnapshot?.forEach((doc) => {
              animalsData.push({ id: doc.id, ...doc.data() } as IAnimal)
            })
            return { data: animalsData }
          } catch (error: any) {
            console.error(error.message)
            return { error: error.message }
          }
        },
        providesTags: [EAnimalsTags.getAnimals],
      }),
      createAnimal: builder.mutation<any, IAnimalForm>({
        async queryFn(animal) {
          try {
            await addDoc(collection(firestore, 'animals'), animal)

            Toast.show({ content: `${animal.name} have been successfully added in animals list` })

            return { data: `${animal.name} have been successfully added in animals list` }
          } catch (error: any) {
            console.error(error.message)

            Toast.show({ content: error.message })

            return { error: error.message }
          }
        },
        invalidatesTags: getInvalidatesTags([EAnimalsTags.getAnimals]),
      }),
      updateAnimal: builder.mutation<any, IUpdateAnimal>({
        async queryFn({ id, data }) {
          try {
            await updateDoc(doc(firestore, 'animals', id), data)
            console.log(data)
            return { data: `${data.name} have been successfully updated` }
          } catch (error: any) {
            console.error(error.message)
            return { error: error.message }
          }
        },
        invalidatesTags: getInvalidatesTags([EAnimalsTags.getAnimals]),
      }),
      deleteAnimal: builder.mutation<any, string>({
        async queryFn(id) {
          try {
            await deleteDoc(doc(firestore, 'animals', id))
            return { data: `The animal with ID ${id} have been removed from animals list` }
          } catch (error: any) {
            console.error(error.message)
            return { error: error.message }
          }
        },
        invalidatesTags: getInvalidatesTags([EAnimalsTags.getAnimals]),
      }),
    }),
  })

export const { useCreateAnimalMutation, useDeleteAnimalMutation, useGetAnimalsQuery, useUpdateAnimalMutation } =
  animalsApi
