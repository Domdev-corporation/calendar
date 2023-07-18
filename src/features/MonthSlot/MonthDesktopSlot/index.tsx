import { format, isSameDay } from 'date-fns'

import { MAX_DISPLAYED_SLOTS } from '../../MonthSlots/constants'
import MonthEventModal from '../../MonthEventModal'
import { MonthEvent } from '../../MonthEvent'
import Button from '../../Button'
import { DateFormat } from '../../../constants'

import { useMonthSlot } from './useMonthSlot'
import { MonthDesktopSlotProps } from './types'
import { getSlotAttributes } from './helpers'

const MonthDesktopSlot = ({
  cell,
  index,
  onSelectDate,
  onClickEvent,
  onClickCell,
  selectedDate,
  eventModal,
  newEventModal,
}: MonthDesktopSlotProps): JSX.Element => {
  const { date, isCurrentMonth, slots } = cell

  const {
    modalOpen,
    onEventClickHandler,
    closeModalHandler,
    modalRef,
    onClose,
    onOpen,
  } = useMonthSlot()

  return (
    <div
      onClick={event => {
        if (!slots.length) {
          const eventData = { time: `${Date.now()}`, day: date }
          onClickCell(eventData)

          if (newEventModal)
            onOpen(event, newEventModal({ ...eventData, onClose }))
        }
      }}
      className="cell month-cell"
    >
      <div className="month-cell-week">
        {index < 7 && format(date, DateFormat.DAY_OF_WEEK)}
      </div>
      <div className="month-cell-day-wrapper">
        <Button
          ariaLabel="day"
          className={`month-cell-day ${
            !isCurrentMonth ? 'month-cell-day--othermonth' : ''
          } ${isSameDay(date, selectedDate) ? 'current-day-button' : ''}`}
          onClick={() => {
            onSelectDate(date)
          }}
        >
          {date.getDate() === 1 && format(date, DateFormat.MONTH_SHORT)}{' '}
          {date.getDate()}
        </Button>
      </div>
      {slots.slice(0, MAX_DISPLAYED_SLOTS + 1).map((slot, index) => {
        const { slotTime, slotTitle, isCollapsedSlot } = getSlotAttributes({
          slot,
          index,
          length: slots.length,
        })
        const event = { ...slot, date: slotTime, title: slotTitle }

        return (
          <MonthEvent
            key={slot.id}
            event={event}
            isCollapsedEvent={isCollapsedSlot}
            onClick={e =>
              onEventClickHandler(isCollapsedSlot, () => {
                onClickEvent(slot)

                if (eventModal) onOpen(e, eventModal({ ...event, onClose }))
              })
            }
          />
        )
      })}
      {modalOpen && (
        <MonthEventModal
          cell={cell}
          ref={modalRef}
          closeModalHandler={closeModalHandler}
          onClickEvent={onClickEvent}
        />
      )}
    </div>
  )
}

export default MonthDesktopSlot
