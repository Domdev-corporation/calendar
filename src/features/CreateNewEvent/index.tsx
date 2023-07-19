import { getHours } from 'date-fns'

import { useModals } from '../../context/ModalContext/useModals'
import Plus from '../../components/Plus'

import { CreateNewEventProps } from './types'

const CreateNewEvent = ({
  newEventModal = () => null,
}: CreateNewEventProps): JSX.Element => {
  const { onClose, onOpen } = useModals()

  return (
    <Plus
      onClick={e => {
        onOpen(
          e,
          newEventModal({
            onClose,
            day: new Date(),
            time: String(getHours(new Date())),
          }),
        )
      }}
      className="header-grid__plus"
    />
  )
}

export default CreateNewEvent
