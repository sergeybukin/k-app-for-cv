import React, { FC, memo } from 'react'
import CSS from 'csstype'
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
import { IonSegmentCustomEvent } from '@ionic/core/dist/types/components'
import { SegmentChangeEventDetail } from '@ionic/core'
import './Segment.scss'

export interface SegmentItem {
  label: string
  value: string
}

export type SegmentsList = SegmentItem[]

export interface SegmentProps {
  segments: SegmentsList
  onChange: (value: string) => void
  styles?: CSS.Properties

  classList?: string
  defaultValue?: string
}

export const Segment: FC<SegmentProps> = memo(({ segments, onChange, classList = '', styles = {}, defaultValue }) => {
  const onSegmentChange = (e: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
    onChange(e.detail.value as string)
  }

  return (
    <IonSegment className={classList} style={styles} onIonChange={onSegmentChange} value={defaultValue}>
      {segments.map((segment) => (
        <IonSegmentButton key={segment.value} value={segment.value}>
          <IonLabel className={'text'}>{segment.label}</IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  )
})
