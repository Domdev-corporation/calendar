import { format } from 'date-fns'

import { DateFormat } from '../../../constants'

export const convertDateToMobileFormat = (date: Date): string => {
  const formattedDate = format(date, DateFormat.DAY_OF_WEEK_DAY_MONTH_NAME_YEAR)

  return formattedDate
}
