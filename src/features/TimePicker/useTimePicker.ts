import { useEffect, useLayoutEffect, useState } from 'react'

import { ONE_MINUTE_IN_MILLISECONDS } from '../../constants'

import {
  calculateInitialTime,
  calculateMinutesInHours,
  calculateTopIndentation,
} from './helpers'

export const useTimePicker = (endHour: number, startHour: number) => {
  const [time, setTime] = useState(0)
  const [topIndentation, setTopIndentation] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev =>
        prev >= calculateMinutesInHours(endHour - startHour) ? 0 : prev + 1,
      )
    }, ONE_MINUTE_IN_MILLISECONDS)

    return () => clearInterval(timer)
  }, [endHour, startHour])

  useLayoutEffect(() => {
    setTime(calculateInitialTime(startHour))
  }, [startHour])

  useEffect(() => {
    setTopIndentation(calculateTopIndentation(time, endHour - startHour))
  }, [endHour, startHour, time])

  return { time, topIndentation }
}
