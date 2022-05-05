import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <div>
        <p>Veuillez vous connecter</p>
        <Link to="/signup"> Pas encore de compte ? Inscris-toi ! </Link>
      </div>
      <form className="login-form">
        <input placeholder="Email" type="text"></input>
        <input type="password" value="Mot de passe"></input>
        <input type="submit" value="Se connecter"></input>
      </form>
    </div>
  );
};
export default Login;
