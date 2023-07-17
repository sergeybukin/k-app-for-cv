import React, { FC, SyntheticEvent, useCallback, useMemo } from 'react'
import { IAnimal } from 'types/animals'
import { List, Image, Space, SwipeAction } from 'antd-mobile'
import { Icon } from 'ui/Icon/Icon'
import AnimalPage from 'pages/AnimalPage'
import { IonNavLink } from '@ionic/react'
import { useHistory } from 'react-router'
import { getRoute } from 'utils/helpers'
import { ANIMAL_PAGE } from 'constants/routes'
import { Action } from 'antd-mobile/es/components/swipe-action'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import styles from 'variables.module.scss'
import './AnimalListItem.scss'

// TODO: change to real after auth implementation
const IS_ADMIN = true

interface IProps {
  animal: IAnimal
  onLike: (animal: IAnimal) => void
  onEdit: (animal: IAnimal) => void
  onDelete: (id: string) => void
}

export const AnimalListItem: FC<IProps> = ({ animal, onLike, onEdit, onDelete }) => {
  const { name, img, id, easySummary } = animal

  const history = useHistory()
  const { t } = useTranslation()

  const handleLikeClick = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation()
      onLike(animal)
    },
    [animal, onLike],
  )

  const handleEditAnimal = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation()
      onEdit(animal)
    },
    [onEdit, animal],
  )

  const handleDeleteAnimal = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation()
      onDelete(id)
    },
    [onDelete, id],
  )

  const handleNavClick = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation()
      history.push(getRoute(ANIMAL_PAGE, { id }))
    },
    [history, id],
  )

  const rightActions: Action[] = useMemo(() => {
    if (!IS_ADMIN) {
      return []
    }

    return [
      {
        key: 'edit',
        text: (
          <Space className={'text small bold'} direction={'vertical'}>
            <EditOutlined className={'title medium'} />
            {t('commonEdit')}
          </Space>
        ),
        color: styles.gray,
        onClick: handleEditAnimal,
      },
      {
        key: 'delete',
        text: (
          <Space className={'text bold'} direction={'vertical'}>
            <DeleteOutlined className={'title medium'} />
            {t('commonDelete')}
          </Space>
        ),
        color: styles.danger,
        onClick: handleDeleteAnimal,
      },
    ]
  }, [handleEditAnimal, handleDeleteAnimal, t])

  return (
    <div className={'AnimalListItem__wrapper'}>
      <SwipeAction className={'AnimalListItem__swiper'} rightActions={rightActions}>
        <IonNavLink
          onClick={handleNavClick}
          key={id}
          routerDirection='forward'
          component={() => <AnimalPage animal={animal} />}
        >
          <List.Item
            className={'AnimalListItem'}
            prefix={<Image className={'AnimalListItem__image'} src={img} fit='cover' />}
            description={<span className={'text easy-gray'}>{easySummary}</span>}
          >
            <Space className={'AnimalListItem__header'} justify={'between'}>
              <span className={'title small'}>{name}</span>
            </Space>
          </List.Item>
        </IonNavLink>
        <Icon classList={'AnimalListItem__like-btn'} onClick={handleLikeClick} name={'heart'} />
      </SwipeAction>
    </div>
  )
}
