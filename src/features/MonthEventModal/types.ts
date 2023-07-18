import { ForwardedRef } from 'react'

import { MonthCellType, MonthRowsT, UserClickEvent } from '../../types'

export type MonthEventModalProps = UserClickEvent<MonthCellType> & {
  cell: MonthRowsT
  closeModalHandler: (value: boolean) => void
  ref: ForwardedRef<any>
}
