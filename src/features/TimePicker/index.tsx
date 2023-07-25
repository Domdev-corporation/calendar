import Flex from '../../components/Flex'
import './styles.css'

import { useTimePicker } from './useTimePicker'
import { TimePickerProps } from './types'
import { isDisplay } from './helpers'
import { PICKER_SIZE } from './constants'

export const TimePicker = ({
  endHour,
  startHour,
}: TimePickerProps): JSX.Element | null => {
  const { topIndentation } = useTimePicker(endHour, startHour)

  return isDisplay(endHour, startHour) ? (
    <Flex
      className="timeline"
      sx={{
        top: topIndentation - PICKER_SIZE / 2,
        left: `-${PICKER_SIZE / 2}px`,
      }}
    >
      <div className="timeline__head" />
      <div style={{ height: 1, background: 'red', width: '100%' }} />
    </Flex>
  ) : null
}
