import "./Home.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import du package axios
import axios from "axios";

// import de la banner
import Banner from "../../components/Banner/Banner";

const Home = ({ priceMin, priceMax }) => {
  // déclaration des states data, isloading
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // ajout de useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?priceMin=${priceMin}&priceMax=${priceMax}&limit=${limit}&page=${page}`
        );

        // (
        //   `https://deliveroo-exo-backend.herokuapp.com/offers`
        // );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, [page, limit, priceMin, priceMax]);

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
                      <div className="offer">
                        <div className="offer-owner">
                          {offer.owner.account.avatar?.secure_url && (
                            <img
                              className="img-owner"
                              src={offer.owner.account.avatar.secure_url}
                            />
                          )}

                          <p>{offer.owner.account.username}</p>
                        </div>
                        <div>
                          {offer.product_image.secure_url ? (
                            <img
                              className="offer-img"
                              src={offer.product_image.secure_url}
                            />
                          ) : (
                            <img
                              className="offer-img"
                              src={offer.product_pictures[0].secure_url}
                            />
                          )}
                        </div>
                        <div className="offer-desc">
                          <div> {offer.product_price} €</div>

                          {offer.product_details[1].TAILLE && (
                            <div> {offer.product_details[1].TAILLE}</div>
                          )}

                          <div> {offer.product_details[0].MARQUE} </div>
                        </div>
                      </div>
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
            <p>{page}</p>
            {/* {limit === data.offers && ( */}
            <button
              className="btn-paginate"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Page suivante
            </button>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
