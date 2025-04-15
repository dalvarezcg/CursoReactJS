import React, { useEffect, useState } from 'react'
import { Producto } from '../Producto/Producto'
import './Productos.css'

const Productos = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)
    const obtenerProductos = async () => {
        setCargando(true)
        const respuesta = await fetch('http://localhost:5173/productos.json')
        const data = await respuesta.json()
        setProductos(data)
        setCargando(false)
    }
    
    //Nos aseguramos que obtener productos se ejecute una vez
    useEffect(
        () => { 
            obtenerProductos()
        },
        []
    )
    console.log({cargando})
    console.log({productos})
    
    return (
        <div className='productosWrapper'>
          {
          productos.map(producto => 
            <Producto key={producto.id} 
                      Nombre={producto.nombre} 
                      Imagen= {producto.imagen}
                      PrecioReal= {producto.precioReal}
                      PrecioFinal= {producto.precioFinal}
                      PorcentajeOferta= {producto.porcentajeOferta}
                      CantidadDisponible={producto.cantidadDisponible}
            />
          )
        }
        </div>  
    )
}

export default Productos