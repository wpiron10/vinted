import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import du package axios
import axios from "axios";

import Banner from "../components/Banner";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  // déclaration des states data, isloading
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // ajout de useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?limit=10&page=${page}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, [page]);

  return isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>En cours de chargement...</span>
    </div>
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
                    to={`/offer/${offer._id}`}
                    key={offer._id}
                    className="offer-link"
                  >
                    <div key={index}>
                      {offer.product_pictures[0] && (
                        <div className="offer">
                          <div className="offer-owner">
                            {offer.product_pictures[0] && (
                              <img
                                className="img-owner"
                                src={offer.owner.account.avatar.secure_url}
                              />
                            )}

                            <p>{offer.owner.account.username}</p>
                          </div>
                          <div>
                            {offer.product_pictures[0].secure_url ? (
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
        <div className="pagination-content">
          <div className="container">
            {page > 1 && (
              <button
                className="btn-paginate"
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                Page précédente
              </button>
            )}
            {page < 4 && (
              <button
                className="btn-paginate"
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Page suivante
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
