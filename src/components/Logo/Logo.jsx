import { Link } from 'react-router-dom';
import logo from '../../assets/logo-header.svg';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Digital Store" />
    </Link>
  );
}

export default Logo;