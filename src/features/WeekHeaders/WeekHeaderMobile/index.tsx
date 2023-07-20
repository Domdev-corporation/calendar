import { memo } from 'react'
import { format, isSameDay, isWeekend } from 'date-fns'

import './styles.css'
import { WeekHeaderProps } from '../types'
import colors from '../../../theme/colors'
import { DateFormat } from '../../../constants'
import Text from '../../../components/Text'
import IconButton from '../../../components/IconButton'
import Flex from '../../../components/Flex'

import { convertDateToMobileFormat } from './helpers'

const WeekHeaderMobile = ({
  weekDays,
  selectedDay,
  onSelectDate,
}: WeekHeaderProps): JSX.Element => {
  return (
    <Flex
      sx={{ gap: '5px', marginBottom: 10 }}
      align="center"
      direction="column"
      className="week-header_mobile"
    >
      <Flex sx={{ width: '100%' }} justify="space-between">
        {weekDays.map(day => {
          return (
            <div className="week-day_mobile" key={day.toLocaleString()}>
              <div className={`${isWeekend(day) ? 'weekend' : ''}`}>
                {format(day, DateFormat.SHORT_DAY)}
              </div>

              <IconButton
                onClick={() => onSelectDate(day)}
                sx={{
                  width: '35px',
                  height: '35px',
                  fontSize: '16px',
                  color: isSameDay(day, new Date()) ? colors.red : '',
                }}
                hoverBG={colors.black}
                className={`button ${
                  isSameDay(day, selectedDay) ? 'current-day-button' : ''
                } `}
              >
                <Text className={`${isWeekend(day) ? 'weekend' : ''}`}>
                  {format(day, DateFormat.DAY_NUMBER)}
                </Text>
              </IconButton>
            </div>
          )
        })}
      </Flex>
      <Text className="week-header_full-date">
        {convertDateToMobileFormat(selectedDay)}
      </Text>
    </Flex>
  )
}

export default memo(WeekHeaderMobile)
