import React, { SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { IonContent } from '@ionic/react'
import { AnimalsHeader } from 'components/Animals/AnimalsToolbar/AnimalsHeader'
import { List } from 'antd-mobile'
import { AnimalListItem } from 'components/Animals/AnimalListItem/AnimalListItem'
import { IAnimal, IAnimalForm } from 'types/animals'
import { ScrollDetail } from '@ionic/core/dist/types/components/content/content-interface'
import { IonContentCustomEvent } from '@ionic/core/dist/types/components'
import {
  useCreateAnimalMutation,
  useDeleteAnimalMutation,
  useGetAnimalsQuery,
  useUpdateAnimalMutation,
} from 'redux/slices/animalsQuery'
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper'
import { AnimalModal } from 'components/Animals/AnimalModal/AnimalModal'
import { IonLoader } from 'ui/IonLoader/IonLoader'
import './AnimalsPage.scss'

// TODO: change to real after auth implementation
const IS_ADMIN = true

const AnimalsPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true)
  const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false)
  const [isDestroyModal, setIsDestroyModal] = useState(false)
  const [selectedAnimal, setSelectedAnimal] = useState<IAnimal>()

  const { data: animals, error, isFetching } = useGetAnimalsQuery()
  const [createSimpleAnimal, { isLoading }] = useCreateAnimalMutation()
  const [updateAnimal] = useUpdateAnimalMutation()
  const [deleteAnimal] = useDeleteAnimalMutation()

  const onSearchChange = (value: string) => setSearchValue(value)

  const handleLikeAnimalClick = (animal: IAnimal) => {
    alert('I like ' + animal.name)
  }

  const handleSaveAnimal = useCallback(
    async (data: IAnimalForm) => {
      if (selectedAnimal) {
        const newData: IAnimal = { ...selectedAnimal, ...data }
        await updateAnimal({ data: newData, id: selectedAnimal.id })

        setSelectedAnimal(undefined)
        return
      }

      await createSimpleAnimal(data)
    },
    [createSimpleAnimal, selectedAnimal, updateAnimal],
  )

  const handleEditAnimal = useCallback((animal: IAnimal) => {
    setIsDestroyModal(false)

    setTimeout(() => {
      setSelectedAnimal(animal)
      setIsAnimalModalOpen(true)
    }, 100)
  }, [])

  const handleDeleteAnimal = useCallback(
    async (id: string) => {
      await deleteAnimal(id)
    },
    [deleteAnimal],
  )

  const handleAddAnimal = useCallback(() => {
    setIsDestroyModal(false)

    setTimeout(() => {
      setSelectedAnimal(undefined)
      setIsAnimalModalOpen(true)
    }, 100)
  }, [])

  useEffect(() => {
    if (isAnimalModalOpen) {
      return
    }

    const id = setTimeout(() => setIsDestroyModal(true), 100)
    return () => clearTimeout(id)
  }, [isAnimalModalOpen])

  const handleCloseAnimalModal = () => {
    setIsAnimalModalOpen(false)
    setSelectedAnimal(undefined)
  }

  const filteredAnimals = useMemo(() => {
    if (!animals) {
      return []
    }

    return animals.filter((animal) => animal.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }, [animals, searchValue])

  const handleScroll = (e: IonContentCustomEvent<ScrollDetail>) => {
    if (e.detail.scrollTop > 20) {
      setIsSearchBarVisible(false)
      return
    }

    setIsSearchBarVisible(true)
  }

  return (
    <div className={'AnimalsPage'}>
      <IonLoader isOpen={isLoading} />
      {!isDestroyModal ? (
        <AnimalModal
          values={selectedAnimal}
          onConfirm={handleSaveAnimal}
          isOpen={isAnimalModalOpen}
          onClose={handleCloseAnimalModal}
        />
      ) : null}
      <AnimalsHeader
        isSearchBarVisible={isSearchBarVisible}
        onSearchChange={onSearchChange}
        searchValue={searchValue}
        onAddAnimal={IS_ADMIN ? handleAddAnimal : undefined}
      />
      <IonContent scrollEvents={true} onIonScroll={handleScroll} fullscreen={true}>
        <ContentWrapper error={error} loading={isFetching}>
          <List className={'AnimalsPage__list'}>
            {filteredAnimals.map((animal) => (
              <AnimalListItem
                onEdit={handleEditAnimal}
                onDelete={handleDeleteAnimal}
                onLike={handleLikeAnimalClick}
                key={animal.id}
                animal={animal}
              />
            ))}
          </List>
        </ContentWrapper>
      </IonContent>
    </div>
  )
}

export default AnimalsPage
