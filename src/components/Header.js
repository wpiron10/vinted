import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo-content">
          <img className="logo" src={logo} />
        </div>
        <div className="btn-content">
          <button className="btn-nav">S'inscrire</button>
          <button className="btn-nav">Se connecter</button>
          <button className="btn-nav">Vends tes articles </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
