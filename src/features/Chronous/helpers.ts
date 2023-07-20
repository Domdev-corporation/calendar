import {
  addDays,
  subWeeks,
  format,
  intervalToDuration,
  startOfWeek,
  endOfWeek,
  addWeeks,
  subDays,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfDay,
  endOfDay,
  subMonths,
} from 'date-fns'

import {
  CalendarEventType,
  DayRowsType,
  ModesT,
  MonthRowsT,
  ViewsT,
  WeekRowsType,
} from '../../types'
import {
  CreateCells,
  GenerateSlotsForDaysOfMonth,
} from '../MonthSlots/MonthSlotsDesktop/types'
import { COUNT_CELLS } from '../MonthSlots/constants'
import {
  DAY_IN_HOURS,
  DaysOfTheWeek,
  MERIDIEM,
  DateFormat,
  daysOfWeek,
  Views,
  Devices,
} from '../../constants'

import { HoursColumnT, RowsInfoT, DateRangeT } from './types'

export const getStartOfWeek = (date: Date | number): Date =>
  addDays(startOfWeek(date, { weekStartsOn: 1 }), 0)

export const getEndOfWeek = (date: Date | number): Date =>
  addDays(endOfWeek(date, { weekStartsOn: 1 }), 0)

export const getStartOfMonth = (date: Date | number): Date =>
  addDays(startOfMonth(date), 0)

export const getEndOfMonth = (date: Date | number): Date =>
  addDays(endOfMonth(date), 0)

export const getStartDate = (viewMode: ViewsT, currentDate: Date): Date => {
  switch (viewMode) {
    case Views.WEEK:
      return getStartOfWeek(currentDate)
    case Views.DAY:
      return startOfDay(currentDate)
    case Views.MONTH:
      return getStartOfMonth(currentDate)
    default:
      return currentDate
  }
}

export const getEndDate = (viewMode: ViewsT, currentDate: Date): Date => {
  switch (viewMode) {
    case Views.WEEK:
      return getEndOfWeek(currentDate)
    case Views.DAY:
      return endOfDay(currentDate)
    case Views.MONTH:
      return getEndOfMonth(currentDate)
    default:
      return currentDate
  }
}

const generateHoursColumn = (): HoursColumnT[] => {
  return [...Array(DAY_IN_HOURS)].map((_, hour) => {
    const ampm = hour < 12 ? MERIDIEM.BEFORE_MIDDAY : MERIDIEM.AFTER_MIDDAY
    const displayHour = hour % 12 || 12

    return {
      time: `${displayHour}:00 ${ampm}`,
    }
  })
}

export const generateEmptyWeekRows = (): WeekRowsType[] => {
  return generateHoursColumn().map(({ time }) => ({
    time,
    cells: daysOfWeek.map(() => []),
  }))
}

export const generateEmptyDayRows = (): DayRowsType[] => {
  return generateHoursColumn().map(({ time }) => ({
    time,
    cells: [[]],
  }))
}

export const getCalendarRowsInfo = (
  events: CalendarEventType[],
): RowsInfoT[] => {
  return events.map(event => {
    const startEvent = new Date(event.start)
    const endEvent = new Date(event.end)

    const duration = intervalToDuration({ start: startEvent, end: endEvent })
    const startTime = format(startEvent, DateFormat.HOUR)
    const currentDateTime = startEvent.getTime()

    return { event, duration, startTime, startEvent, currentDateTime }
  })
}

export const generateCalendarWeekRows = (
  events: CalendarEventType[],
  startWeek: number,
  endWeek: number,
  startHour: number,
  endHour: number,
): WeekRowsType[] => {
  const rows = generateEmptyWeekRows()

  getCalendarRowsInfo(events).forEach(
    ({ currentDateTime, duration, startTime, event, startEvent }) => {
      const dayIndex = daysOfWeek.indexOf(
        format(startEvent, DateFormat.DAY_LONG) as DaysOfTheWeek,
      )

      const isValid = currentDateTime >= startWeek && currentDateTime <= endWeek

      if (isValid) {
        rows[+startTime].cells[dayIndex].push({
          ...event,
          duration,
        })
      }
    },
  )

  return rows.slice(startHour, endHour)
}

export const generateCalendarDayRows = (
  events: CalendarEventType[],
  startDay: number,
  endDay: number,
  startHour: number,
  endHour: number,
): DayRowsType[] => {
  const rows = generateEmptyDayRows()

  getCalendarRowsInfo(events).forEach(
    ({ currentDateTime, duration, startTime, event }) => {
      const isValid = currentDateTime >= startDay && currentDateTime <= endDay

      if (isValid) {
        rows[+startTime].cells[0].push({
          ...event,
          duration,
        })
      }
    },
  )

  return rows.slice(startHour, endHour)
}

