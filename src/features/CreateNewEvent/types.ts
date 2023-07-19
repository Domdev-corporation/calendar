import { ReactNode } from 'react'

import { NewEventModalT } from '../../types'

export type CreateNewEventProps = {
  newEventModal?: (a: NewEventModalT) => ReactNode
}
