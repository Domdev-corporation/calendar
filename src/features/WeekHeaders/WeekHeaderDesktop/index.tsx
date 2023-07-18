import { memo } from 'react'
import { format, isSameDay } from 'date-fns'

import { WeekHeaderProps } from '../types'
import colors from '../../../theme/colors'
import { DateFormat } from '../../../constants'
import IconButton from '../../../components/IconButton'

const WeekHeaderDesktop = ({
  weekDays,
  selectedDay,
  onSelectDate,
}: WeekHeaderProps): JSX.Element => {
  return (
    <div className="header">
      <div className="day time"></div>
      {weekDays.map(day => {
        return (
          <div className="day" key={day.toLocaleString()}>
            <div>{format(day, DateFormat.SHORT_DAY)}</div>
            <div>
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
                }`}
              >
                {format(day, DateFormat.DAY_NUMBER)}
              </IconButton>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default memo(WeekHeaderDesktop)
