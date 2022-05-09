import "../Header/Header.css";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Range } from "react-range";
// import des composants router, routes, route
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  // state = { values: [50] };
  const [values, setValues] = useState([50, 700]);

  const navigate = useNavigate();
  const handleRemoveCookies = () => {
    //Je me déconnecte et je redirige l'utilisateur vers la home page
    setUser(null);
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbarcontainer">
        <div className="logo-content">
          <Link to="/" className="logo-link">
            <img className="logo" src={logo} />
          </Link>
        </div>

        <div className="navbar-search-filters">
          <div className="search-content">
            <FontAwesomeIcon icon="magnifying-glass" />
            <input
              className="search-bar"
              placeholder="Recherche des articles"
              type="text"
            />
          </div>
          <div className="filters">
            <div className="navbar-toggle-price">Trier par prix : </div>
            <Range
              step={1}
              min={0}
              max={1000}
              values={values}
              onChange={(values) => {
                console.log(values);
                setValues(values);
              }}
              renderTrack={({ props, children }) => {
                // console.log(props);
                return (
                  <>
                    <div className="navbar-texte-range">Prix entre :</div>
                    <div className="navbar-range ">
                      <div className="navbar-range-filter " {...props}>
                        {children}
                      </div>
                    </div>
                  </>
                );
              }}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "20px",
                    width: "20px",
                    backgroundColor: "#2cb1ba",
                    borderRadius: "50%",
                    border: "1px white solid",
                  }}
                />
              )}
            />
          </div>
        </div>

        <div className="btn-content">
          {token !== null ? (
            <button className="btn-nav" onClick={handleRemoveCookies}>
              Se déconnecter
            </button>
          ) : (
            <div className="btn-login-signup-content">
              <Link to="/signup" className="btn-login-signup">
                <button className="btn-signup">S'inscrire</button>
              </Link>

              <Link to="/login" className="btn-login-signup">
                <button className="btn-login">Se connecter</button>
              </Link>
            </div>
          )}
          <div className="btn-sell-content">
            <Link to={"/publish"}>
              <button className="btn-sell">Vends tes articles </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
