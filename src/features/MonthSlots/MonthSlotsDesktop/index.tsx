import { DesktopSlot } from '../../MonthSlot'

import { MonthSlotsDesktopProps } from './types'

const MonthSlotsDesktop = ({
  onSelectDate,
  onClickEvent,
  onClickCell,
  renderRows,
  selectedDate,
  eventModal,
  newEventModal,
}: MonthSlotsDesktopProps): JSX.Element => {
  const slotCells = renderRows.map(cell => ({ ...cell, modalOpen: false }))

  return (
    <>
      <div className="month-cell-wrapper">
        {slotCells.map((cell, index) => {
          return (
            <DesktopSlot
              eventModal={eventModal}
              newEventModal={newEventModal}
              key={index}
              cell={cell}
              index={index}
              onSelectDate={onSelectDate}
              onClickEvent={onClickEvent}
              onClickCell={onClickCell}
              selectedDate={selectedDate}
            />
          )
        })}
      </div>
    </>
  )
}

export default MonthSlotsDesktop
