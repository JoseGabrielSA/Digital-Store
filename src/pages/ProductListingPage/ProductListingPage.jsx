
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../../data/products';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import normalizeText from '../../utils/normalizeText';

function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter') || '';

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [sort, setSort] = useState('relevance');

  function toggleFilter(value, selected, setSelected) {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  }

  function clearAll() {
    setSearchParams({});
    setCategories([]);
    setBrands([]);
    setConditions([]);
    setSort('relevance');
  }

  const hasActiveFilters =
    searchTerm ||
    categories.length > 0 ||
    brands.length > 0 ||
    conditions.length > 0 ||
    sort !== 'relevance';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm) {
      const normalizedSearch = normalizeText(searchTerm);

      result = result.filter((product) => {
        const productInfo = normalizeText(
          `${product.name} ${product.category} ${product.brand}`
        );

        return productInfo.includes(normalizedSearch);
      });
    }

    if (categories.length) {
      result = result.filter((product) =>
        categories.includes(product.category)
      );
    }

    if (brands.length) {
      result = result.filter((product) =>
        brands.includes(product.brand)
      );
    }

    if (conditions.length) {
      result = result.filter((product) =>
        conditions.includes(product.condition)
      );
    }

    if (sort === 'lowest') {
      result.sort((a, b) => a.priceDiscount - b.priceDiscount);
    }

    if (sort === 'highest') {
      result.sort((a, b) => b.priceDiscount - a.priceDiscount);
    }

    return result;
  }, [searchTerm, categories, brands, conditions, sort]);

  return (
    <div className="listing-page container">
      <div className="listing-heading">
        <h1>
          {searchTerm ? `Resultados para "${searchTerm}"` : 'Produtos'}
        </h1>

        <label className="sort-control">
          Ordenar por:
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="relevance">Mais relevantes</option>
            <option value="lowest">Menor preço</option>
            <option value="highest">Maior preço</option>
          </select>
        </label>
      </div>

      <div className="listing-layout">
        <aside className="filters">
          <h2>Filtrar por</h2>

          <FilterGroup
            title="Categoria"
            options={['Tênis']}
            selected={categories}
            onChange={(value) =>
              toggleFilter(value, categories, setCategories)
            }
          />

          <FilterGroup
            title="Marca"
            options={['Nike', 'Adidas', 'Puma']}
            selected={brands}
            onChange={(value) =>
              toggleFilter(value, brands, setBrands)
            }
          />

          <FilterGroup
            title="Condição"
            options={['Novo', 'Usado']}
            selected={conditions}
            onChange={(value) =>
              toggleFilter(value, conditions, setConditions)
            }
          />

          {hasActiveFilters && (
            <button className="clear-filters" onClick={clearAll}>
              Limpar tudo
            </button>
          )}
        </aside>

        <section className="listing-results">
          <p className="results-count">
            {filteredProducts.length} produto(s) encontrado(s)
          </p>

          {filteredProducts.length > 0 ? (
            <ProductListing products={filteredProducts} />
          ) : (
            <p className="empty-results">
              Nenhum produto encontrado. Tente alterar os filtros.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProductListingPage;
