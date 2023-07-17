import React, { FC, useCallback } from 'react'
import TextInputConnected from 'components/form/TextInput/TextInputConnected'
import { Divider, Space } from 'antd-mobile'
import { PlusOutlined, CloseCircleFilled } from '@ant-design/icons'
import { Control, useFieldArray } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import './AnimalFactsForm.scss'

interface IProps {
  control?: Control<any>
}

export const AnimalFactsForm: FC<IProps> = ({ control }) => {
  const { t } = useTranslation()

  const { fields, append, remove } = useFieldArray({ name: 'additionalFacts', control })

  const handleAddFact = useCallback(() => {
    append({ title: '', description: '' })
  }, [append])

  const handleRemoveFact = useCallback(
    (index: number) => () => {
      remove(index)
    },
    [remove],
  )

  return (
    <div className={'AnimalFactsForm'}>
      <Space style={{ width: '100%' }} justify={'between'}>
        <div className={'text easy-gray'}>{t('animalFormAdditionalFacts')}</div>
        <PlusOutlined onClick={handleAddFact} className={'text easy-gray'} />
      </Space>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className={'AnimalFactsForm__fact'}>
            <CloseCircleFilled
              onClick={handleRemoveFact(index)}
              className={'AnimalFactsForm__remove-fact text easy-gray'}
            />
            <TextInputConnected
              placeholder={t('animalFormFactTitle') as string}
              className={'AnimalForm__input'}
              name={`additionalFacts.${index}.title`}
            />
            <Divider className={'AnimalForm__inputs-divider'} />
            <TextInputConnected
              placeholder={t('animalFormFactDescription') as string}
              className={'AnimalForm__input AnimalForm__input--textarea'}
              name={`additionalFacts.${index}.description`}
              type={'textarea'}
            />
          </div>
        )
      })}
    </div>
  )
}
