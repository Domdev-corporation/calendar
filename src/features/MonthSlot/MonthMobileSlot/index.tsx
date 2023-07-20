import './styles.css'
import { isSameDay, isWeekend } from 'date-fns'

import { MonthSlotProps } from '../types'
import colors from '../../../theme/colors'
import Text from '../../../components/Text'
import IconButton from '../../../components/IconButton'
import Flex from '../../../components/Flex'

const MonthMobileSlot = ({
  cell: { date, slots, isCurrentMonth },
  onSelectDate,
  selectedDate,
}: MonthSlotProps): JSX.Element => {
  return (
    <div className="month-cell--mobile">
      <Flex
        sx={{ width: '100%' }}
        spacing={2}
        align="center"
        direction="column"
      >
        <IconButton
          sx={{
            width: 30,
            height: 30,
            color: isSameDay(date, new Date()) ? colors.red : '',
          }}
          className={`button  ${!isCurrentMonth ? 'mobile--other-month' : ''} ${
            isSameDay(date, selectedDate) ? 'current-day-button' : ''
          }`}
          hoverBG={colors.black}
          onClick={() => onSelectDate(date)}
        >
          <Text className={`${isWeekend(date) ? 'weekend' : ''} `}>
            {date.getDate()}
          </Text>
        </IconButton>
        {slots.length ? <div className="dot"></div> : null}
      </Flex>
    </div>
  )
}

export default MonthMobileSlot
