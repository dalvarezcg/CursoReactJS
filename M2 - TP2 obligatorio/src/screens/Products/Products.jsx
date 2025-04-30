import React, { useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/Product/Product'

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const ObtenerProductos = async () => {
    setCargando(true);
    const response = await fetch('http://localhost:5173/productos.json');
    const data = await response.json();
    setProductos(data);
    setCargando(false);
  }

  useEffect(() => {
    ObtenerProductos();
  }, []);

  console.log({cargando})
    console.log({productos})
  
  return (
    <div>
      <Navbar/>
      <h1>PRODUCTOS</h1>
      {
        productos.map(producto => (
          <Product key={producto.id} {...producto}/>          
        ))
      }
    </div>
  )
}

export default ProductList
