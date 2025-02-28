import React from 'react'
import './Cadastro_p.css'

const Cadastro_p = () => {
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" id="nome" placeholder='Nome e Sobrenome' required/>

          <input type="number" id="cpf" placeholder='CPF' required />
          <input type="tel" id="telefone" placeholder='Telefone' required/>
          <button>Próximo</button>
        </form>
        <h2>Possui cadastro? <a href="#">Entrar</a></h2>
      </div>
    </div>
  )
}

export default Cadastro_p
