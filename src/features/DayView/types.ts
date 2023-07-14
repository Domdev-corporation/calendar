import { FunctionComponent } from 'react'

import {
  DayCellType,
  DayRowsType,
  EventComponentProps,
  ModalsT,
  UserEvents,
} from '../../types'

export type DayViewProps = UserEvents<DayCellType> &
  ModalsT<DayCellType> & {
    events: DayCellType[]
    startDate: Date
    renderRows: DayRowsType[]
    selectedEvent?: string
    renderEventComponent?: FunctionComponent<EventComponentProps>
    endHour: number
    startHour: number
  }
