import {
  ModalsT,
  ModesT,
  MonthCellType,
  MonthRowsT,
  UserEvents,
} from '../../types'

export type MonthViewProps = UserEvents<MonthCellType> &
  ModalsT<MonthCellType> & {
    renderRows: MonthRowsT[]
    selectDateHandler: (date: Date) => void
    selectedDate: Date
    deviceMode: ModesT
    isEventsList: boolean
  }
