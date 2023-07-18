import './styles.css'

import MonthHeader from '../MonthHeader'
import { Devices } from '../../constants'

import { MonthViewProps } from './types'
import { MonthSlots } from './constants'

const MonthView = ({
  selectDateHandler,
  onClickEvent,
  onClickCell,
  renderRows,
  selectedDate,
  eventModal,
  newEventModal,
  deviceMode,
}: MonthViewProps): JSX.Element => {
  const Month = MonthSlots[deviceMode]

  return (
    <>
      {deviceMode === Devices.MOBILE && <MonthHeader />}

      <Month
        eventModal={eventModal}
        newEventModal={newEventModal}
        renderRows={renderRows}
        onSelectDate={selectDateHandler}
        onClickEvent={onClickEvent}
        onClickCell={onClickCell}
        selectedDate={selectedDate}
      />
    </>
  )
}

export default MonthView
