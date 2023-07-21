import { ReactNode } from 'react'

import { ModalT } from '../../contexts/ModalContext/types'

export type ModalProps = {
  userModal: ReactNode
  modalData: ModalT
}
