import { memo, useMemo } from 'react'
import { format } from 'date-fns'

import { DateFormat } from '../../constants'

import { WeekViewProps } from './types'
import { getWeekDays } from './helpers'
import { WeekHeaders, WeekSlots } from './constants'

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
  deviceMode,
}: WeekViewProps): JSX.Element => {
  const weekDays = useMemo(() => getWeekDays(startDate), [startDate])

  const eventsByWeek = useMemo(
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

  const Week = WeekSlots[deviceMode]
  const Header = WeekHeaders[deviceMode]

  return (
    <>
      <Header
        weekDays={weekDays}
        selectedDay={selectedDate}
        onSelectDate={selectDateHandler}
      />

      <Week
        startDate={startDate}
        selectedDate={selectedDate}
        endHour={endHour}
        startHour={startHour}
        eventModal={eventModal}
        newEventModal={newEventModal}
        onClickCell={onClickCell}
        eventsByWeek={eventsByWeek}
        selectedEvent={selectedEvent}
        renderRows={renderRows}
        onClickEvent={onClickEvent}
        renderEventComponent={renderEventComponent}
      />
    </>
  )
}

export default memo(WeekView)
