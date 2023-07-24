import { getBlockHeight, getStartPosition } from '../../helpers'

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
  return (
    <div
      onClick={e => onClick(e)}
      className={`event-container ${isSelected && 'selected'} `}
      style={{
        zIndex: (overlapping ? overlapping : index) + 1,
        top: `${getStartPosition(start)}px`,
        height: `${getBlockHeight(duration)}px`,
        width: `calc(100% - ${gap}px)`,
        right: 0,
      }}
    >
      {children}
    </div>
  )
}

export default EventContainer
