function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children
}) {
  return (
    <div className="buy-box">
      <h1>{name}</h1>

      <p className="product-reference">
        Referência: {reference}
      </p>

      <div className="product-rating">
        <span className="stars">{'★'.repeat(stars)}</span>
        <span>{rating} avaliações</span>
      </div>

      <div className="detail-prices">
        <span className="detail-old-price">
          R$ {price.toFixed(2).replace('.', ',')}
        </span>

        <strong>
          R$ {priceDiscount.toFixed(2).replace('.', ',')}
        </strong>
      </div>

      <p className="detail-description">{description}</p>

      {children}
    </div>
  );
}

export default BuyBox;