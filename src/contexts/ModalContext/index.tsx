import { createContext } from 'react'

import { ReactChildrenT } from '../../types'
import Modal from '../../components/Modal'

import { useModalContext } from './useModalContext'
import { ModalContextT } from './types'

export const ModalContext = createContext<ModalContextT | null>(null)

export const ModalProvider = ({ children }: ReactChildrenT): JSX.Element => {
  const { contextValues } = useModalContext()

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
      <Modal />
    </ModalContext.Provider>
  )
}
