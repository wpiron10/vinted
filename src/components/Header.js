import logo from "../assets/img/logo.png";

// import des composants router, routes, route
import { Link } from "react-router-dom";

// import de cookie
import Cookies from "js-cookie";

const Header = () => {
  // const isTokenLoginValid = () => {
  //   Cookies.get("tokenLogin", data.token);
  // };

  // const [cookies, setCookies] = useState(false);
  // useEffect(() => {
  //   console.log(Cookies.get("token") === true);
  //   if (Cookies.get("token") !== "") {
  //     setCookies(true);
  //   }

  const handleRemoveCookies = () => {
    return Cookies.remove("tokenLogin");
  };

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
          {/* {isTokenLoginValid > 0 ? ( */}
          <button className="btn-nav" onClick={handleRemoveCookies}>
            Se déconnecter
          </button>
          {/* ) : ( */}
          <div>
            <Link to="/signup">
              <button className="btn-nav-1">S'inscrire</button>
            </Link>

            <Link to="/login">
              <button className="btn-nav">Se connecter</button>
            </Link>
          </div>
          {/* )} */}
          <button className="btn-nav">Vends tes articles </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
