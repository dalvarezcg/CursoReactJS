import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreenControlado'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'


const App = () => {
  console.log(useLocation())
  const [esAdmin, setEsAdmin] = useState()



  return (
    <div>
      
      <button onClick={() => setEsAdmin(true)}>Soy admin</button>
      <h1>El cliente es: {esAdmin ? 'admin' : 'no admin'}</h1>
      <Routes>
        <Route
          path='/'
          element={<HomeScreen />}
        />
        <Route
          path={`/contact`}
          element={<ContactScreen />}
        />
        <Route 
          path='/product/:product_id'
          element={<ProductDetailScreen/>}
        />
      </Routes>
      
    </div>

  )
}

export default App