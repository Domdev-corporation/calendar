import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'

import { useModals } from '../../../contexts/ModalContext/useModals'
import { DateFormat } from '../../../constants'

import { MonthDesktopSlotProps } from './types'
import { setCurrentTimeToDate } from './helpers'

export const useMonthSlot = ({
  onCellClick,
  newEventModal,
}: Pick<MonthDesktopSlotProps, 'onCellClick' | 'newEventModal'>) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const { onOpen, onClose } = useModals()

  const onEventClickHandler = (
    isCollapsedSlot: boolean,
    callback: () => void,
  ): void => {
    if (isCollapsedSlot) setModalOpen(true)

    if (!isCollapsedSlot) callback()
  }

  const handleCellClick = (
    event: React.MouseEvent<HTMLDivElement>,
    date: Date,
  ) => {
    const eventData = {
      time: format(new Date(), DateFormat.TIME_STAMP),
      day: setCurrentTimeToDate(date),
    }
    onCellClick(eventData)

    if (newEventModal) onOpen(event, newEventModal({ ...eventData, onClose }))
  }

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

  return {
    modalOpen,
    closeModalHandler: setModalOpen,
    onEventClickHandler,
    modalRef,
    onOpen,
    onClose,
    handleCellClick,
  }
}
