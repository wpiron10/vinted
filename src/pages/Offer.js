import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import du package axios
import axios from "axios";

const Offer = () => {
  // const params = useParams();
  const { id } = useParams();

  // déclaration des states data, isloading
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // ajout de useEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="offer-page">
      <div className="container">
        <div className="offer-content">
          <div>
            <img
              src={data.product_image.secure_url}
              className="offer-img-product"
            />
          </div>

          <div className="offer-content-product ">
            <h2>{data.product_price} €</h2>

            <div className="offer-desc-product">
              {data.product_details.map((item, index) => {
                const keys = Object.keys(item);

                return (
                  <>
                    <div key={index}>
                      {keys[0]} : {item[keys[0]]}
                    </div>
                  </>
                );
              })}
            </div>

            <div>
              <h3>{data.product_name}</h3>
              <p>{data.product_description}</p>

              <div className="offer-owner">
                <img
                  className="offer-img-owner"
                  src={data.owner.account.avatar.secure_url}
                />
                <p>{data.owner.account.username}</p>
              </div>
            </div>
            <div className="offer-buy">
              <button className="offer-btn-sell">Acheter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
