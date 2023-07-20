import { MouseEvent, ReactNode } from 'react'

type PositionT = {
  x: number
  y: number
  containerW: number
}

export type ModalT = PositionT & {
  isOpen: boolean
}

export type ModalContextT = ModalT & {
  onOpen: <T = MouseEvent<HTMLDivElement, MouseEvent>>(
    event: T,
    modal: ReactNode,
  ) => void
  onClose: () => void
  userModal: ReactNode
}
