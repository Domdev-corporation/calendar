import { CommonStylesT, ReactChildrenT } from 'src/types'

export type ButtonProps = ReactChildrenT &
  CommonStylesT & {
    rippleColor?: string
    onClick?: () => void
  }

export type RippleT = {
  x: number
  y: number
  size: number
}
