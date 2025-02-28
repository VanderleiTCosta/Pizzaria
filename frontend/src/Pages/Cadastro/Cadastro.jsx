import React from 'react'
import './Cadastro.css'
import Logo from '../../assets/Logo-pizzaria.png';
import Cadastro_p from '../../components/Cadastro-p/Cadastro_p'
import Cadastro_e from '../../components/Cadastro-e/Cadastro_e';
import Cadastro_a from '../../components/Cadastro-a/Cadastro_a';

const Cadastro = () => {
  return (
    <div>
      {/* Adicionar a logica e os componentes de cadastro com rotas e verificaçao se esta preenchido */}
        <div className="tela">
              <div className="up_container">
                <img className='logo' src={Logo} alt="logo da pizzaria" />
              </div>
              <h1>CADASTRO</h1>
              <div className="down_container">
                <Cadastro_a/>
              </div>
        </div>
    </div>
  )
}

export default Cadastro
