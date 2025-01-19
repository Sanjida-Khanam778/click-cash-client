import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SharedTitle from "../../components/Shared/SharedTitle";
import CheckoutForm from "./CheckoutForm";
import { useSearchParams } from "react-router-dom";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
  const [searchParams] = useSearchParams();
  const price = searchParams.get("amount") || 0;
  return (
    <div className="my-10 lg:my-20">
      <SharedTitle
        title={"PAYMENT"}
        subtitle={"Please pay to eat"}
      ></SharedTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
