import { Cell } from '../MonthSlots/types'

export type MonthMobileSlotProps = {
  cell: Cell
  selectedDate: Date
  onSelectDate: (date: Date) => void
}
