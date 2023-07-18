import { MonthSlotsProps } from '../types'
import MonthMobileSlot from '../../MonthSlot/MonthMobileSlot'
import Flex from '../../../components/Flex'

const MonthSlotsMobile = ({
  onSelectDate,
  renderRows,
  selectedDate,
}: MonthSlotsProps): JSX.Element => {
  const slotCells = renderRows.map(cell => ({ ...cell, modalOpen: false }))

  return (
    <Flex wrap="wrap">
      {slotCells.map((cell, index) => {
        return (
          <MonthMobileSlot
            key={index}
            cell={cell}
            onSelectDate={onSelectDate}
            selectedDate={selectedDate}
          />
        )
      })}
    </Flex>
  )
}

export default MonthSlotsMobile
