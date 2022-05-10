import "./Payment.css";
import Cookies from "js-cookie";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import { useLocation } from "react-router-dom";

const Payment = ({ stripePromise, Elements }) => {
  const token = Cookies.get("token");
  const location = useLocation();
  const { name, price } = location.state;

  const protectioncharges = price * 0.1;
  const shippingcharges = price * 0.2;
  const total = price + protectioncharges + shippingcharges;

  return (
    <div className="main-payment-forms">
      <div className="payment-forms">
        <p>Résumé de la commande</p>

        <br />
        <span>Commande : {price.toFixed(2)} € </span>
        <br />
        <span>
          Frais protection acheteurs : {protectioncharges.toFixed(2)} €
        </span>
        <br />
        <span>Frais de port : {shippingcharges.toFixed(2)} €</span>

        <br />
        <span>Total : {total.toFixed(2)} €</span>

        <br />

        {/* {token && ( */}
        <span>
          Il ne vous reste plus qu'une étape pour vous offrir : {name}. Vous
          allez payer {total.toFixed(2)} euros (frais de protection et frais de
          port inclus)
        </span>
        {/* )} */}

        <br />
        <Elements stripe={stripePromise}>
          <br />
          <CheckoutForm />
          <br />
        </Elements>
        <br />
      </div>
    </div>
  );
};

export default Payment;
