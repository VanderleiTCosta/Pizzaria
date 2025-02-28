import './Header.css';
import Logo from '../../assets/Logo-pizzaria.png';
import { FiShoppingCart } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";


const Header = () => {
  return (
    <div>
        <div className="container">
          <div className="logo-header">
            <img className='logo' src={Logo} alt='logo pizzaria'/>
          </div>
          <div className="infos">
            <h1>Olá, Vanderlei</h1>
            <h2><FaLocationDot className='gps' />
            Sitio Morros</h2>
          </div>
            <div className="carrinho"><FiShoppingCart  className='cart'/></div>
        </div>
    </div>
  ) 
}

export default Header;