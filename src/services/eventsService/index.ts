import { CellT, WeekDayRoesT } from '../../types'
import { isOverlappingEvents } from '../../helpers'
import { EVENT_GAP } from '../../constants'

import { GetCurrentEventAndIndexReturnT } from './types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const eventsService = (rows: WeekDayRoesT[]) => {
  const getEvents = (): CellT[][] => {
    return rows
      .map(item => item.cells)
      .reduce((sum, current) => {
        if (!sum.length) {
          return current
        }

        return sum.map((item, index) => [...item, ...current[index]])
      }, [])
  }

  const getCurrentEvents = (id: string): CellT[] => {
    const index = getEvents().findIndex(events =>
      events.some(event => event.id === id),
    )

    const currentEvents = getEvents()[index].sort(
      (prev, next) =>
        new Date(prev.start).getTime() - new Date(next.start).getTime(),
    )

    return currentEvents
  }

  const getCurrentEventAndIndex = (
    id: string,
    events: CellT[],
  ): GetCurrentEventAndIndexReturnT => {
    const event = events.find(event => event.id === id)
    const eventIndex = events.findIndex(event => event.id === id)

    return { event, eventIndex }
  }

  const getGap = (id: string): number => {
    const currentEvents = getCurrentEvents(id)
    const { event, eventIndex } = getCurrentEventAndIndex(id, currentEvents)

    let matches = 0

    currentEvents.forEach((item, index) => {
      if (isOverlappingEvents(item, event) && index < eventIndex) {
        matches += 1
      }
    })

    return matches ? matches * EVENT_GAP : matches
  }

  return { getGap, getEvents }
}
