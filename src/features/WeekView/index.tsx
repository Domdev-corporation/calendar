import { memo, useMemo } from 'react'
import { format } from 'date-fns'

import WeekSlotsMobile from '../WeekSlotsMobile'
import WeekSlots from '../WeekSlots'
import WeekHeaderMobile from '../WeekHeaderMobile'
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

  return (
    <>
      <WeekHeaderMobile
        weekDays={weekDays}
        selectedDay={selectedDate}
        onSelectDate={selectDateHandler}
        formatOfDay="SHORT_DAY"
      />

      <WeekSlotsMobile
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
      {/* 
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
      /> */}
    </>
  )
}

export default memo(WeekView)
