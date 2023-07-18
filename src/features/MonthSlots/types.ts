import { MonthRowsT } from '../../types'

export type MonthSlotsProps = {
  renderRows: MonthRowsT[]
  onSelectDate: (date: Date) => void
  selectedDate: Date
}
