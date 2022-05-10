import "./App.css";
// imports de stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/Checkout/CheckoutForm";

// import des composants router, routes, route
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import de cookie
import Cookies from "js-cookie";

// import des pages
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Login from "./pages/Login/Login";
import Publish from "./pages/Publish/Publish";
import Payment from "./pages/Payment/Payment";

// import des components
import Header from "./components/Header/Header";
import Signup from "./pages/Signup/Signup";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

function App() {
  const [values, setValues] = useState([50, 250]);
  const priceMin = values[0];
  const priceMax = values[1];

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

  // import de stripe
  const stripePromise = loadStripe(
    "pk_test_51KxuAMBxNTs3SLsGip2j7SfKjYL8gnhlYHPyZ6QjvxvQvqM636bdwCfH7BcvNo5Azg94oxhdmScWqvpa1XN0MdFn00h8VboA2X"
  );

  return (
    <div className="App">
      <Router>
        {/* Définition des routes */}
        <Header
          token={token}
          setUser={setUser}
          priceMin={priceMin}
          priceMax={priceMax}
          values={values}
          setValues={setValues}
        />

        <Routes>
          <Route
            path="/"
            element={<Home priceMin={priceMin} priceMax={priceMax} />}
          ></Route>
          {/* Stripe */}
          <Route
            path="/payment"
            element={
              <Payment
                Elements={Elements}
                stripePromise={stripePromise}
                CheckoutForm={CheckoutForm}
              />
            }
          ></Route>
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
