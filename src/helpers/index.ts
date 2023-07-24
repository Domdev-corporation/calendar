import { MouseEvent } from 'react'
import {
  addDays,
  areIntervalsOverlapping,
  getDay,
  getHours,
  getMinutes,
  isSameDay,
  parse,
} from 'date-fns'
import { format } from 'date-fns'

import { CellT } from '../types'
import {
  CELL_HEIGHT,
  MINUTES_IN_HOUR,
  DateFormat,
  WEEK_DAYS,
  INDEX_OF_SUNDAY,
} from '../constants'

export const getStartPosition = (startDate: Date | string): number => {
  const minutes = format(addDays(new Date(startDate), 0), DateFormat.MINUTE)

  return (CELL_HEIGHT / MINUTES_IN_HOUR) * +minutes
}

export const getBlockHeight = (duration?: Duration): number => {
  const hours = duration?.hours ?? 1
  const minutes = duration?.minutes ?? 0

  return hours * CELL_HEIGHT + minutes * (CELL_HEIGHT / MINUTES_IN_HOUR)
}

export const checkSelected = (
  eventId: string,
  selectedEventId?: string,
): boolean => eventId === selectedEventId

export const getDateOfWeekday = (
  weekdayNumber: number,
  startDay: Date = new Date(),
): Date => {
  const targetDate = addDays(startDay, weekdayNumber)

  return targetDate
}

export const getScreenWidth = (): number => {
  return window.innerWidth
}

export const isEvent = (
  event: MouseEvent<HTMLDivElement, MouseEvent>,
): boolean => {
  const element = event.target as HTMLElement

  return !!element?.closest?.('.event')
}

export const getHourOfDay = (): number => {
  const currentDate = new Date()
  const hours = getHours(currentDate)
  const minutes = getMinutes(currentDate)
  const decimalHour = hours + minutes / 60

  return decimalHour
}

export const getCellHeight = (): number => {
  const divElement = document.querySelector('.cell') as HTMLDivElement

  return divElement?.offsetHeight || 0
}

export const checkDay = (index: number): boolean => {
  const currentDate = new Date()
  const currentDayIndex = getDay(currentDate)

  return index === currentDayIndex
}

export const getWeekDayIndex = (date: Date): number => {
  const dayIndex = getDay(date)

  return (dayIndex + INDEX_OF_SUNDAY) % WEEK_DAYS
}

export const convertTo24HourFormat = (timeString: string): string => {
  const parsedTime = parse(timeString, DateFormat.TIME_STAMP, new Date())
  const formattedTime = format(parsedTime, DateFormat.HOUR_AND_MINUTE)

  return formattedTime
}

export const isCurrentDay = (day: Date | string): boolean => {
  return isSameDay(new Date(day), new Date())
}

export const isOverlappingEvents = (
  event: CellT,
  currentEvent?: CellT,
): boolean => {
  return areIntervalsOverlapping(
    { start: new Date(event.start), end: new Date(event.end) },
    {
      start: new Date(currentEvent?.start || ''),
      end: new Date(currentEvent?.end || ''),
    },
  )
}
