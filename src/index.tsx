// import './styles/index.css'
// import Chronous from './features/Chronous'

// export default Chronous

import ReactDOM from 'react-dom/client'
import './styles/index.css'

import Chronous from './features/Chronous'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="paper">
    <Chronous
      view="Week"
      mode="desktop"
      config={[{ minWidth: 400, mode: 'desktop' }]}
      //   onClickCell={console.log}
      //   onClickEvent={console.log}
      selectedEvent="98f6c30c-a95e-4794-b2ee-5c0143cbe0b5"
    />
  </div>,
)
