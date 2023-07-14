import { ReactNode } from 'react'

export type DropDownProps<T> = {
  value: T
  onChange: (a: T) => void
  list: T[]
  dropdownArrow: ReactNode
}
