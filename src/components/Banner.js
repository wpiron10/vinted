import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-content">
      <div className="container">
        <div className="banner">
          <div className="banner-desc">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <div>
              <Link to="/publish">
                <button className="btn-banner">Commencer à vendre</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
