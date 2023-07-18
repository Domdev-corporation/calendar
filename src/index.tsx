// import './styles/index.css'
// import Chronous from './Chronous'

// export default Chronous

import ReactDOM from 'react-dom/client'
import './styles/index.css'

import Chronous from './Chronous'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="paper">
    <Chronous
      mode="Week"
      config={[{ maxWidth: 850, mode: 'Week' }]}
      onClickCell={console.log}
      onClickEvent={console.log}
      newEventModal={({ day }) => <button>{day.getFullYear()}</button>}
      eventModal={() => <button>sfregreeg</button>}
      selectedEvent="98f6c30c-a95e-4794-b2ee-5c0143cbe0b5"
      onChangeMode={console.log}
    />
  </div>,
)
