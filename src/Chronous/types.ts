import { FunctionComponent, ReactNode } from 'react'

import {
  CalendarEventType,
  ConfigT,
  DayCellType,
  DayRowsType,
  EventComponentProps,
  ModalsT,
  ModesT,
  MonthCellType,
  MonthRowsT,
  UserEvents,
  ViewsT,
  WeekCellType,
  WeekRowsType,
} from '../types'

export type CombinedViewRowsType = WeekRowsType[] & DayRowsType[] & MonthRowsT[]

export type EventT = DayCellType | WeekCellType | MonthCellType

export type CalendarProps = Partial<UserEvents<EventT>> &
  ModalsT<EventT> & {
    view?: ViewsT
    mode?: ModesT
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
    onChangeView?: (view: ViewsT) => void
  }

export type UseCalendarProps = {
  currentDay: Date
  events: CalendarEventType[]
  config: ConfigT[]
  view: ViewsT
  mode: ModesT
  startHour: number
  endHour: number
  onChangeDate: (start: Date, end: Date) => void
  onChangeView: (view: ViewsT) => void
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
