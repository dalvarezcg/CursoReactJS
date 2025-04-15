import React from 'react'
import Contador from './components/Contador/Contador'
import Productos from './components/Productos/Productos'
import BotonComprar from './components/BotonComprar/BotonComprar'

function App() {
  return (
    <div className='container-app'>
      <h1>Mi comercio</h1>
      <Productos/>
    </div>
  )
}
export default App