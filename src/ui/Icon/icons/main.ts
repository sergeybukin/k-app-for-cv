import { ReactComponent as Home } from './assets/main/home.svg'
import { ReactComponent as Book } from './assets/main/book.svg'
import { ReactComponent as Geo } from './assets/main/geo.svg'
import { ReactComponent as Profile } from './assets/main/profile.svg'
import { ReactComponent as Back } from './assets/main/back.svg'
import { ReactComponent as SearchOutline } from './assets/main/search-outline.svg'
import { ReactComponent as Filter } from './assets/main/filter.svg'
import { ReactComponent as Heart } from './assets/main/heart.svg'
import { ReactComponent as Edit } from './assets/main/edit.svg'
import { ReactComponent as PlusCircle } from './assets/main/plus-circle.svg'
import { ReactComponent as Down } from './assets/main/down.svg'

export const tabs = {
  home: Home,
  book: Book,
  geo: Geo,
  heart: Heart,
}

export const commons = {
  profile: Profile,
  back: Back,
  'search-outline': SearchOutline,
  filter: Filter,
  edit: Edit,
  'plus-circle': PlusCircle,
  down: Down,
}

export type TTabsIcons = keyof typeof tabs
