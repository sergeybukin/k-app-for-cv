import { TAB_BAR_ID } from 'constants/tabs'
import { matchPath, useLocation } from 'react-router'
import { useEffect } from 'react'

interface IProps {
  pageRoute: string
}

interface IResult {
  hideTabBar: () => void
  showTabBar: () => void
}

export const useTabBarState = ({ pageRoute }: IProps): IResult => {
  const location = useLocation()

  const page = matchPath(location.pathname, {
    path: pageRoute,
    exact: false,
    strict: false,
  })

  const hideTabBar = (): void => {
    const tabBar = document.getElementById(TAB_BAR_ID)
    if (tabBar !== null) {
      tabBar.style.bottom = '-200px'
    }
  }

  const showTabBar = (): void => {
    const tabBar = document.getElementById(TAB_BAR_ID)
    if (tabBar !== null) {
      tabBar.style.bottom = '0'
    }
  }

  useEffect(() => {
    if (page) {
      hideTabBar()
    }

    if (!page) {
      showTabBar()
    }

    return () => showTabBar()
  }, [page])

  return { hideTabBar, showTabBar }
}
