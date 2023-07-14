import { memo, useMemo } from 'react'
import { format } from 'date-fns'

import WeekSlots from '../WeekSlots'
import WeekHeader from '../WeekHeader'
import { DateFormat } from '../../constants'

import { WeekViewProps } from './types'
import { getWeekDays } from './helpers'

const WeekView = ({
  events,
  startDate,
  selectedDate,
  selectedEvent,
  renderRows,
  renderEventComponent,
  onClickEvent,
  onClickCell,
  selectDateHandler,
  eventModal,
  newEventModal,
  endHour,
  startHour,
}: WeekViewProps): JSX.Element => {
  const weekDays = useMemo(() => getWeekDays(startDate), [startDate])

  const eventsByDay = useMemo(
    () =>
      weekDays.map(day =>
        events.filter(
          event =>
            format(new Date(event.start), DateFormat.YEAR_MONTH_DAY) ===
            format(day, DateFormat.YEAR_MONTH_DAY),
        ),
      ),
    [events, weekDays],
  )

  return (
    <>
      <WeekHeader
        weekDays={weekDays}
        selectedDay={selectedDate}
        onSelectDate={selectDateHandler}
      />

      <WeekSlots
        endHour={endHour}
        startHour={startHour}
        eventModal={eventModal}
        newEventModal={newEventModal}
        startDate={startDate}
        onClickCell={onClickCell}
        eventsByDay={eventsByDay}
        selectedEvent={selectedEvent}
        renderRows={renderRows}
        onClickEvent={onClickEvent}
        renderEventComponent={renderEventComponent}
      />
    </>
  )
}

export default memo(WeekView)
