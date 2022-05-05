// import du useState

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Déclaration des states du form

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [optin, setOptin] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  // Déclaration des fonctions  du form (onChange, onSubmit)

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleOptinChange = (event) => {
    const value = event.target.checked;
    setOptin(value);
  };

  // Au submit on envoit les données via une requete post (url, {objet à envoyer})
  const navigate = useNavigate(); // rappel
  const fetchData = async (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire

    const response = await axios.post(
      `https://lereacteur-vinted-api.herokuapp.com/user/signup`,

      {
        username: username,
        email: email,
        password: password,
        optin: optin,
      }
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);

    navigate("/login");

    alert("ça marche");
    console.log(email, password);
  };

  return (
    <div>
      <form className="login-form" onSubmit={fetchData}>
        <input
          placeholder="Nom d'utilisateur"
          onChange={handleUsernameChange}
          type="text"
          value={username}
        ></input>
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
        <input
          placeholder="S'inscrire à notre newsletter"
          type="checkbox"
          value={optin}
          onChange={handleOptinChange}
        ></input>
        {/* <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes et
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p> */}
        <input type="submit" value="S'inscrire"></input>
      </form>
    </div>
  );
};
export default Signup;
