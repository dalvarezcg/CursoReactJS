import React, { useState } from 'react'

const Contador = () => {
    
    const [valor_contador, setContador] = useState(10);
    
    const sumar = () => {
        setContador(valor_contador + 1);
    }

    const restar = () => {
        setContador(valor_contador - 1);
    }
    console.log("cargue el contador")
  return (
    
    <div>
      <button 
        onClick={restar}
        disabled ={valor_contador === 0}
        >-</button>
      <span> {valor_contador}</span>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default Contador
