import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo-pizzaria.png';

const Header = () => {
  return (
    <div>
        <div className="container">
            <img src={Logo} alt='logo pizzaria'/>
        </div>
    </div>
  )
}

export default Header