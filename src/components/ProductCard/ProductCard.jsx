
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const hasDiscount = product.price > product.priceDiscount;

  function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>

      <div className="product-prices">
        {hasDiscount && (
          <span className="old-price">
            {formatPrice(product.price)}
          </span>
        )}

        <strong>
          {formatPrice(product.priceDiscount)}
        </strong>
      </div>
    </Link>
  );
}

export default ProductCard;
