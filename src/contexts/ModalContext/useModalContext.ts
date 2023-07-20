import {
  MouseEvent,
  ReactNode,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { isEvent } from '../../helpers'

import { ModalContextT, ModalT } from './types'
import { initialModalData } from './constants'

export const useModalContext = () => {
  const [modalData, setModalData] = useState<ModalT>(initialModalData)
  const [userModal, setUserModal] = useState<ReactNode>()
  const prevModalData = useDeferredValue(modalData)

  const onOpen = useCallback(
    (event: MouseEvent<HTMLDivElement, MouseEvent>, modal: ReactNode): void => {
      const calendarElement = document.querySelector('.calendar')

      if (!modalData.isOpen || isEvent(event)) {
        setModalData({
          x: event.clientX,
          y: event.clientY,
          containerW: calendarElement?.clientWidth || 0,
          isOpen: true,
        })

        setUserModal(modal)
      }
    },
    [modalData.isOpen],
  ) as ModalContextT['onOpen']

  const onClose = (): void => {
    setModalData(initialModalData)
  }

  const onClickOutside = useCallback((): void => {
    if (prevModalData.isOpen) onClose()
  }, [prevModalData.isOpen])

  const contextValues: ModalContextT = useMemo(
    () => ({
      ...modalData,
      userModal,
      onOpen,
      onClose,
    }),
    [userModal, modalData, onOpen],
  )

  useEffect(() => {
    document.addEventListener('click', onClickOutside)

    return () => {
      document.removeEventListener('click', onClickOutside)
    }
  }, [onClickOutside])

  return { contextValues }
}
