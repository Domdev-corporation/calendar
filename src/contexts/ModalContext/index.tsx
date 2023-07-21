import { createContext } from 'react'

import { ReactChildrenT } from '../../types'
import Modal from '../../components/Modal'

import { useModalContext } from './useModalContext'
import { ModalContextT } from './types'

export const ModalContext = createContext<ModalContextT | null>(null)

export const ModalProvider = ({ children }: ReactChildrenT): JSX.Element => {
  const { contextValues, modalData, userModal } = useModalContext()

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
      <Modal modalData={modalData} userModal={userModal} />
    </ModalContext.Provider>
  )
}
