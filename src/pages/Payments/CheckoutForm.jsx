import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useCoin from "../../hooks/useCoin";

const CheckoutForm = ({price}) => {
  const { user } = useAuth();
  const [, , refetch] = useCoin()
  const navigate = useNavigate()
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (price) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("intent error");
    } else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user.email,
          transactionId: paymentIntent.id,
          price: parseInt(price),
          date: new Date(),
        //   status: "pending"
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        if (res.data?.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `payment succeded. Thank you.`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/paymentHistory')
        }
      }
    }
  }

  return (
   
      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary text-white my-3 md:my-8 border-2"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && (
          <p className="text-green-500">Your transaction Id: {transactionId}</p>
        )}
      </form>

  );
}
export default CheckoutForm;