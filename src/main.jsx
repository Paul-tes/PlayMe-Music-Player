import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// redux imports
import { Provider } from 'react-redux'
import { store } from './ReduxStore/store.js'

// basic css assets
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
