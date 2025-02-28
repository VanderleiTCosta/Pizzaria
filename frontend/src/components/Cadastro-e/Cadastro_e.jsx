import React from 'react'
import './Cadastro_e.css'

const Cadastro_e = () => {
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" id="endereço" placeholder='Endereço' required/>

          <input type="number" id="cep" placeholder='CEP' required />
          <input type="number" id="numero" placeholder='Número da casa' required/>
          <button>Próximo</button>
        </form>
        <h2>Possui cadastro? <a href="#">Entrar</a></h2>
      </div>
    </div>
  )
}

export default Cadastro_e
