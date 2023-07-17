import { Result } from 'antd-mobile'
import React, { ReactNode } from 'react'
import { getErrorMessage } from 'utils/api'
import { IonLoader } from 'ui/IonLoader/IonLoader'

interface IProps {
  error?: unknown
  loading?: boolean
  loader?: ReactNode
  children?: ReactNode
}

export const ContentWrapper: React.FC<IProps> = (props) => {
  const { error, loading, loader, children } = props

  if (loading) {
    return loader ? <>{loader}</> : <IonLoader isOpen />
  }

  if (error) {
    return (
      <Result
        style={{ backgroundColor: 'inherit' }}
        status='error'
        title={<span style={{ color: 'initial' }}>Error</span>}
        description={getErrorMessage(error)}
      />
    )
  }

  return <>{children}</>
}
