import Gallery from '../../components/Gallery/Gallery';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import products from '../../data/products';

function HomePage() {
  const banners = [
    '/home-slide-1.jpeg',
    '/home-slide-2.jpeg',
    '/home-slide-3.jpeg',
    '/home-slide-4.jpeg',
    '/home-slide-5.jpeg',
    '/home-slide-6.jpeg',
    '/home-slide-7.jpeg',
    '/home-slide-8.jpeg'
  ];

  return (
    <div className="home-page">
    <Gallery images={banners} className="home-gallery" />
      <div className="home-content container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collections-grid">
            <img src="/collection-1.png" alt="Coleção especial 1" />
            <img src="/collection-2.png" alt="Coleção especial 2" />
            <img src="/collection-3.png" alt="Coleção especial 3" />
          </div>
        </Section>

        <Section
          title="Produtos em alta"
          link={{ text: 'Ver todos →', href: '/produtos' }}
        >
          <ProductListing products={products} />
        </Section>
      </div>
    </div>
  );
}

export default HomePage;