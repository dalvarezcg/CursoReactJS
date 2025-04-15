import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'

function App() {
  console.log(useLocation)
  return (
    <Routes>
      <Route 
        path="/" 
        element={<HomeScreen/>}/>
      
      <Route 
        path={"/contact"} 
        element={<ContactScreen/>}/>
    </Routes>
  )
}
export default App
