import { format } from 'date-fns'

import { DateFormat } from '../../constants'
import Text from '../../components/Text'
import Flex from '../../components/Flex'

import './styles.css'
import { EventListItemProps } from './types'

export const EventListItem = ({
  color = 'red',
  description,
  endDate,
  startDate,
}: EventListItemProps): JSX.Element => {
  return (
    <Flex justify="space-between" className="event-list-item">
      <div style={{ background: color }} className="event-mark" />

      <Text className="event-list-item_description">{description}</Text>

      <Flex spacing={5} direction="column">
        <Text className="event-list-item_hour">
          {format(startDate, DateFormat.HOUR_AND_MINUTE)}
        </Text>
        <Text className="event-list-item_hour">
          {format(endDate, DateFormat.HOUR_AND_MINUTE)}
        </Text>
      </Flex>
    </Flex>
  )
}
