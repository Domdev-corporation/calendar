import { Fragment } from 'react'
import { format } from 'date-fns'

import { EventListItem } from '../EventListItem'
import { isCurrentDay } from '../../helpers'
import { DateFormat } from '../../constants'
import Text from '../../components/Text'
import Flex from '../../components/Flex'

import './styles.css'
import { EventsListProps } from './types'

const EventsList = ({ days, events }: EventsListProps): JSX.Element => {
  return (
    <Flex className="event-list" direction="column" spacing={10}>
      {days.map((day, index) => {
        return events[index].length ? (
          <Fragment key={index}>
            <Text
              className={`event-title ${
                isCurrentDay(day) ? 'event-title_current-day' : ''
              }`}
            >
              {format(new Date(day), DateFormat.WEEKDAY_DAY_MONTH)}
            </Text>
            {events[index].map(({ end, start, id, title, color }) => {
              return (
                <EventListItem
                  key={id}
                  color={color}
                  description={title}
                  endDate={new Date(end)}
                  startDate={new Date(start)}
                />
              )
            })}
          </Fragment>
        ) : null
      })}
    </Flex>
  )
}

export default EventsList
