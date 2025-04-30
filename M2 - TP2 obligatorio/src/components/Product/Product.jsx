import React from 'react'

const Product =({nombre, imagen, precioFinal}) => {
    
    return (
        <div>
            <a><img src={imagen} /></a>
            <div>{nombre}</div>
            <div> {precioFinal}</div>
        </div>
    )    
}
export default Product