import './styles.css'

import { TimePicker } from '../TimePicker'
import EventItem from '../EventItem'
import EventContainer from '../EventContainer'
import { eventsService } from '../../services/eventsService'
import { checkSelected } from '../../helpers'
import { useModals } from '../../contexts/ModalContext/useModals'

import { DaySlotsProps } from './types'

const DaySlots = ({
  day,
  eventsByDay,
  renderRows,
  onEventClick,
  onCellClick,
  selectedEvent,
  renderEventComponent: Component = EventItem,
  eventModal,
  newEventModal,
  endHour,
  startHour,
}: DaySlotsProps): JSX.Element => {
  const { onOpen, onClose } = useModals()

  const { getGap } = eventsService(renderRows)

  return (
    <>
      {renderRows.map(({ time, cells }, rowIndex) => (
        <div className="row" key={time}>
          <div className="cell time">{time}</div>
          {cells.map(events => {
            return (
              <div
                onClick={e => {
                  const eventData = { time, day, onClose }

                  if (newEventModal) onOpen(e, newEventModal(eventData))

                  onCellClick(eventData)
                }}
                className="cell day-cell"
                key="cell"
              >
                {rowIndex ? null : (
                  <TimePicker endHour={endHour} startHour={startHour} />
                )}
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
                      gap={getGap(event.id)}
                      key={event.id}
                      overlapping={event?.overlapping}
                      start={event.start}
                      numberOfEvents={eventsByDay.length}
                      duration={event?.duration}
                      isSelected={isSelected}
                    >
                      <Component
                        event={event}
                        isSelected={isSelected}
                        className="day-event"
                      />
                    </EventContainer>
                  )
                })}
              </div>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default DaySlots
