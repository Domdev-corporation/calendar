import Flex from '../../components/Flex'

import { useTimePicker } from './useTimePicker'
import { TimePickerProps } from './types'
import { calculateTopIndentation, isDisplay } from './helpers'
import { PICKER_SIZE } from './constants'

export const TimePicker = ({
  endHour,
  startHour,
}: TimePickerProps): JSX.Element | null => {
  const { time } = useTimePicker(endHour, startHour)

  return isDisplay(endHour, startHour) ? (
    <Flex
      align="center"
      sx={{
        position: 'absolute',
        top:
          calculateTopIndentation(time, endHour - startHour) - PICKER_SIZE / 2,
        left: `-${PICKER_SIZE / 2}px`,
        right: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: PICKER_SIZE,
          height: PICKER_SIZE,
          background: 'red',
          borderRadius: '50%',
        }}
      />
      <div style={{ height: 1, background: 'red', width: '100%' }} />
    </Flex>
  ) : null
}
