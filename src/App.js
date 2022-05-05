import "./App.css";

// import des composants router, routes, route
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";

// import des components
import Header from "./components/Header";
import Signup from "./pages/Signup";

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
            <Link className="nav-link" to="/">
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
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
