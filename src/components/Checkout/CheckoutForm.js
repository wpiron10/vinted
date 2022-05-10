import "./CheckoutForm.css";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate(); // rappel
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Etape 1 : envoi du numéro de carte à stripe

      const cardElement = elements.getElement(CardElement);

      // Etape 2 : On envoie les données bancaires dans la requête
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "< id acheteur",
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;

      // Etape 3: On envoie le token reçu depuis l'API Stripe
      const response = await axios.post("http://localhost:4000/payment", {
        stripeToken,
      });
      console.log(response.data);
      // Si la réponse du serveur est favorable, la transaction a eu lieu
      if (response.data.status === "succeeded") {
        setCompleted(true);
        navigate("/");
        alert("Votre paiement a été validé, merci pour votre commande.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement /> <br />
          <button className="btn-stripe-cart" type="submit">
            Valider le paiement
          </button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </>
  );
};

export default CheckoutForm;
