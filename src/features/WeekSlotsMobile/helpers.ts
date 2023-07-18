import { WeekCellType } from '../../types'
import { getWeekDayIndex } from '../../helpers'

export const handleDayEvents = (
  daysEvents: WeekCellType[][],
  currentDay: Date,
): WeekCellType[][] => {
  const indexOfCurrentDay = getWeekDayIndex(currentDay)

  return daysEvents.slice(indexOfCurrentDay, indexOfCurrentDay + 1)
}

export const getEventIndexOfDay = (
  eventsByWeek: WeekCellType[][],
  selectedDate: Date,
  eventId: string,
): number => {
  return eventsByWeek[getWeekDayIndex(selectedDate)].findIndex(
    day => day.id === eventId,
  )
}
