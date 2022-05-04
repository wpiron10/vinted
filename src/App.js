import "./App.css";

import { useState, useEffect } from "react";

// import des composants router, routes, route
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// import des components
import Header from "./components/Header";
import Banner from "./components/Banner";
// import Offers from "./components/Offers";

// import du package axios
import axios from "axios";

// function App

function App() {
  // déclaration des states data, isloading
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // ajout de useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  // Return : is loading > en cours de chargement sinon le contenu s'affiche

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <Router>
        <Header />
        <nav className="nav">
          <div className="container">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/offer">
              Offer
            </Link>
          </div>
        </nav>
        <Banner />

        <div className="offers-content">
          <div className="container">
            {data.offers.map((offer, index) => {
              return (
                <div key={index} className="offer-content">
                  <div>
                    {console.log(offer.product_pictures[0].secure_url, "< url")}
                    <div>{offer.product_details[0].MARQUE}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Définition des routes */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/offer" element={<Offer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
