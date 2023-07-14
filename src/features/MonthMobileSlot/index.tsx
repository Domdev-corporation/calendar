import './styles.css'
import { isSameDay, isWeekend } from 'date-fns'

import colors from '../../theme/colors'
import IconButton from '../../components/IconButton'
import Flex from '../../components/Flex'

import { MonthMobileSlotProps } from './types'

const MonthMobileSlot = ({
  cell: { date, slots, isCurrentMonth },
  onSelectDate,
  selectedDate,
}: MonthMobileSlotProps): JSX.Element => {
  return (
    <div className="month-cell--mobile">
      <Flex
        sx={{ width: '100%' }}
        spacing={2}
        align="center"
        direction="column"
      >
        <IconButton
          sx={{ width: 30, height: 30 }}
          className={`button  ${!isCurrentMonth ? 'mobile--other-month' : ''} ${
            isWeekend(date) ? 'weekend' : ''
          } ${isSameDay(date, selectedDate) ? 'current-day-button' : ''}`}
          hoverBG={colors.powderBlue}
          activeColor={colors.powderBlue}
          onClick={() => onSelectDate(date)}
        >
          {date.getDate()}
        </IconButton>
        {slots.length ? <div className="dot"></div> : null}
      </Flex>
    </div>
  )
}

export default MonthMobileSlot
