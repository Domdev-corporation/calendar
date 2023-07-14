import MonthMobileSlot from '../MonthMobileSlot'
import MonthHeader from '../MonthMobileHeader'
import Flex from '../../components/Flex'

import { MonthSlotsProps } from './types'

const MonthSlots = ({
  onSelectDate,
  onClickEvent,
  onClickCell,
  renderRows,
  selectedDate,
  eventModal,
  newEventModal,
}: MonthSlotsProps): JSX.Element => {
  const slotCells = renderRows.map(cell => ({ ...cell, modalOpen: false }))

  return (
    <div>
      <MonthHeader />
      <Flex wrap="wrap">
        {slotCells.map((cell, index) => (
          <MonthMobileSlot
            key={index}
            cell={cell}
            onSelectDate={onSelectDate}
            selectedDate={selectedDate}
          />
        ))}
      </Flex>
    </div>
  )
}

export default MonthSlots
