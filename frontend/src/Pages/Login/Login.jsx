import './Login.css'
import Logo from "../../assets/Logo-pizzaria.png";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="login">
            <img className='logo' src={Logo} alt="logo da pizzaria"/>
          <h1>ENTRAR</h1>
          <form>
              <input type="email" name="email" id="email" placeholder="Email"/>
              <input type="password" name="password" id="password" placeholder="Digite sua Senha"/>
            <button type="submit">Entrar</button>
          </form>
          <h2>Não Cadastrado?<a href="#">Cadastre-se</a></h2>
        </div>
      </div>
    </div>
  )
}

export default Login
