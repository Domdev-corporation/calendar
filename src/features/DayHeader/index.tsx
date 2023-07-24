import { memo } from 'react'
import { format } from 'date-fns'

import colors from '../../theme/colors'
import { isCurrentDay } from '../../helpers'
import { DateFormat } from '../../constants'
import Text from '../../components/Text'
import IconButton from '../../components/IconButton'
import Flex from '../../components/Flex'

import { DayHeaderProps } from './types'

const DayHeader = ({
  day,
  formatOfDay = DateFormat.DAY_LONG,
}: DayHeaderProps): JSX.Element => {
  return (
    <>
      <Flex
        className="day day-header"
        spacing={20}
        align="center"
        sx={{ flexBasis: '100%' }}
        key={day.toLocaleString()}
      >
        <IconButton
          className={`button ${
            isCurrentDay(day) ? 'current-date' : ''
          } selected-date`}
        >
          {format(day, DateFormat.DAY_NUMBER)}
        </IconButton>
        <Text variant="h4">{format(day, formatOfDay)}</Text>
      </Flex>
    </>
  )
}

export default memo(DayHeader)
