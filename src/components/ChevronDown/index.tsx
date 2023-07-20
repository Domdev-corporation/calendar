import { IconsT } from '../../types'
import colors from '../../theme/colors'
import { IconSizes } from '../../constants'

const ChevronDown = ({
  sx = {},
  color = colors.red,
  size = IconSizes.xs,
}: IconsT): JSX.Element => {
  return (
    <svg
      style={sx}
      width={size}
      height={size}
      fill={color}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 11 6"
      className="dropdown-chevron"
    >
      <path d="M0.117961 0.682839C-0.134029 0.430859 0.0444411 0 0.400801 0H9.66939C10.0258 0 10.2043 0.430859 9.95229 0.682839L5.31799 5.31719C5.16179 5.47339 4.90849 5.47339 4.75229 5.31719L0.117961 0.682839Z"></path>
    </svg>
  )
}

export default ChevronDown
