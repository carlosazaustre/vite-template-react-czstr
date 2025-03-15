import React from 'react'
import { Routes as Switch, Route } from 'react-router'
import Home from '../home/pages/Home.tsx'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      {/* Add more routes here as needed */}
    </Switch>
  )
}

export default Routes
