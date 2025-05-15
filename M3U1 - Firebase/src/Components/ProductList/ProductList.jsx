import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getProducts } from '../../services/products'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) // Iniciar como true
    const [error, setError] = useState(null)

    const getProductsList = async () => {
        try {
            const products_list_response = await getProducts()
            
            // Validar que sea un array
            if (Array.isArray(products_list_response)) {
                setProducts(products_list_response)
            } else {
                setError('La respuesta no es un array válido')
                setProducts([]) // Asegurar que products sea array vacío
            }
        } catch (err) {
            setError('Error al cargar productos')
            console.error(err)
            setProducts([]) // Asegurar que products sea array vacío
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductsList()
    }, [])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        title={product.title}
                    />
                ))
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    )
}

export default ProductList