import { ReactNode } from 'react'

export type NavigationButtonProps = {
  isDisabled: boolean
  onClick: () => void
  customButton: ReactNode
  ariaLabel: string
  defaultStyles?: string
  defaultButton: ReactNode
}
