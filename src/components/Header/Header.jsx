
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-header.svg';
import cart from '../../assets/mini-cart.svg';

function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const term = search.trim();

    if (term) {
      navigate(`/produtos?filter=${encodeURIComponent(term)}`);
    }
  }

  return (
    <header className="header">
      <div className="header-top container">
        <NavLink to="/">
          <img className="header-logo" src={logo} alt="Digital Store" />
        </NavLink>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" aria-label="Pesquisar">⌕</button>
        </form>

        <div className="header-actions">
          <a href="#cadastro" className="signup-link">Cadastre-se</a>
          <a href="#entrar" className="login-button">Entrar</a>
          <img className="cart-icon" src={cart} alt="Carrinho de compras" />
        </div>
      </div>

      <nav className="navigation container">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/produtos">Categorias</NavLink>
        <NavLink to="/produtos">Meus Pedidos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
