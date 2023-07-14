import { CSSProperties, RefObject } from 'react'

import { CommonStylesT, ReactChildrenT } from '../../types'

export type FlexProps = ReactChildrenT &
  CommonStylesT & {
    direction?: CSSProperties['flexDirection']
    justify?: CSSProperties['justifyContent']
    wrap?: CSSProperties['flexWrap']
    align?: CSSProperties['alignItems']
    spacing?: CSSProperties['gap']
    refObject?: RefObject<HTMLDivElement>
    onClick?: () => void
  }
