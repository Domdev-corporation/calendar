// import './styles/index.css'
// import Chronous from './Chronous'

// export default Chronous

import ReactDOM from 'react-dom/client'
import './styles/index.css'

import Chronous from './Chronous'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="paper">
    <Chronous
      view="Week"
      mode="mobile"
      config={[{ maxWidth: 850, view: 'Week' }]}
      onClickCell={console.log}
      onClickEvent={console.log}
      newEventModal={({ day }) => <button>{day.getFullYear()}</button>}
      eventModal={() => <button>sfregreeg</button>}
      selectedEvent="98f6c30c-a95e-4794-b2ee-5c0143cbe0b5"
      onChangeView={console.log}
    />
  </div>,
)
