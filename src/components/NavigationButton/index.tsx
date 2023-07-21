import IconButton from '../IconButton'

import { NavigationButtonProps } from './types'

export const NavigationButton = ({
  isDisabled,
  onClick,
  customButton,
  ariaLabel,
  defaultButton,
  defaultStyles,
}: NavigationButtonProps): JSX.Element =>
  customButton ? (
    <IconButton
      isDisabled={isDisabled}
      onClick={onClick}
      resetDefaultStyles
      ariaLabel={ariaLabel}
      sx={{
        cursor: 'pointer',
      }}
    >
      {customButton}
    </IconButton>
  ) : (
    <IconButton
      isDisabled={isDisabled}
      onClick={onClick}
      className={defaultStyles}
      outlined
      ariaLabel={ariaLabel}
    >
      {defaultButton}
    </IconButton>
  )
