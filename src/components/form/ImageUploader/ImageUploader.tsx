import React, { FC, useState } from 'react'
import { Form } from 'antd'
import { ImageUploader as ImageUploaderAntd } from 'antd-mobile'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'
import { ImageUploaderProps } from 'antd-mobile/es/components/image-uploader/image-uploader'
import { IFormField } from 'types/form'

export interface IImageUploaderProps extends IFormField, ImageUploaderProps {}

export const ImageUploader: FC<IImageUploaderProps> = (props) => {
  const { wrapperClassName, label, helpTextStatus, helpText, ...uploaderProps } = props

  const [fileList, setFileList] = useState<ImageUploadItem[]>([])

  return (
    <Form.Item className={wrapperClassName} label={label} validateStatus={helpTextStatus} help={helpText}>
      <ImageUploaderAntd {...uploaderProps} value={fileList} onChange={setFileList} />
    </Form.Item>
  )
}
