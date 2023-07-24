import { getBlockHeight, getStartPosition } from '../../helpers'

import { useEventContainer } from './useEventContainer'
import { EventContainerProps } from './types'

const EventContainer = ({
  duration,
  index,
  isSelected,
  overlapping,
  start,
  children,
  onClick,
  gap,
}: EventContainerProps): JSX.Element => {
  const { cellHeight } = useEventContainer()

  return (
    <div
      onClick={e => onClick(e)}
      className={`event-container ${isSelected && 'selected'} `}
      style={{
        zIndex: (overlapping ? overlapping : index) + 1,
        top: `${getStartPosition(start, cellHeight)}px`,
        height: `${getBlockHeight(cellHeight, duration)}px`,
        width: `calc(100% - ${gap}px)`,
        right: 0,
      }}
    >
      {children}
    </div>
  )
}

export default EventContainer
