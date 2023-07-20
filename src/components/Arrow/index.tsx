import { ArrowIconT } from '../../types'
import { ArrowDirections, IconSizes } from '../../constants'

import { LEFT_ARROW_DRAW_PATH, RIGHT_ARROW_DRAW_PATH } from './constants'

const Arrow = ({
  sx = {},
  color = 'black',
  size = IconSizes.md,
  direction = ArrowDirections.LEFT,
}: ArrowIconT): JSX.Element => {
  const pathData =
    direction === ArrowDirections.LEFT
      ? LEFT_ARROW_DRAW_PATH
      : RIGHT_ARROW_DRAW_PATH

  return (
    <svg
      style={sx}
      width={size}
      height={size}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path fill={color} d={pathData}></path>
    </svg>
  )
}

export default Arrow
