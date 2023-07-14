import { FunctionComponent } from 'react'

import {
  EventComponentProps,
  ModalsT,
  UserEvents,
  WeekCellType,
  WeekRowsType,
} from '../../types'

export type WeekViewProps = UserEvents<WeekCellType> &
  ModalsT<WeekCellType> & {
    events: WeekCellType[]
    startDate: Date
    selectedDate: Date
    renderRows: WeekRowsType[]
    selectDateHandler: (data: Date) => void
    selectedEvent?: string
    renderEventComponent?: FunctionComponent<EventComponentProps>
    endHour: number
    startHour: number
  }
