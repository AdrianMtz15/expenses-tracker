import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { AppContextProvider } from './context/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </AppContextProvider>
)
