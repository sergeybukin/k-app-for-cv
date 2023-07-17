import { useEffect, useState } from 'react'
import { Keyboard } from '@capacitor/keyboard'

export const useVirtualKeyboardDetection = (): boolean => {
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false)

  useEffect(() => {
    void Keyboard.addListener('keyboardWillShow', (info) => {
      setIsKeyboardOpened(true)
      console.log('keyboard will show with height:', info.keyboardHeight)
    })

    void Keyboard.addListener('keyboardWillHide', () => {
      setIsKeyboardOpened(false)
      console.log('keyboard will hide')
    })
  }, [])

  return isKeyboardOpened
}
