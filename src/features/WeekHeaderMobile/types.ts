import { DateFormat } from '../../constants'

export type WeekHeaderProps = {
  weekDays: Date[]
  selectedDay: Date
  formatOfDay?: keyof typeof DateFormat
  onSelectDate: (data: Date) => void
}
