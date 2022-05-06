import logo from "../assets/img/logo.png";

// import des composants router, routes, route
import { Link, useNavigate } from "react-router-dom";

// import de cookie
import Cookies from "js-cookie";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  const handleRemoveCookies = () => {
    //Je me déconnecte et je redirige l'utilisateur vers la home page
    setUser(null);
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo-content">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </div>
        <div>
          <div className="search-content">
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            <input className="search-bar" type="text" />
          </div>
        </div>
        <div className="btn-content">
          {token !== null ? (
            <button className="btn-nav" onClick={handleRemoveCookies}>
              Se déconnecter
            </button>
          ) : (
            <div>
              <Link to="/signup">
                <button className="btn-nav-1">S'inscrire</button>
              </Link>

              <Link to="/login">
                <button className="btn-nav">Se connecter</button>
              </Link>
            </div>
          )}
          <button className="btn-nav">Vends tes articles </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
