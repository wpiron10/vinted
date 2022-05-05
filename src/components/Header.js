import logo from "../assets/img/logo.png";

// import des composants router, routes, route
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo-content">
          <img className="logo" src={logo} />
        </div>
        <div>
          <div className="search-content">
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            <input className="search-bar" type="text" />
          </div>
        </div>
        <div className="btn-content">
          <Link to="/signup">
            <button className="btn-nav-1">S'inscrire</button>
          </Link>

          <button className="btn-nav">Se connecter</button>
          <button className="btn-nav">Vends tes articles </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
