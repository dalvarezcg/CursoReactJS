//rafce
import React, { use } from 'react'

const Productos = () => {
    const [productos, setProductos] = useState([])  
    const [cargando, setCargando] = useState(false)

    const obtenerProductos = async () => {
        setCargando(true)
        const respuesta = await fetch('http://localhost:5173/productos.json')
        let data = await respuesta.json()
        console.log(data)
        setCargando(false)
    }
    //fetch devuelve una promesa

    useEffect(() => {
        obtenerProductos()
        },[])
    
    console.log(cargando)
    console.log(productos)
  return (
    <div>Productos</div>
  )
}

export default Productos
