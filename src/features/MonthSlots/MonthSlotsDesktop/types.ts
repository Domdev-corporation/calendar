import { MonthSlotsProps } from '../types'
import {
  CalendarEventType,
  ModalsT,
  MonthCellType,
  UserEvents,
} from '../../../types'

export type MonthSlotsDesktopProps = UserEvents<MonthCellType> &
  ModalsT<MonthCellType> &
  MonthSlotsProps

export type CreateCells = {
  currentYear: number
  currentMonth: number
  countCells: number
  isCurrentMonth: boolean
  daysInPrevMonth?: number
}

export type GenerateSlotsForDaysOfMonth = {
  startDate: number
  events: CalendarEventType[]
}

export type GetSlotAttributes = {
  slot: CalendarEventType
  index: number
  length: number
}

export type SlotAttributes = {
  isCollapsedSlot: boolean
  slotTitle: string
  slotTime: string
}
