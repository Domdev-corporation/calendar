import ReactDOM from 'react-dom'
import { ReactPortal } from 'react'

import { useModal } from './useModal'
import { ModalProps } from './types'

const Modal = ({ modalData, userModal }: ModalProps): ReactPortal | null => {
  const { getIndentLeft, indentTop, ref, modalWidth, isMobile } =
    useModal(modalData)

  return modalData.isOpen
    ? ReactDOM.createPortal(
        <div
          ref={ref}
          className="modal"
          onClick={e => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: indentTop,
            zIndex: 10,
            display: modalData.isOpen ? 'block' : 'none',
            opacity: modalWidth ? 1 : 0,
            left: getIndentLeft(),
            transform: isMobile ? 'translate(-50%)' : 'none',
          }}
        >
          {userModal}
        </div>,
        document.querySelector('.calendar') as HTMLElement,
      )
    : null
}

export default Modal
