import { ReactNode } from 'react'

import { NewEventModalT, OnCellClickT } from '../../types'

export type CreateNewEventProps = {
  newEventModal: (a: NewEventModalT) => ReactNode
  onCellClick: (a: OnCellClickT) => void
}
