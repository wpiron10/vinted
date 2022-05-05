import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import de cookie
import Cookies from "js-cookie";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const fetchData = async (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",

        {
          email: email,
          password: password,
        }
      );
      setData(response.data);
      setIsLoading(false);

      Cookies.set("tokenLogin", response.data.token);
      console.log("tokenLogin", "< token login");
      console.log(response.data);
      navigate("/");
      alert("vous êtes connecté");
      console.log(email, password);
    } catch (error) {
      alert("Vos infos sont incorrectes");
    }
  };

  const navigate = useNavigate(); // rappel

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <div>
        <p>Veuillez vous connecter</p>
        <Link to="/signup"> Pas encore de compte ? Inscris-toi ! </Link>
      </div>
      <form className="login-form" onSubmit={fetchData}>
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <input type="submit" value="Se connecter"></input>
      </form>
    </div>
  );
};
export default Login;
