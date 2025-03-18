import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import MainDashboardpage from './pages/MainDashboardpage'

const App = () => {
  return (
    <div className=''>
     
  <Routes>
    <Route path='/' element={<div className='flex justify-center items-center bg-blue-50'><Login/></div>}/>
    <Route path='/dashboard' element={<MainDashboardpage/>}/>
  </Routes>
    </div>
  )
}

export default App
