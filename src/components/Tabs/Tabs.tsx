import React, { useState } from 'react'
import { IonNav, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import { ETabs, TAB_BAR_ID, TABS, TABS_ICONS, TABS_ROUTES } from 'constants/tabs'
import { PROFILE_PAGE, TAB_ANIMALS, TAB_HOME, TAB_MAP } from 'constants/routes'
import { Icon } from 'ui/Icon/Icon'
import cn from 'classnames'
import ProfilePage from 'pages/ProfilePage'
import HomePage from 'pages/HomePage'
import MapPage from 'pages/MapPage'
import AnimalsPage from 'pages/AnimalsPage'
import { IonReactRouter } from '@ionic/react-router'
import './Tabs.scss'

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(ETabs.HOME)

  const handleTabChange = (data: CustomEvent<{ tab: string }>) => {
    setSelectedTab(data.detail.tab as ETabs)
  }

  return (
    <IonReactRouter>
      <IonTabs className={'Tabs tabs-background-positive'}>
        <IonRouterOutlet>
          <Route exact path='/' render={() => <Redirect to={TAB_HOME} />} />
          <Route exact path={TAB_HOME} component={HomePage} />
          <Route path={PROFILE_PAGE} component={ProfilePage} />
          <Route path={TAB_MAP} component={MapPage} />
          <Route path={TAB_ANIMALS}>
            <IonNav root={() => <AnimalsPage />} />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className={'TabBar'} onIonTabsDidChange={handleTabChange} slot='bottom' id={TAB_BAR_ID}>
          {TABS.map((tab) => (
            <IonTabButton className={cn('Tab', tab.toLocaleLowerCase())} key={tab} tab={tab} href={TABS_ROUTES[tab]}>
              <Icon name={TABS_ICONS[tab]} />
            </IonTabButton>
          ))}
          <IonTabButton disabled className={cn('selected-tab-background', selectedTab.toLocaleLowerCase())} />
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}
