import { ReactNode } from 'react'

import { NewEventModalT, OnClickCellT } from '../../types'

export type CreateNewEventProps = {
  newEventModal: (a: NewEventModalT) => ReactNode
  onClickCell: (a: OnClickCellT) => void
}
