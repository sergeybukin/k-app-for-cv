import React, { FC, memo } from 'react'
import TextInputConnected from 'components/form/TextInput/TextInputConnected'
import { SelectConnected } from 'components/form/Select/Select/SelectConnected'
import { useTranslation } from 'react-i18next'
import { Divider, Space } from 'antd-mobile'
import { MultiField } from 'components/Animals/AnimalForm/MultiField/MultiField'
import { mapSelectOptions } from 'utils/mappers'
import {
  ANIMAL_ANIMATION_RESTRICTION,
  ANIMAL_AVATAR_RESTRICTION,
  ANIMAL_GROUPS,
  ANIMAL_GROUPS_LABELS,
  ANIMAL_HEIGHT_UNITS,
  ANIMAL_HEIGHT_UNITS_LABELS,
  ANIMAL_STATUSES,
  ANIMAL_STATUSES_LABELS,
  ANIMAL_WEIGHT_UNITS,
  ANIMAL_WEIGHT_UNITS_LABELS,
} from 'constants/animals'
import { AnimalFactsForm } from 'components/Animals/AnimalForm/AnimalFactsForm/AnimalFactsForm'
import ImageUploaderConnected from 'components/form/ImageUploader/ImageUploaderConnected'
import { FIREBASE_ANIMATIONS_PATH, FIREBASE_AVATARS_PATH } from 'constants/resources'
import { KRUGER_REGIONS, KRUGER_REGIONS_LABELS } from 'constants/locations'
import './AnimalForm.scss'

interface IProps {}

const AnimalForm: FC<IProps> = () => {
  const { t } = useTranslation()

  return (
    <div className={'AnimalForm'}>
      <div className={'AnimalForm__block'}>
        <TextInputConnected className={'AnimalForm__input'} placeholder={t('animalFromName') as string} name={'name'} />
        <Divider className={'AnimalForm__inputs-divider'} />
        <TextInputConnected
          className={'AnimalForm__input'}
          placeholder={t('animalFormSpecies') as string}
          name={'species'}
        />
      </div>
      <div className={'AnimalForm__block'}>
        <MultiField
          label={t('animalFormWeight')}
          inputName={'weight.value'}
          selectName={'weight.units'}
          selectOptions={mapSelectOptions(ANIMAL_WEIGHT_UNITS, ANIMAL_WEIGHT_UNITS_LABELS)}
        />
        <Divider className={'AnimalForm__inputs-divider'} />
        <MultiField
          label={t('animalFormHeight')}
          inputName={'height.value'}
          selectName={'height.units'}
          selectOptions={mapSelectOptions(ANIMAL_HEIGHT_UNITS, ANIMAL_HEIGHT_UNITS_LABELS)}
        />
        <Divider className={'AnimalForm__inputs-divider'} />
        <MultiField label={t('animalFormPopulation')} inputName={'population'} />
      </div>

      <div className={'AnimalForm__block'}>
        <TextInputConnected
          className={'AnimalForm__input'}
          placeholder={t('animalFormEasySummary') as string}
          name={'easySummary'}
        />
        <Divider className={'AnimalForm__inputs-divider'} />
        <TextInputConnected
          className={'AnimalForm__input AnimalForm__input--textarea'}
          placeholder={t('animalFormFullDescription') as string}
          name={'fullDescription'}
          type={'textarea'}
        />
      </div>

      <div className={'AnimalForm__block'}>
        <SelectConnected
          allowClear
          options={mapSelectOptions(ANIMAL_GROUPS, ANIMAL_GROUPS_LABELS)}
          mode={'multiple'}
          placeholder={t('animalFormGroups')}
          name={'groups'}
        />
        <Divider className={'AnimalForm__inputs-divider'} />
        <SelectConnected
          options={mapSelectOptions(KRUGER_REGIONS, KRUGER_REGIONS_LABELS)}
          allowClear
          mode={'multiple'}
          placeholder={t('animalFormRegions')}
          name={'regions'}
        />
        <Divider className={'AnimalForm__inputs-divider'} />
        <TextInputConnected
          className={'AnimalForm__input AnimalForm__input--textarea'}
          placeholder={t('animalFormHabitat') as string}
          name={'habitat'}
          type={'textarea'}
        />
        <Divider className={'AnimalForm__inputs-divider'} />
        <SelectConnected
          className={'AnimalForm__status-select'}
          options={mapSelectOptions(ANIMAL_STATUSES, ANIMAL_STATUSES_LABELS)}
          allowClear
          placeholder={t('animalFormStatus')}
          name={'status'}
        />
      </div>
      <Space className={'AnimalForm__label text easy-gray'}>
        <span>{t('animalFormInterestingFacts')}</span>
        <span>{t('animalFormInterestingFactsHelper')}</span>
      </Space>
      <div className={'AnimalForm__block'}>
        <TextInputConnected
          className={'AnimalForm__input AnimalForm__input--textarea'}
          placeholder={t('animalFormInterestingFactsLabel') as string}
          name={'interestingFacts'}
          type={'textarea'}
        />
      </div>
      <AnimalFactsForm />
      <div className={'AnimalForm__media'}>
        <div className={'title extra-small'}>{t('animalFormAvatarTitle')}</div>
        <ImageUploaderConnected
          restrictions={ANIMAL_AVATAR_RESTRICTION}
          imagePosition={'left'}
          requirementsText={t('avatarImageRequirements')}
          name={'img'}
          firebasePath={FIREBASE_AVATARS_PATH}
          maxCount={1}
        />
        <div className={'title extra-small align-right'}>{t('animalFormAnimationTitle')}</div>
        <ImageUploaderConnected
          restrictions={ANIMAL_ANIMATION_RESTRICTION}
          imagePosition={'right'}
          name={'animation'}
          firebasePath={FIREBASE_ANIMATIONS_PATH}
          maxCount={1}
          requirementsText={t('animationImageRequirements')}
        />
      </div>
    </div>
  )
}

export default memo(AnimalForm)
