import React, { memo, SyntheticEvent, useCallback, useState } from 'react'
import { ImageViewer } from 'antd-mobile'
import { EyeOutline, CloseOutline } from 'antd-mobile-icons'
import './ImageUploaderPreview.scss'

interface IProps {
  imageUrl: string
  onRemove: () => void
}

const ImageUploaderPreview: React.FC<IProps> = (props) => {
  const { imageUrl, onRemove } = props
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false)

  const handleRemove = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation()
      onRemove()
    },
    [onRemove],
  )

  const handleOpenImageViewer = useCallback((e: SyntheticEvent) => {
    e.stopPropagation()
    setIsImageViewerOpen(true)
  }, [])

  const handleCloseImageViewer = useCallback(() => {
    setIsImageViewerOpen(false)
  }, [])

  return (
    <div className={'ImageUploaderPreview'}>
      <CloseOutline onClick={handleRemove} className={'ImageUploaderPreview__remove-image'} />
      <EyeOutline className={'ImageUploaderPreview__open-image'} onClick={handleOpenImageViewer} />
      <img src={imageUrl} />
      <ImageViewer image={imageUrl} visible={isImageViewerOpen} onClose={handleCloseImageViewer} />
    </div>
  )
}

export default memo(ImageUploaderPreview)
