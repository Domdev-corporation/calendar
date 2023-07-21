import './styles.css'
import Flex from '../Flex'

import { IconButtonProps } from './types'

const IconButton = ({
  children,
  className = '',
  sx,
  onClick = () => {},
  outlined = false,
  isDisabled = false,
  resetDefaultStyles = false,
  ariaLabel,
}: IconButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ border: outlined ? '' : 'none', ...sx }}
      className={`${resetDefaultStyles ? 'button-reset' : 'icon-button'} ${
        isDisabled ? 'disabled-button' : ''
      } ${className}`}
      aria-label={ariaLabel}
    >
      <Flex align="center" justify="center">
        {children}
      </Flex>
    </button>
  )
}

export default IconButton