export const createCells = ({
  currentYear,
  currentMonth,
  countCells,
  isCurrentMonth,
  daysInPrevMonth,
}: CreateCells): MonthRowsT[] =>
  Array.from({ length: countCells }, (_, day) => {
    return {
      date: new Date(
        currentYear,
        currentMonth,
        daysInPrevMonth ? daysInPrevMonth - day : day + 1,
      ),
      isCurrentMonth,
      slots: [],
    }
  })

export const generateSlotsForDaysOfMonth = ({
  startDate,
  events,
}: GenerateSlotsForDaysOfMonth): MonthRowsT[] => {
  const currentDate = new Date(startDate)

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate()

  const cells = createCells({
    countCells: daysInMonth,
    currentYear,
    currentMonth,
    isCurrentMonth: true,
  })

  const prevMonthCells = createCells({
    countCells: firstDayOfMonth,
    currentYear,
    currentMonth: currentMonth - 1,
    isCurrentMonth: false,
    daysInPrevMonth,
  }).reverse()

  const nextMonthCells = createCells({
    countCells: COUNT_CELLS - daysInMonth - firstDayOfMonth,
    currentYear,
    currentMonth: currentMonth + 1,
    isCurrentMonth: false,
  })

  const allCells = [prevMonthCells, cells, nextMonthCells].flat()

  const newCells = allCells.map(cell => {
    const matchingSlotData = events.filter(({ start }) => {
      const slotDate = new Date(start)

      return (
        slotDate.getMonth() === cell.date.getMonth() &&
        slotDate.getFullYear() === cell.date.getFullYear() &&
        slotDate.getDate() === cell.date.getDate()
      )
    })

    if (matchingSlotData) {
      return {
        ...cell,
        slots: matchingSlotData,
      }
    }

    return cell
  })

  return newCells
}

export const getRenderRows = (
  start: Date,
  end: Date,
  viewMode: ViewsT,
  events: CalendarEventType[],
  startHour: number,
  endHour: number,
): WeekRowsType[] | DayRowsType[] | MonthRowsT[] => {
  const startDate = start.getTime()
  const endDate = end.getTime()

  switch (viewMode) {
    case Views.WEEK: {
      return generateCalendarWeekRows(
        events,
        startDate,
        endDate,
        startHour,
        endHour,
      )
    }
    case Views.DAY: {
      return generateCalendarDayRows(
        events,
        startDate,
        endDate,
        startHour,
        endHour,
      )
    }
    case Views.MONTH: {
      return generateSlotsForDaysOfMonth({ startDate, events })
    }
    default: {
      return []
    }
  }
}

export const getPreviousDateRange = (
  currentDate: Date,
  viewMode: ViewsT,
): DateRangeT => {
  switch (viewMode) {
    case Views.WEEK: {
      const previousDate = subWeeks(currentDate, 1)

      return {
        startDate: getStartOfWeek(previousDate),
        endDate: getEndOfWeek(previousDate),
      }
    }
    case Views.DAY: {
      const prev = subDays(currentDate, 1)

      return {
        startDate: prev,
        endDate: prev,
      }
    }
    case Views.MONTH: {
      const previousDate = subMonths(currentDate, 1)

      return {
        startDate: getStartOfMonth(previousDate),
        endDate: getEndOfMonth(previousDate),
      }
    }
    default: {
      const now = new Date()

      return {
        startDate: now,
        endDate: now,
      }
    }
  }
}

export const getNextDateRange = (
  currentDate: Date,
  viewMode: ViewsT,
): DateRangeT => {
  switch (viewMode) {
    case Views.WEEK: {
      const nextDate = addWeeks(currentDate, 1)

      return {
        startDate: getStartOfWeek(nextDate),
        endDate: getEndOfWeek(nextDate),
      }
    }
    case Views.DAY: {
      const nextDate = addDays(currentDate, 1)

      return {
        startDate: nextDate,
        endDate: nextDate,
      }
    }
    case Views.MONTH: {
      const nextDate = addMonths(currentDate, 1)

      return {
        startDate: getStartOfMonth(nextDate),
        endDate: getEndOfMonth(nextDate),
      }
    }
    default: {
      const now = new Date()

      return {
        startDate: now,
        endDate: now,
      }
    }
  }
}

export const returnDayDate = (currentDate: Date, dayNumber: number): string => {
  const currentWeekDay = currentDate.getDay()
  const offset = dayNumber - currentWeekDay

  const targetDate = new Date(currentDate)
  targetDate.setDate(currentDate.getDate() + offset)

  return targetDate.toISOString().substring(0, 10)
}

export const isMobileMode = (mode: ModesT): boolean => {
  return mode === Devices.MOBILE
}

export const isWeekView = (view: ViewsT): boolean => {
  return view === Views.WEEK
}
