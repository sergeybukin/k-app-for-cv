import { ReactComponent as Kingfisherspruit } from '../../assets/png/regions/Kingfisherspruit.svg'
import { ReactComponent as Houtboschrand } from '../../assets/png/regions/Houtboschrand.svg'
import { ReactComponent as CrocodileBridge } from '../../assets/png/regions/Crocodile Bridge.svg'
import { ReactComponent as LowerSabie } from '../../assets/png/regions/Lower Sabie.svg'
import { ReactComponent as Mahlangeni } from '../../assets/png/regions/Mahlangeni.svg'
import { ReactComponent as Letaba } from '../../assets/png/regions/Letaba.svg'
import { ReactComponent as Malelane } from '../../assets/png/regions/Malelane.svg'
import { ReactComponent as Mooiplaas } from '../../assets/png/regions/Mooiplaas.svg'
import { ReactComponent as Nwanetsi } from '../../assets/png/regions/Nwanetsi.svg'
import { ReactComponent as Olifants } from '../../assets/png/regions/Olifants.svg'
import { ReactComponent as Woodlands } from '../../assets/png/regions/Woodlands.svg'
import { ReactComponent as Pafuri } from '../../assets/png/regions/Pafuri.svg'
import { ReactComponent as Phalaborwa } from '../../assets/png/regions/Phalaborwa.svg'
import { ReactComponent as Pretoriuskop } from '../../assets/png/regions/Pretoriuskop.svg'
import { ReactComponent as PundaMaria } from '../../assets/png/regions/Punda Maria.svg'
import { ReactComponent as Satara } from '../../assets/png/regions/Satara.svg'
import { ReactComponent as Vlakteplaas } from '../../assets/png/regions/Vlakteplaas.svg'
import { ReactComponent as Shangoni } from '../../assets/png/regions/Shangoni.svg'
import { ReactComponent as Shingwedzi } from '../../assets/png/regions/Shingwedzi.svg'
import { ReactComponent as Skukuza } from '../../assets/png/regions/Skukuza.svg'
import { ReactComponent as Stolsnek } from '../../assets/png/regions/Stolsnek.svg'
import { ReactComponent as Tshokwane } from '../../assets/png/regions/Tshokwane.svg'
import { EKrugerRegions } from 'constants/locations'
import { FC } from 'react'

export const regionsPolygonsSvg: Record<EKrugerRegions, FC> = {
  [EKrugerRegions.KINGFISHERSPRUIT]: Kingfisherspruit,
  [EKrugerRegions.HOUTBOSCHRAND]: Houtboschrand,
  [EKrugerRegions.CROCODILE_BRIDGE]: CrocodileBridge,
  [EKrugerRegions.LOWER_SABIE]: LowerSabie,
  [EKrugerRegions.MAHLANGENI]: Mahlangeni,
  [EKrugerRegions.LETABA]: Letaba,
  [EKrugerRegions.MALELANE]: Malelane,
  [EKrugerRegions.MOOIPLAAS]: Mooiplaas,
  [EKrugerRegions.NWANETSI]: Nwanetsi,
  [EKrugerRegions.OLIFANTS]: Olifants,
  [EKrugerRegions.WOODLANDS]: Woodlands,
  [EKrugerRegions.PAFURI]: Pafuri,
  [EKrugerRegions.PHALABORWA]: Phalaborwa,
  [EKrugerRegions.PRETORIUSKOP]: Pretoriuskop,
  [EKrugerRegions.PUNDA_MARIA]: PundaMaria,
  [EKrugerRegions.SATARA]: Satara,
  [EKrugerRegions.VLAKTEPLAAS]: Vlakteplaas,
  [EKrugerRegions.SHANGONI]: Shangoni,
  [EKrugerRegions.SHINGWEDZI]: Shingwedzi,
  [EKrugerRegions.SKUKUZA]: Skukuza,
  [EKrugerRegions.STOLSNEK]: Stolsnek,
  [EKrugerRegions.TSHOKWANE]: Tshokwane,
}
