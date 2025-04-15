import React, { useState } from 'react'
import "./BotonComprar.css"


const BotonComprar = ({Cantidad, setCantidad}) => {    
    const [mensaje, setMensaje] = useState("")

    const comprar = () => {
        setCantidad(Cantidad - 1)
        setMensaje("Gracias por su compra")
    }
        
    return (
        <div className='divBotonComprar'> 
            <button 
                className='boton-comprar'
                onClick={comprar}      
                disabled={Cantidad === 0}           
            >Comprar</button>
            <p>{mensaje}</p>
        </div>
    )
}

export default BotonComprar