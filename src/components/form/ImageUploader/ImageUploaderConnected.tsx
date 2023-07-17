import { IFieldConnectedProps, IImageRestriction } from 'types/form'
import React, { memo, useCallback, useMemo, useState } from 'react'
import { useController } from 'react-hook-form'
import { includes, omit } from 'lodash'
import { IImageUploaderProps, ImageUploader } from 'components/form/ImageUploader/ImageUploader'
import { storage } from '../../../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { ProgressBar, SpinLoading } from 'antd-mobile'
import { DefaultTFuncReturn } from 'i18next'
import cn from 'classnames'
import ImageUploaderPreview from 'components/form/ImageUploader/components/ImageUploaderPreview'
import './ImageUploaderConnected.scss'

interface IProps extends IFieldConnectedProps<Omit<IImageUploaderProps, 'upload'>> {
  firebasePath: string
  imagePosition?: 'left' | 'right'
  requirementsText?: string | DefaultTFuncReturn
  restrictions?: IImageRestriction[]
}

const ImageUploaderConnected: React.FC<IProps> = (props) => {
  const { control, name, label, firebasePath, imagePosition, requirementsText, restrictions, ...inputProps } = props
  const [imageError, setImageError] = useState<any>(null)
  const [loadingProgress, setLoadingProgress] = useState(100)
  const [isDefaultImg, setIsDefaultImg] = useState(true)

  const { field, fieldState } = useController({ name, control })

  const isDefaultImgVisible = isDefaultImg && !!field.value

  const error = useMemo(() => {
    return fieldState?.error?.message || imageError?.message || imageError
  }, [fieldState?.error, imageError])

  const handleRemoveImage = useCallback(() => {
    field.onChange('')
  }, [field])

  const handleUpload = async (file: File) => {
    if (!file) {
      setImageError('Please choose a file first!')
    }

    const storageRef = ref(storage, `/${firebasePath}/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

        setLoadingProgress(percent)
      },
      (err) => setImageError(err),
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setIsDefaultImg(false)
          field.onChange(url)
        })
      },
    )

    return {
      url: URL.createObjectURL(file),
    }
  }

  const beforeUpload = (file: File) => {
    if (!restrictions) {
      return file
    }

    setImageError(null)

    for (let i = 0; i < restrictions.length; i++) {
      const restriction = restrictions[i]

      if (restriction.type === 'size' && file.size > (restriction.value as number)) {
        setImageError('File size is too big')
        return null
      }

      if (restriction.type === 'type' && !includes(restriction.value as string[], file.type)) {
        setImageError('File type is not supported')
        return null
      }
    }

    return file
  }

  return (
    <div className={cn('ImageUploaderConnected', imagePosition)}>
      <div className={'ImageUploaderConnected__requirements text easy-gray'}>{requirementsText}</div>
      <div className={'ImageUploaderConnected__image'}>
        {loadingProgress < 100 ? <div className={'ImageUploaderConnected__backdrop'} /> : null}
        {loadingProgress < 100 ? <SpinLoading className={'ImageUploaderConnected__loader'} /> : null}
        <ImageUploader
          {...omit(field, 'ref')}
          {...inputProps}
          className={cn('ImageUploaderConnected__uploader', inputProps.className)}
          upload={handleUpload}
          beforeUpload={beforeUpload}
          label={label}
          helpText={error ? error : inputProps.helpText}
          helpTextStatus={error ? 'error' : ''}
        >
          {isDefaultImgVisible ? <ImageUploaderPreview onRemove={handleRemoveImage} imageUrl={field.value} /> : null}
        </ImageUploader>
        {loadingProgress < 100 ? (
          <ProgressBar className={'ImageUploaderConnected__progress'} percent={loadingProgress} />
        ) : null}
      </div>
    </div>
  )
}

export default memo(ImageUploaderConnected)
