import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import InicioSesion from './screens/InicioSesion/InicioSesion'
import ProductList from './screens/Products/Products'
import ProductDetail from './screens/ProductDetail/ProductDetail'

function App() {

  return (
    <div>      
      <h1>HOLA</h1>     
      <Routes>
        <Route path='/' element={<InicioSesion/>}/>
        <Route path='/productos' element={<ProductList/>}/>
        <Route path='/producto-detalle' element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
