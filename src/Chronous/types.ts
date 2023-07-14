import { FunctionComponent, ReactNode } from 'react'

import {
  CalendarEventType,
  ConfigT,
  DayCellType,
  DayRowsType,
  EventComponentProps,
  ModalsT,
  MonthCellType,
  UserEvents,
  ViewsT,
  WeekCellType,
  WeekRowsType,
} from '../types'
import { Cell } from '../features/MonthSlots/types'

export type CombinedViewRowsType = WeekRowsType[] & DayRowsType[] & Cell[]

type EventT = DayCellType | WeekCellType | MonthCellType

export type CalendarProps = Partial<UserEvents<EventT>> &
  ModalsT<EventT> & {
    mode?: ViewsT
    endHour?: number
    config?: ConfigT[]
    children?: ReactNode
    className?: string
    startHour?: number
    selectedEvent?: string
    nextButton?: ReactNode
    prevButton?: ReactNode
    currentDay?: Date | string
    events?: CalendarEventType[]
    dropDownArrow?: ReactNode
    renderEventComponent?: FunctionComponent<EventComponentProps>
    onChangeDate?: (start: Date, end: Date) => void
    onChangeMode?: (mode: ViewsT) => void
  }

export type UseCalendarProps = {
  currentDay: Date
  events: CalendarEventType[]
  config: ConfigT[]
  mode: ViewsT
  startHour: number
  endHour: number
  onChangeDate: (start: Date, end: Date) => void
  onChangeMode: (mode: ViewsT) => void
}

export type HoursColumnT = {
  time: string
}

export type RowsInfoT = {
  startTime: string
  startEvent: Date
  currentDateTime: number
  duration: Duration
  event: CalendarEventType
}

export type DateRangeT = {
  startDate: Date
  endDate: Date
}
