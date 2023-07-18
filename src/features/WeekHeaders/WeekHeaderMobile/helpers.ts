import { format } from 'date-fns'

import { DateFormat } from '../../../constants'

export const convertDateToMobileFormat = (date: Date): string => {
  const formattedDate = format(date, DateFormat.DAYOFWEEK_DAY_MONTHNAME_YEAR)

  return formattedDate
}
