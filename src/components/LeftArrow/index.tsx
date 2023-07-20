import { IconsT } from '../../types'
import { IconSizes } from '../../constants'

const LeftArrow = ({
  sx = {},
  color = 'red',
  size = IconSizes.md,
}: IconsT): JSX.Element => {
  return (
    <svg
      style={sx}
      width={size}
      height={size}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
      ></path>
    </svg>
  )
}

export default LeftArrow
