import { format } from 'date-fns'

import {
  GetSlotAttributes,
  SlotAttributes,
} from '../../MonthSlots/MonthSlotsDesktop/types'
import { MAX_DISPLAYED_SLOTS } from '../../MonthSlots/constants'
import { DateFormat } from '../../../constants'

export const getSlotAttributes = ({
  slot,
  index,
  length,
}: GetSlotAttributes): SlotAttributes => {
  const isCollapsedSlot =
    index >= MAX_DISPLAYED_SLOTS && length > MAX_DISPLAYED_SLOTS

  const slotTitle = isCollapsedSlot
    ? `${length - MAX_DISPLAYED_SLOTS} more`
    : slot.title

  const slotTime = isCollapsedSlot
    ? ''
    : format(new Date(slot.start), DateFormat.HOUR_MERIDIEM)

  return { isCollapsedSlot, slotTitle, slotTime }
}
