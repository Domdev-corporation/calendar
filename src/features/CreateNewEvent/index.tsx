import { MouseEvent } from 'react'
import { format } from 'date-fns'

import { useModals } from '../../contexts/ModalContext/useModals'
import { DateFormat } from '../../constants'
import Plus from '../../components/Plus'

import { CreateNewEventProps } from './types'

const CreateNewEvent = ({
  newEventModal = () => null,
  onCellClick,
}: CreateNewEventProps): JSX.Element => {
  const { onClose, onOpen } = useModals()

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    const date = {
      day: new Date(),
      time: String(format(new Date(), DateFormat.TIME_STAMP)),
    }

    onCellClick?.(date)

    onOpen(event, newEventModal({ onClose, ...date }))
  }

  return <Plus onClick={handleClick} className="header-grid__plus" />
}

export default CreateNewEvent
