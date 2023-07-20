import { useContext } from 'react'

import { ModalContext } from '.'

export const useModals = () => {
  const data = useContext(ModalContext)

  if (!data) {
    throw new Error('useModals was used outside of its Provider')
  }

  return data
}
