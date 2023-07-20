import { format } from 'date-fns'

import { useModals } from '../../contexts/ModalContext/useModals'
import { DateFormat } from '../../constants'
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
            time: String(format(new Date(), DateFormat.TIME_STAMP_24)),
          }),
        )
      }}
      className="header-grid__plus"
    />
  )
}

export default CreateNewEvent
