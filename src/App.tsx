import React, { useEffect } from 'react'
import { Tabs } from 'components/Tabs/Tabs'
import { IonApp, isPlatform, setupIonicReact } from '@ionic/react'
import { StatusBar, Style } from '@capacitor/status-bar'
import { BrowserRouter } from 'react-router-dom'
import '../src/assets/font/style.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'locales/index'
import './index.scss'
import './firebase'

setupIonicReact()

const App: React.FC = () => {
  useEffect(() => {
    if (isPlatform('ios')) {
      void StatusBar.setStyle({ style: Style.Dark })
    }
  }, [])

  return (
    <BrowserRouter>
      <IonApp className='App'>
        <Tabs />
      </IonApp>
    </BrowserRouter>
  )
}

export default App
