import { FunctionComponent } from 'react'

import {
  EventComponentProps,
  ModalsT,
  UserEvents,
  WeekCellType,
  WeekRowsType,
} from '../../types'

export type WeekSlotsProps = UserEvents<WeekCellType> &
  ModalsT<WeekCellType> & {
    startDate: Date
    eventsByDay: WeekCellType[][]
    renderRows: WeekRowsType[]
    selectedEvent?: string
    renderEventComponent?: FunctionComponent<EventComponentProps>
    endHour: number
    startHour: number
  }
