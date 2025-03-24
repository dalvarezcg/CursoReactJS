const ProductCard = (props) => {
    return (
      <div className="product-card">
        <h2 className="product-card-title">{props.titulo}</h2>
        <img className="product-img" src='https://http2.mlstatic.com/D_NQ_NP_938585-MLU73121330750_122023-O.webp' />
        <span className="product-card-price">Precio: $</span>
      </div>      
    )
  }
  
  export default ProductCard    