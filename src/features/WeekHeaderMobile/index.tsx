import { memo } from 'react'
import { format, isSameDay, isWeekend } from 'date-fns'

import './styles.css'
import colors from '../../theme/colors'
import { DateFormat } from '../../constants'
import Text from '../../components/Text'
import IconButton from '../../components/IconButton'
import Flex from '../../components/Flex'

import { WeekHeaderProps } from './types'
import { convertDateToMobileFormat } from './helpers'

const WeekHeader = ({
  weekDays,
  selectedDay,
  onSelectDate,
  formatOfDay = 'DAY_LONG',
}: WeekHeaderProps): JSX.Element => {
  return (
    <Flex
      sx={{ marginBottom: 10 }}
      align="center"
      direction="column"
      className="week-header_mobile"
    >
      <Flex sx={{ width: '100%' }} justify="space-between">
        {weekDays.map(day => {
          return (
            <div className="week-day_mobile" key={day.toLocaleString()}>
              <div className={`${isWeekend(day) ? 'weekend' : ''}`}>
                {format(day, DateFormat[formatOfDay])}
              </div>

              <IconButton
                onClick={() => onSelectDate(day)}
                sx={{
                  width: '35px',
                  height: '35px',
                  fontSize: '16px',
                }}
                hoverBG={colors.powderBlue}
                activeColor={colors.powderBlue}
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

export default memo(WeekHeader)
