import { ReactNode } from 'react'
import { getHours } from 'date-fns'

import { NewEventModalT } from '../../types'
import { useModals } from '../../context/ModalContext/useModals'
import Plus from '../../components/Plus'

type CreateNewEventProps = { newEventModal?: (a: NewEventModalT) => ReactNode }

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
