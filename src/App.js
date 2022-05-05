import "./App.css";

// import des composants router, routes, route
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// import des components
import Header from "./components/Header";

// import Offers from "./components/Offers";

function App() {
  // Return : is loading > en cours de chargement sinon le contenu s'affiche

  return (
    <div className="App">
      <Router>
        {/* Définition des routes */}
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

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
