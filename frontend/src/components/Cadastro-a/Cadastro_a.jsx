import React from 'react'
import './Cadastro_a.css'

const Cadastro_a = () => {
  return (
    <div>
      <div className="container">
        <form>
          <input type="email" id="email" placeholder='Digite seu email' required/>

          <input type="text" id="usuario" placeholder='Nome de usuário' required/>

          <input type="password" id="senha" placeholder='Digite sua senha' required />
          
          <button>Cadastrar</button>
        </form>
        <h2>Possui cadastro? <a href="#">Entrar</a></h2>
      </div>
    </div>
  )
}

export default Cadastro_a
