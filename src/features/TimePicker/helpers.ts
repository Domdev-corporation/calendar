import { getCellHeight, getHourOfDay } from '../../helpers'
import { MINUTES_IN_HOUR } from '../../constants'

export const calculateMinutesInHours = (duration: number): number => {
  return duration * MINUTES_IN_HOUR
}

export const calculateTopIndentation = (
  time: number,
  duration: number,
): number => {
  return (
    (time * (duration * getCellHeight())) / calculateMinutesInHours(duration)
  )
}

export const isDisplay = (endHour: number, startHour: number): boolean => {
  return getHourOfDay() <= endHour && getHourOfDay() >= startHour
}

export const calculateInitialTime = (startHour: number): number => {
  return (getHourOfDay() - startHour) * getCellHeight()
}
