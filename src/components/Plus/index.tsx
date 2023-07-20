import { MouseEvent } from 'react'

import { CommonStylesT } from '../../types'

const Plus = ({
  className,
  sx,
  onClick,
}: CommonStylesT & {
  onClick: (event: MouseEvent<HTMLDivElement>) => void
}): JSX.Element => (
  <div
    onClick={onClick}
    className={className}
    style={{ display: 'inherit', ...sx }}
  >
    <svg fill="#ea4d3f" height="17px" width="17px" viewBox="0 0 455 455">
      <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5   455,242.5 " />
    </svg>
  </div>
)

export default Plus
