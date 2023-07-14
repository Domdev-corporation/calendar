import { FunctionComponent } from 'react'

import {
  DayCellType,
  DayRowsType,
  EventComponentProps,
  ModalsT,
  UserEvents,
} from '../../types'

export type DaySlotsProps = UserEvents<DayCellType> &
  ModalsT<DayCellType> & {
    day: Date
    eventsByDay: DayCellType[]
    renderRows: DayRowsType[]
    selectedEvent?: string
    renderEventComponent?: FunctionComponent<EventComponentProps>
    endHour: number
    startHour: number
  }
