import { isSameMonth } from 'date-fns'

import { MonthCellType, MonthRowsT } from '../../types'

export const getCurrentMoth = (renderRows: MonthRowsT[]): MonthRowsT[] => {
  return renderRows.filter(row => isSameMonth(row.date, new Date()))
}

export const getDays = (renderRows: MonthRowsT[]): Date[] => {
  return getCurrentMoth(renderRows).map(row => row.date)
}

export const getEvents = (renderRows: MonthRowsT[]): MonthCellType[][] => {
  return getCurrentMoth(renderRows).map(row => row.slots)
}
