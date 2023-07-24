import { CommonStylesT, ReactChildrenT } from '../../types'

export type IconButtonProps = ReactChildrenT &
  CommonStylesT & {
    outlined?: boolean
    isDisabled?: boolean
    ariaLabel?: string
    onClick?: () => void
    resetDefaultStyles?: boolean
  }
