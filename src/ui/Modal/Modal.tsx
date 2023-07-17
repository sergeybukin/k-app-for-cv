import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { IonButtons, IonContent, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import { Button } from '../Button/Button'
import './Modal.scss'

export interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  onOk?: () => void
  children?: ReactNode
  title?: string
  classList?: string
  page?: any
  [x: string]: any
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose, title, onOk, page, classList = '', ...props }) => {
  const modal = useRef<HTMLIonModalElement>(null)
  const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined)
  console.log(1212, isOpen)

  useEffect(() => {
    setPresentingElement(page?.current)
  }, [page])

  const onDismiss = () => {
    console.log(1212, 'onDismiss')
    if (onClose) {
      onClose()
    }

    if (!modal.current) {
      return
    }

    void modal.current?.dismiss()
  }

  const onConfirm = () => {
    if (onOk) {
      onOk()
    }

    if (!modal.current) {
      return
    }

    void modal.current?.dismiss()
  }

  return (
    <IonModal
      className={classList}
      ref={modal}
      isOpen={isOpen}
      // presentingElement={presentingElement}
      {...props}
    >
      <IonContent scrollY={false} className='modal-content'>
        <IonToolbar>
          <IonButtons slot='start'>
            <Button color={'light'} onClick={onDismiss}>
              Cancel
            </Button>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot='end'>
            <Button color={'light'} onClick={onConfirm}>
              Confirm
            </Button>
          </IonButtons>
        </IonToolbar>
        {children}
      </IonContent>
    </IonModal>
  )
}
