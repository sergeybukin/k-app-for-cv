import React, { FC } from 'react'
import { EKrugerRegions } from 'constants/locations'
import { regionsPolygonsSvg } from './regionsPolygonsSvg'
import './RegionPolygon.scss'

interface IProps {
  region: EKrugerRegions
}

const RegionPolygon: FC<IProps> = ({ region }) => {
  const SvgComponent = regionsPolygonsSvg[region]

  return (
    <div className={'RegionPolygon'}>
      <SvgComponent />
    </div>
  )
}

export default RegionPolygon
