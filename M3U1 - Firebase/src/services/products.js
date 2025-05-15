import {collection, getDocs} from 'firebase/firestore'
import database from '../config/firebase'

export const getProducts = async () =>{
    try{
        const products_collection_reference = collection(database, 'products')
        getDocs(products_collection_reference)
        const result = await getDocs(products_collection_reference)

        const product_list_formatter = (result) => console.log("result:", result)
        result.docs.map(
            (document) => {
                return {
                    id: document.id,
                    ...document.data()
                }
            }
    )
    return product_list_formatter
    }

    catch(error){
        console.error('Error al obtener productos:', error)
        return null
    }
}

/*export const getProducts = async () =>{
    try{
        const response = await fetch(
            'http://localhost:5173/api/products.json',
            {
                method: 'GET'
            }
        )
        const data = await response.json()
        return data
    }
    catch(error){
        console.error('Error al obtener productos:', error)
        return null
    }
}*/

export const getProductById = async ({product_id}) => {
    const  products = await getProducts()
    return products.find(product => product.id == product_id)

}