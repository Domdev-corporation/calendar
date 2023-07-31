import { TimePicker } from '../../TimePicker'
import EventItem from '../../EventItem'
import EventContainer from '../../EventContainer'
import { eventsService } from '../../../services/eventsService'
import { checkDay, checkSelected, getDateOfWeekday } from '../../../helpers'
import { useModals } from '../../../contexts/ModalContext/useModals'

import { WeekSlotsDesktopProps } from './types'

const WeekSlotsDesktop = ({
  startDate,
  eventsByWeek,
  renderRows,
  onEventClick,
  onCellClick,
  selectedEvent,
  renderEventComponent: Component = EventItem,
  eventModal,
  newEventModal,
  endHour,
  startHour,
}: WeekSlotsDesktopProps): JSX.Element => {
  const { onOpen, onClose } = useModals()

  const { getGap } = eventsService(renderRows)

  return (
    <>
      {renderRows.map(({ time, cells }, rowIndex) => {
        return (
          <div className="row" key={time}>
            <div className="cell time">{time}</div>

            {cells.map((events, index) => {
              return (
                <div
                  key={index}
                  className="cell"
                  onClick={e => {
                    const eventData = {
                      time,
                      day: getDateOfWeekday(index, startDate),
                    }
                    onCellClick(eventData)

                    if (newEventModal)
                      onOpen(e, newEventModal({ ...eventData, onClose }))
                  }}
                >
                  {checkDay(index + 1) && !rowIndex ? (
                    <TimePicker endHour={endHour} startHour={startHour} />
                  ) : null}
                  {events.map(event => {
                    const isSelected = checkSelected(event.id, selectedEvent)

                    return (
                      <EventContainer
                        onClick={e => {
                          e.stopPropagation()
                          onEventClick(event)

                          if (eventModal)
                            onOpen(e, eventModal({ ...event, onClose }))
                        }}
                        key={event.id}
                        gap={getGap(event.id)}
                        overlapping={event?.overlapping}
                        start={event.start}
                        numberOfEvents={eventsByWeek.length}
                        duration={event?.duration}
                        isSelected={isSelected}
                      >
                        <Component
                          event={event}
                          isSelected={isSelected}
                          className="week-event"
                        />
                      </EventContainer>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default WeekSlotsDesktop
