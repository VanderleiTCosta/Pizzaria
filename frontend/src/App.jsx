import { useState, useEffect } from "react";
import Inicio from "./Pages/Inicio/Inicio";
import Login from "./Pages/Login/Login";
//import Cadastro from "./Pages/Cadastro/Cadastro";
//import Home from "./Pages/Home/Home";


const App = () => {

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 2000); // Espera 2 segundos
  }, []);

  return carregando ? <Inicio /> : <Login />;

};

export default App;
