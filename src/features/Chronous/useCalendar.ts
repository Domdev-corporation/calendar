import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { addDays, subDays, isBefore, isAfter } from 'date-fns'

import { ModesT, ViewsT } from '../../types'
import { configService } from '../../services/configService'
import { useWindowResize } from '../../hooks/useWindowResize'
import { getScreenWidth } from '../../helpers'
import { DAYS_IN_YEAR, Views } from '../../constants'

import { UseCalendarProps } from './types'
import {
  getEndOfWeek,
  getRenderRows,
  getStartOfWeek,
  getPreviousDateRange,
  getNextDateRange,
  getStartDate,
  getEndDate,
  isMobileMode,
  isWeekView,
} from './helpers'

export const useCalendar = ({
  currentDay,
  events = [],
  onDateChange = () => {},
  view,
  startHour,
  endHour,
  onViewChange,
  config,
  mode,
}: UseCalendarProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const { getView, getMode } = configService(config, windowWidth)
  const [viewMode, setViewMode] = useState<ViewsT>(view)
  const [currentDate, setCurrentDate] = useState<Date>(currentDay)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [isEventsList, setEventsList] = useState<boolean>(false)
  const [deviceMode, setDeviceMode] = useState<ModesT>(mode)
  const currentYear = useMemo(() => currentDate.getFullYear(), [currentDate])

  const startDate = useMemo(
    () => getStartDate(viewMode, currentDate),
    [viewMode, currentDate],
  )

  const endDate = useMemo(() => {
    return getEndDate(viewMode, currentDate)
  }, [viewMode, currentDate])

  const isDisabledNext = useMemo(() => {
    const { endDate } = getNextDateRange(currentDate, viewMode)

    return !isBefore(endDate, addDays(new Date(), DAYS_IN_YEAR))
  }, [currentDate, viewMode])

  const isDisabledPrevious = useMemo(() => {
    const { startDate } = getPreviousDateRange(currentDate, viewMode)

    return !isAfter(startDate, subDays(new Date(), DAYS_IN_YEAR))
  }, [currentDate, viewMode])

  const renderRows = useMemo(
    () =>
      getRenderRows(startDate, endDate, viewMode, events, startHour, endHour),
    [endDate, endHour, events, startDate, startHour, viewMode],
  )

  const next = useCallback(() => {
    const { startDate, endDate } = getNextDateRange(currentDate, viewMode)

    setCurrentDate(startDate)
    onDateChange(startDate, endDate)
  }, [currentDate, onDateChange, viewMode])

  const previous = useCallback(() => {
    const { startDate, endDate } = getPreviousDateRange(currentDate, viewMode)

    setCurrentDate(startDate)
    onDateChange(startDate, endDate)
  }, [currentDate, onDateChange, viewMode])

  const goToday = useCallback(() => {
    const now = new Date()

    setSelectedDate(now)
    setCurrentDate(now)

    if (onDateChange) onDateChange(getStartOfWeek(now), getEndOfWeek(now))
  }, [onDateChange])

  const selectDateHandler = (date: Date) => {
    setSelectedDate(date)
    setCurrentDate(date)

    if (isMobileMode(getMode(mode))) {
      return setViewMode(Views.WEEK)
    }

    setViewMode(Views.DAY)
  }

  const handleViewMode = (view: string) => {
    const newView = view.toLowerCase() as ViewsT
    setViewMode(newView)
    onViewChange(newView)
  }

  useWindowResize(() => {
    setWindowWidth(getScreenWidth())
  })

  const handleEventsList = () => {
    setEventsList(prev => !prev)
  }

  useEffect(() => {
    setDeviceMode(getMode(mode))
    setViewMode(getView(view))
  }, [windowWidth])

  return {
    viewMode,
    startDate,
    endDate,
    currentYear,
    selectedDate,
    renderRows,
    isDisabledNext,
    isDisabledPrevious,
    next,
    previous,
    goToday,
    selectDateHandler,
    handleViewMode,
    deviceMode,
    isMobile: isMobileMode(deviceMode),
    isWeek: isWeekView(viewMode),
    isEventsList,
    handleEventsList,
  }
}
