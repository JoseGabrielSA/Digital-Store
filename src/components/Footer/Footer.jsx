
import logo from '../../assets/logo-footer.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-about">
          <img src={logo} alt="Digital Store" className="footer-logo" />

          <p>
            A Digital Store oferece tênis selecionados para quem procura
            qualidade, conforto e estilo. Encontre aqui seu próximo
            par favorito!
          </p>

          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">
              <img src={facebook} alt="" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img src={instagram} alt="" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-info">
          <h3>Informação</h3>
          <a href="#sobre">Sobre a Digital Store</a>
          <a href="#seguranca">Segurança</a>
          <a href="#wishlist">Wishlist</a>
          <a href="#blog">Blog</a>
          <a href="#trabalhe-conosco">Trabalhe conosco</a>
          <a href="#meus-pedidos">Meus pedidos</a>
        </div>

        <div className="footer-info">
          <h3>Categorias</h3>
          <a href="#tenis">Tênis</a>
        </div>

        <div className="footer-info">
          <h3>Contato</h3>
          <p>Av. Digital Store, 1000</p>
          <p>Fortaleza - CE</p>
          <p>(85) 0000-0000</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Digital Store. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
