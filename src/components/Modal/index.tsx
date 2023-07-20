import ReactDOM from 'react-dom'
import { ReactPortal } from 'react'

import { useModal } from './useModal'

const Modal = (): ReactPortal | null => {
  const { getIndentLeft, isOpen, indentTop, ref, modalWidth, userModal } =
    useModal()

  return isOpen
    ? ReactDOM.createPortal(
        <div
          ref={ref}
          className="modal"
          onClick={e => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: indentTop,
            left: getIndentLeft(),
            zIndex: 10,
            display: isOpen ? 'block' : 'none',
            opacity: modalWidth ? 1 : 0,
          }}
        >
          {userModal}
        </div>,
        document.querySelector('.calendar') as HTMLElement,
      )
    : null
}

export default Modal
