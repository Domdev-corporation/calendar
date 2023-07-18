import { MonthSlotProps } from '../types'
import { ModalsT, MonthCellType, UserEvents } from '../../../types'

export type MonthDesktopSlotProps = UserEvents<MonthCellType> &
  ModalsT<MonthCellType> &
  MonthSlotProps & {
    index: number
  }
