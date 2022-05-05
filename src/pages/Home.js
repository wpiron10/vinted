import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import du package axios
import axios from "axios";

import Banner from "../components/Banner";

const Home = () => {
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

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Banner />

      <div>
        <div className="offer-content">
          <div className="container">
            <div className="offer-list">
              {data.offers.map((offer, index) => {
                return (
                  <Link
                    to={`/offer${offer._id}`}
                    key={offer._id}
                    className="offer-link"
                  >
                    <div key={index}>
                      {offer.product_pictures[0] && (
                        <div className="offer">
                          <div className="offer-owner">
                            <p>{offer.owner.account.username}</p>
                          </div>
                          <div>
                            {offer.product_pictures[0] ? (
                              <img
                                className="offer-img"
                                src={offer.product_pictures[0].secure_url}
                              />
                            ) : null}
                          </div>
                          <div className="offer-desc">
                            <div> {offer.product_price} €</div>

                            {offer.product_details[1].TAILLE && (
                              <div> {offer.product_details[1].TAILLE}</div>
                            )}

                            <div> {offer.product_details[0].MARQUE} </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
