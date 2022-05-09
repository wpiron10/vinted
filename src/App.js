import "./App.css";

// import des composants router, routes, route
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import de cookie
import Cookies from "js-cookie";

// import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// import des components
import Header from "./components/Header";
import Signup from "./pages/Signup";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

// import Offers from "./components/Offers";

function App() {
  // creation d'une fonction de connexion / deconnexion

  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      // connexion
      console.log("Création d'un cookie pour le sign up");
      Cookies.set("userToken", token, { expires: 10 });
      setToken(token);
      console.log(
        "Mise à jour du state token en fonction de la connexion / deconnexion"
      );
    } else {
      // déconnexion
      console.log("Suppression d'un cookie pour le sign up");
      Cookies.remove("userToken");
      setToken(null);
    }
  };

  // Return : is loading > en cours de chargement sinon le contenu s'affiche

  return (
    <div className="App">
      <Router>
        {/* Définition des routes */}
        <Header token={token} setUser={setUser} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route path="/signup" element={<Signup setUser={setUser} />}></Route>
          <Route path="/login" element={<Login setUser={setUser} />}></Route>
          <Route path="/publish" element={<Publish token={token} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
