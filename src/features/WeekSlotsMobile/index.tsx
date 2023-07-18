import { TimePicker } from '../TimePicker'
import EventItem from '../EventItem'
import EventContainer from '../EventContainer'
import { checkSelected, convertTo24HourFormat } from '../../helpers'
import { useModals } from '../../context/ModalContext/useModals'

import './styles.css'
import { WeekSlotsProps } from './types'
import { getEventIndexOfDay, handleDayEvents } from './helpers'

const WeekSlotsMobile = ({
  eventsByWeek,
  renderRows,
  onClickEvent,
  onClickCell,
  selectedEvent,
  renderEventComponent: Component = EventItem,
  eventModal,
  newEventModal,
  endHour,
  startHour,
  selectedDate,
}: WeekSlotsProps): JSX.Element => {
  const { onOpen, onClose } = useModals()

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

                  onClickCell(eventData)
                }}
                className="cell day-cell"
                key="cell"
              >
                {rowIndex ? null : (
                  <TimePicker endHour={endHour} startHour={startHour} />
                )}
                {events.map(event => {
                  const isSelected = checkSelected(event.id, selectedEvent)
                  const eventIndex = getEventIndexOfDay(
                    eventsByWeek,
                    selectedDate,
                    event.id,
                  )

                  return (
                    <EventContainer
                      onClick={e => {
                        e.stopPropagation()
                        onClickEvent(event)

                        if (eventModal)
                          onOpen(e, eventModal({ ...event, onClose }))
                      }}
                      key={event.id}
                      index={eventIndex}
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
