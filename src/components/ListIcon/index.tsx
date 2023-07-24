import { IconsT } from '../../types'
import colors from '../../theme/colors'
import { IconSizes } from '../../constants'

const ListIcon = ({
  sx = {},
  color = colors.red,
  size = IconSizes.sm,
}: IconsT): JSX.Element => {
  return (
    <svg
      style={sx}
      width={size}
      height={size}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M2 20C3.104 20 4 20.896 4 22C4 23.104 3.104 24 2 24C0.896 24 0 23.104 0 22C0 20.896 0.896 20 2 20ZM7 23H23C23.552 23 24 22.552 24 22C24 21.448 23.552 21 23 21H7C6.448 21 6 21.448 6 22C6 22.552 6.448 23 7 23ZM2 10C3.104 10 4 10.896 4 12C4 13.104 3.104 14 2 14C0.896 14 0 13.104 0 12C0 10.896 0.896 10 2 10ZM7 13H23C23.552 13 24 12.552 24 12C24 11.448 23.552 11 23 11H7C6.448 11 6 11.448 6 12C6 12.552 6.448 13 7 13ZM2 0C3.104 0 4 0.896 4 2C4 3.104 3.104 4 2 4C0.896 4 0 3.104 0 2C0 0.896 0.896 0 2 0ZM7 3H23C23.552 3 24 2.552 24 2C24 1.448 23.552 1 23 1H7C6.448 1 6 1.448 6 2C6 2.552 6.448 3 7 3Z" />
    </svg>
  )
}

export default ListIcon
