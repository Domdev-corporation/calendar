import { useRef } from 'react'

import { getScreenWidth } from '../../helpers'
import { ModalT } from '../../contexts/ModalContext/types'
import { MOBILE_WIDTH } from '../../constants'

export const useModal = ({ containerW, isOpen, x, y }: ModalT) => {
  const isMobile = MOBILE_WIDTH > getScreenWidth()

  const ref = useRef<HTMLDivElement | null>(null)
  const modalWidth = ref.current?.offsetWidth || 0

  const getIndentLeft = (): number | string => {
    if (isMobile) return '50%'

    if (containerW - x < modalWidth) {
      return x + modalWidth > containerW ? containerW - modalWidth : x
    }

    return x
  }

  return {
    getIndentLeft,
    isOpen,
    indentTop: y,
    ref,
    modalWidth,
    isMobile,
  }
}
