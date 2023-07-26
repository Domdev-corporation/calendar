import { memo } from 'react'

import EventsList from '../EventsList'
import DaySlots from '../DaySlots'
import DayHeader from '../DayHeader'

import { DayViewProps } from './types'
import { getEventsByDay } from './helpers'

const DayView = ({
  events,
  startDate,
  selectedEvent,
  onEventClick,
  onCellClick,
  renderRows,
  renderEventComponent,
  eventModal,
  newEventModal,
  endHour,
  startHour,
  isEventsList,
}: DayViewProps): JSX.Element => {
  return isEventsList ? (
    <EventsList
      days={[startDate]}
      events={[getEventsByDay(events, startDate)]}
    />
  ) : (
    <>
      <div className="header">
        <DayHeader day={startDate} />
      </div>

      <DaySlots
        endHour={endHour}
        startHour={startHour}
        eventModal={eventModal}
        newEventModal={newEventModal}
        day={startDate}
        eventsByDay={getEventsByDay(events, startDate)}
        selectedEvent={selectedEvent}
        renderRows={renderRows}
        onCellClick={onCellClick}
        onEventClick={onEventClick}
        renderEventComponent={renderEventComponent}
      />
    </>
  )
}

export default memo(DayView)
