import { MouseEvent } from 'react'

import { ReactChildrenT } from '../../types'

export type EventContainerProps = ReactChildrenT & {
  isSelected: boolean
  overlapping?: number
  start: string
  duration?: Duration
  numberOfEvents: number
  onClick: (e: MouseEvent) => void
  gap: number
}
