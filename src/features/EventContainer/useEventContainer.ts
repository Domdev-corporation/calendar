import { useEffect, useState } from 'react'

import { getCellHeight } from '../../helpers'

export const useEventContainer = () => {
  const [cellHeight, setCellHeight] = useState<number>(0)

  useEffect(() => {
    setCellHeight(getCellHeight())
  }, [])

  return { cellHeight }
}
