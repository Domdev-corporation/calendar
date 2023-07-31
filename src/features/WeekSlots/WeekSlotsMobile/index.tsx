import { TimePicker } from '../../TimePicker'
import EventItem from '../../EventItem'
import EventContainer from '../../EventContainer'
import { eventsService } from '../../../services/eventsService'
import { checkSelected, convertTo24HourFormat } from '../../../helpers'
import { useModals } from '../../../contexts/ModalContext/useModals'

import './styles.css'
import { WeekSlotsMobileProps } from './types'
import { handleDayEvents } from './helpers'

const WeekSlotsMobile = ({
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
  selectedDate,
}: WeekSlotsMobileProps): JSX.Element => {
  const { onOpen, onClose } = useModals()

  const { getGap } = eventsService(renderRows)

  return (
    <>
      {renderRows.map(({ time, cells }, rowIndex) => (
        <div className="row" key={time}>
          <div className="cell time time_mobile">
            {convertTo24HourFormat(time)}
          </div>
          {handleDayEvents(cells, selectedDate).map(events => {
            return (
              <div
                onClick={e => {
                  const eventData = { time, day: selectedDate, onClose }

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
                      numberOfEvents={eventsByWeek.length}
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

export default WeekSlotsMobile
