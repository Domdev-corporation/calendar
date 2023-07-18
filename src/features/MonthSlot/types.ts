import { MonthRowsT } from '../../types'

export type MonthSlotProps = {
  cell: MonthRowsT
  selectedDate: Date
  onSelectDate: (date: Date) => void
}
