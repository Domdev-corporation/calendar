// import './styles/index.css'
// import Chronous from './Chronous'

// export default Chronous

import ReactDOM from 'react-dom/client'
import './styles/index.css'

import { ModalProvider } from './context/ModalContext'
import Chronous from './Chronous'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="paper">
    <Chronous
      config={[
        { minWidth: 300, view: 'Week', mode: 'mobile' },
        { minWidth: 1000, view: 'Month', mode: 'desktop' },
        { minWidth: 1200, view: 'Week', mode: 'mobile' },
      ]}
      onClickCell={console.log}
      onClickEvent={console.log}
      newEventModal={({ day }) => <button>{day.getFullYear()}</button>}
      eventModal={() => <button>sfregreeg</button>}
      selectedEvent="98f6c30c-a95e-4794-b2ee-5c0143cbe0b5"
      onChangeView={console.log}
    />
  </div>,
)
