import React from 'react'
import { BrowserRouter } from 'react-router'
import Routes from './features/routes/Routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
