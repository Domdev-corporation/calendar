import { memo } from 'react'
import { format, isSameDay } from 'date-fns'

import { WeekHeaderProps } from '../types'
import { isCurrentDay } from '../../../helpers'
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
            <div>{format(day, DateFormat.DAY_LONG)}</div>
            <div>
              <IconButton
                onClick={() => onSelectDate(day)}
                className={`button ${isCurrentDay(day) ? 'current-date' : ''} ${
                  isSameDay(day, selectedDay) ? 'selected-date' : ''
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
