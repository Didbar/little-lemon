import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import Reservations from './routes/Reservation'

import UnderConstruction from './components/pages/UnderConstruction'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reservations' element={<Reservations />} />
      <Route path='/about' element={<UnderConstruction />} />
      <Route path='/menu' element={<UnderConstruction />} />
      <Route path='/orderOnline' element={<UnderConstruction />} />
      <Route path='/login' element={<UnderConstruction />} />
      <Route path='/Donate' element={<UnderConstruction />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
