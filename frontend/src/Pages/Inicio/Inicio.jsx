import "./Inicio.css";
import Logo from "../../assets/Logo-pizzaria.png";
import Loading from "../../components/Loading/Loading";

const Inicio = () => {
  return (
    <div>
      <div className="tela">
        <img className="logo" src={Logo} alt="logo da pizzaria" />
        <Loading />
      </div>
    </div>
  );
};

export default Inicio;
