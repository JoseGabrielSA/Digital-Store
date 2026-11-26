import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>

      <div className="product-prices">
        <span className="old-price">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>

        <strong>
          R$ {product.priceDiscount.toFixed(2).replace('.', ',')}
        </strong>
      </div>
    </Link>
  );
}

export default ProductCard;