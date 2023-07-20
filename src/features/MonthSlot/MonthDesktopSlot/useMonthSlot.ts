import { useEffect, useRef, useState } from 'react'

import { useModals } from '../../../contexts/ModalContext/useModals'

export const useMonthSlot = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const { onOpen, onClose } = useModals()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modalRef])

  const onEventClickHandler = (
    isCollapsedSlot: boolean,
    callback: () => void,
  ): void => {
    if (isCollapsedSlot) setModalOpen(true)

    if (!isCollapsedSlot) callback()
  }

  return {
    modalOpen,
    closeModalHandler: setModalOpen,
    onEventClickHandler,
    modalRef,
    onOpen,
    onClose,
  }
}
