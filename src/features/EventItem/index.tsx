import { format } from 'date-fns'

import { EventComponentProps } from '../../types'
import { DateFormat } from '../../constants'
import Text from '../../components/Text'
import Flex from '../../components/Flex'

import { applyOpacity } from './helpers'

const EventItem = ({
  event,
  isSelected,
  className,
}: EventComponentProps): JSX.Element => {
  return (
    <Flex
      direction="column"
      className={`event ${isSelected ? 'selected' : ''} ${className}`}
      sx={{
        backgroundColor: applyOpacity(
          event?.color ?? '',
          isSelected ? 1 : event?.opacity ?? 1,
        ),
        color: event.textColor,
      }}
    >
      <Flex sx={{ flexWrap: 'wrap' }}>
        <Text variant="caption">{event.title}</Text>
      </Flex>
      <Text variant="caption" sx={{ fontWeight: 'bold', marginTop: 8 }}>
        {format(new Date(event.start), DateFormat.TIME_STAMP)} -{' '}
        {format(new Date(event.end), DateFormat.TIME_STAMP)}
      </Text>
    </Flex>
  )
}

export default EventItem
