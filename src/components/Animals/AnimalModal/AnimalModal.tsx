import React, { FC, memo, useCallback } from 'react'
import { Popup } from 'antd-mobile'
import AnimalForm from 'components/Animals/AnimalForm/AnimalForm'
import { IonButtons, IonTitle, IonToolbar } from '@ionic/react'
import { Button } from 'ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { IAnimalForm } from 'types/animals'
import { yupResolver } from '@hookform/resolvers/yup'
import { animalFormISchema } from 'formValidations'
import './AnimalModal.scss'

interface IProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (data: IAnimalForm) => void
  values?: IAnimalForm
}
export const AnimalModal: FC<IProps> = memo((props) => {
  const { isOpen, onClose, onConfirm, values } = props
  const { t } = useTranslation()

  const form = useForm<IAnimalForm>({
    resolver: yupResolver(animalFormISchema),
    defaultValues: animalFormISchema.getDefaultFromShape(),
    reValidateMode: 'onChange',
    values,
  })

  const handleSubmitAnimal = useCallback(
    (data: IAnimalForm) => {
      onConfirm(data)
      onClose()
    },
    [onConfirm, onClose],
  )

  return (
    <Popup className={'AnimalModal'} position='bottom' visible={isOpen} onMaskClick={onClose}>
      <IonToolbar>
        <IonButtons slot='start'>
          <Button className={'color primary'} color={'transparent'} onClick={onClose}>
            {t('commonCancel')}
          </Button>
        </IonButtons>
        <IonTitle className={'title small'}>{t('animalFormTitle')}</IonTitle>
        <IonButtons slot='end'>
          <Button className={'color primary'} color={'transparent'} onClick={form.handleSubmit(handleSubmitAnimal)}>
            {t('commonConfirm')}
          </Button>
        </IonButtons>
      </IonToolbar>
      <FormProvider {...form}>
        <AnimalForm />
      </FormProvider>
    </Popup>
  )
})
