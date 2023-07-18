import {
  CalendarEventType,
  ModalsT,
  ModesT,
  MonthCellType,
  UserEvents,
} from '../../types'

export type MonthViewProps = UserEvents<MonthCellType> &
  ModalsT<MonthCellType> & {
    renderRows: CellT[]
    selectDateHandler: (date: Date) => void
    selectedDate: Date
    deviceMode: ModesT
  }

export type CellT = {
  date: Date
  isCurrentMonth: boolean
  slots: CalendarEventType[]
}
