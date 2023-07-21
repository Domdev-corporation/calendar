import { memo } from 'react'
import { format, isSameDay, isWeekend } from 'date-fns'

import './styles.css'
import { WeekHeaderProps } from '../types'
import { isCurrentDay } from '../../../helpers'
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
    <Flex className="week-header_mobile">
      <Flex sx={{ width: '100%' }} justify="space-between">
        {weekDays.map(day => {
          return (
            <div className="week-day_mobile" key={day.toLocaleString()}>
              <div className={`${isWeekend(day) ? 'weekend' : ''}`}>
                {format(day, DateFormat.SHORT_DAY)}
              </div>

              <IconButton
                onClick={() => onSelectDate(day)}
                className={`button ${isCurrentDay(day) ? 'current-date' : ''} ${
                  isSameDay(day, selectedDay) ? 'selected-date' : ''
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
