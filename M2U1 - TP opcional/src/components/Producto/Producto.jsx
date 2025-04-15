import React, { useState } from "react"
import BotonComprar from "../BotonComprar/BotonComprar"
import "./Producto.css"


export const Producto =({Nombre, Imagen, PrecioReal, PrecioFinal, PorcentajeOferta, CantidadDisponible}) => {
    const [cantidad, setCantidad] = useState(CantidadDisponible);
    
    return (
        <div>
            <a><img src={Imagen} /></a>
            <div className="nombreProducto">{Nombre}</div>
            <div className="precioReal">${PrecioReal}</div>
            <div className="precioFinal">${PrecioFinal}</div>
            <div className="porcentajeOferta">{PorcentajeOferta}%OFF</div>
            <div className="cantidadDisponible">{cantidad}</div>
            <BotonComprar Cantidad={cantidad} setCantidad={setCantidad}/>
        </div>
    )    
}

