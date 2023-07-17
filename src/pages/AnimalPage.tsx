import React, { FC, useEffect, useMemo, useState } from 'react'
import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { IAnimal } from 'types/animals'
import back from 'ui/Icon/icons/assets/main/back.svg'
import { useTabBarState } from 'hooks/useTabBarState'
import { useHistory } from 'react-router'
import { getRoute } from 'utils/helpers'
import { ANIMAL_PAGE, TAB_ANIMALS } from 'constants/routes'
import { Icon } from 'ui/Icon/Icon'
import { Image } from 'antd-mobile'
import { AnimalSwiper } from 'components/Animals/AnimalSwiper/AnimalSwiper'
import { IAnimalSlideProps } from 'components/Animals/AnimalSwiper/AnimalSwiperSlide'
import AnimalGeneralInfoSlideContent from 'components/Animals/AnimalSlides/AnimalGeneralInfoSlide/AnimalGeneralInfoSlideContent'
import AnimalGeneralInfoSlideFooter from 'components/Animals/AnimalSlides/AnimalGeneralInfoSlide/AnimalGeneralInfoSlideFooter'
import AnimalHabitatSlideFooter from 'components/Animals/AnimalSlides/AnimalHabitatSlide/AnimalHabitatSlideFooter'
import AnimalHabitatSlideContent from 'components/Animals/AnimalSlides/AnimalHabitatSlide/AnimalHabitatSlideContent'
import SlideHeader from 'components/Animals/AnimalSlides/shared/SlideHeader/SlideHeader'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import './AnimalPage.scss'
import AnimalInterestingFactsSlideContent from 'components/Animals/AnimalSlides/AnimalInterestingFactsSlide/AnimalInterestingFactsSlideContent'
import AnimalInterestingFactsSlideFooter from 'components/Animals/AnimalSlides/AnimalInterestingFactsSlide/AnimalInterestingFactsSlideFooter'

interface IProps {
  animal: IAnimal
}

const toolbarStyles = {
  position: 'absolute',
  zIndex: 10,
  '--background': 'transparent',
}

const AnimalPage: FC<IProps> = ({ animal }) => {
  const [isClose, setIsClose] = useState(false)
  const [isFinallyClose, setIsFinallyClose] = useState(false)

  const history = useHistory()
  const { t } = useTranslation()

  useTabBarState({ pageRoute: getRoute(ANIMAL_PAGE, { id: animal.id }) })

  useEffect(() => {
    if (!isClose) {
      return
    }

    const timeout = setTimeout(() => setIsFinallyClose(true), 400)

    return () => clearTimeout(timeout)
  }, [isClose])

  const handleBackClick = () => {
    setIsClose(true)
    history.push(getRoute(TAB_ANIMALS))
  }

  const handleLikeClick = async () => {
    console.log(1)
  }

  const animalSlides: IAnimalSlideProps[] = useMemo(() => {
    return [
      {
        key: 'title',
        className: 'AnimalPage__slide-title',
        header: <div className={'AnimalPage__subtitle'}>{animal.species}</div>,
        content: <div className={'AnimalPage__title'}>{animal.name}</div>,
      },
      {
        key: 'general',
        header: <SlideHeader title={t('animalSummary')} />,
        content: <AnimalGeneralInfoSlideContent animal={animal} />,
        footer: <AnimalGeneralInfoSlideFooter animal={animal} />,
      },
      {
        key: 'habitat',
        header: <SlideHeader title={t('animalHabitat')} />,
        content: <AnimalHabitatSlideContent animal={animal} />,
        footer: <AnimalHabitatSlideFooter animal={animal} />,
      },
      {
        key: 'interesting-facts',
        header: <SlideHeader title={t('animalInterestingFacts')} />,
        content: <AnimalInterestingFactsSlideContent animal={animal} />,
        footer: <AnimalInterestingFactsSlideFooter animal={animal} />,
      },
    ]
  }, [animal, t])

  return (
    <>
      <IonHeader className={'AnimalPage__header'}>
        <IonToolbar style={toolbarStyles}>
          <IonButtons onClick={handleBackClick} slot='start'>
            <IonBackButton className={'AnimalPage__go-back'} icon={back} text={''} />
          </IonButtons>
          <IonTitle className={'title small'}>{animal.name}</IonTitle>
          <IonButtons slot='end'>
            <Icon classList={'AnimalPage__like-btn'} onClick={handleLikeClick} name={'heart'} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {isFinallyClose ? null : (
        <div className={cn('AnimalPage__content', { 'AnimalPage__content--close': isClose })}>
          <div className={'AnimalPage__main'}>
            <Image lazy fit={'cover'} className={'AnimalPage__gif'} src={animal.animation} />
          </div>
          <AnimalSwiper slides={animalSlides} />
        </div>
      )}
    </>
  )
}

export default AnimalPage
