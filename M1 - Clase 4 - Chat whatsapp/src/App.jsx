import React  from 'react'
import ProductCard from './components/ProductCard/ProductCard'

//una funcion que devuelve codigo jsx es un componenterun
function App() {
  let nombre = 'diego'
  let ahorro= 20
  
  const getBalance = ()=>{
    return ahorro;
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Enviado')
  }

  const handleClickButtonColor = (color) => {
    alert('cliqueaste el boton ' + color)
  }

  return (
    <div>
      <span>Tu balance es ${getBalance()}</span>
      <h1>Hola {nombre}</h1>
      App Component
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Ingresa tu nombre</label>
        <input type='text' id='nombre'></input>
        <input type='submit'></input>        
      </form>
      <button onClick={()=> handleClickButtonColor('rojo')}>Rojo</button>
      <button onClick={()=> handleClickButtonColor('amarillo')}>Amarillo</button>
      <button onClick={()=> handleClickButtonColor('azul')}>Azul</button>

      <ProductCard titulo = {'Sommier'}/>
      <ProductCard titulo = {'Pc gammer'}/>
      <ProductCard titulo = {'Maceta'}/>
      </div>
  )
}



let objeto =  {nombre: 'diego', apellido: 'alvarez'}

const presentarme = (persona) => {
  console.log (persona.nombre + persona.apellido)
}
presentarme(objeto)

export default App