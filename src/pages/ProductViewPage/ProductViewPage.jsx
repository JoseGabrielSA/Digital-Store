
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import products from '../../data/products';

function ProductViewPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [message, setMessage] = useState('');

  if (!product) {
    return (
      <div className="container not-found">
        <h1>Produto não encontrado</h1>
        <Link to="/produtos">Voltar para os produtos</Link>
      </div>
    );
  }

  const images = product.gallery || [product.image];

  const recommended = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  function handleBuy() {
    if (!selectedSize || !selectedColor) {
      setMessage('Selecione um tamanho e uma cor antes de continuar.');
      return;
    }

    setMessage(
      `Você selecionou ${product.name}, tamanho ${selectedSize}, cor ${selectedColor}.`
    );
  }

  return (
    <div className="product-view container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> /{' '}
        <Link to="/produtos">Produtos</Link> / {product.name}
      </div>

      <div className="product-detail">
        <Gallery
          key={product.id}
          images={images}
          showThumbs
          className="detail-gallery"
        />

        <div className="detail-information">
          <BuyBox
            name={product.name}
            reference={`DS-${product.id}00`}
            stars={5}
            rating={24}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
          >
            <ProductOptions
              sizes={['38', '39', '40', '41', '42', '43']}
              colors={product.colors}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              onSizeChange={setSelectedSize}
              onColorChange={setSelectedColor}
            />

            <button className="buy-button" onClick={handleBuy}>
              COMPRAR
            </button>

            {message && (
              <p className="buy-message" role="status">
                {message}
              </p>
            )}
          </BuyBox>
        </div>
      </div>

      <div className="recommended-products">
        <Section
          title="Produtos recomendados"
          link={{ text: 'Ver todos →', href: '/produtos' }}
        >
          <ProductListing products={recommended} />
        </Section>
      </div>
    </div>
  );
}

export default ProductViewPage;
