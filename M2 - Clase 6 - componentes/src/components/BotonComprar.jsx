import React, { useState } from 'react'

const ESTADOS_DISPONIBLES = object.freeze({
    COMPRADO: "COMPRADO",
    NO_COMPRADO:"NO_COMPRADO",
    CARGANDO: "CARGANDO"
})

const BotonComprar = () => {    
    const estado_inicial = ESTADOS_DISPONIBLES.NO_COMPRADO
    const [estado_boton, setEstadoBoton]= useState(estado_inicial)
    
    const comprar = () => {
        setEstadoBoton(ESTADOS_DISPONIBLES.CARGANDO)
    }

    const reset =() => {
        setEstadoBoton(estado_inicial)
    }

    let content
    if (estado_boton === ESTADOS_DISPONIBLES.COMPRADO) {
        content = <button>Comprado</button>
    } else if (estado_boton === ESTADOS_DISPONIBLES.CARGANDO) {
        content = <button>Cargando</button>
    } else {
        content = <button onClick={comprar} disabled>Comprar</button>
    }   
  return (    
    <div>
        {content}
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default BotonComprar
