import { useCart, useAddress, useOrder } from "../../context";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BillDistribution = ({ selectedAddress }) => {
const {
state: { cartItems },
clearCart,
} = useCart();

const { pathname } = useLocation();

const { addOrder } = useOrder();

const {
addressState: { address },
} = useAddress();

const navigate = useNavigate();

const totalPrices = cartItems.reduce(
(totalPrice, currentProduct) => {
return {
price: totalPrice.price + currentProduct.price * currentProduct.qty,
discountedPrice:
totalPrice.discountedPrice + currentProduct.discountedPrice * currentProduct.qty,
deliverCharges:
currentProduct.discountedPrice < 1000 ? totalPrice.deliverCharges + 150 : totalPrice.deliverCharges, }; }, { price: 0, discountedPrice: 0, deliverCharges: 0 } ); 

const finalPrice = totalPrices.discountedPrice + totalPrices.deliverCharges;
  
  const loadScript=async url=> {
  return new Promise(resolve => {
  const script = document.createElement("script");
  script.src = url;

  script.onload = () => {
  resolve(true);
  };

  script.onerror = () => {
  resolve(false);
  };
  document.body.appendChild(script);
  });
  };

  const displayRazorpayModal = async () => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
  toast.error("Something went wrong.");
  return;
  }
  const options = {
  key: "rzp_test_6KCtMRWsbr5vCY",
  amount: finalPrice * 100,
  currency: "INR",
  name: "",
  description: "Thanks for shopping with us!",
  image: "/favicon.ico",
  handler: function (response) {
  const paymentId = response.razorpay_payment_id;
  const orderId = uuid();

  const newOrders = {
  paymentId,
  orderId,
  amountPaid: finalPrice,
  orderedProducts: [...cartItems],
  deliveryAddress: selectedAddress,
  orderedAt: dayjs().format("DD/MM/YYYY hh:mmA"),
  };
  addOrder(newOrders);
  clearCart();
  navigate("/user/orders");
  },
  theme: {
  color: "hsl(204, 83%, 56%)",
  },
  prefill: {
  name: "Kayy Sharma",
  email: "xyz@example.com",
  contact: "9999999999",
  },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  };

  const handlePayment = () => {
  displayRazorpayModal();
  };

  return(
  <div className="bill-distribution-div">
    <h3>Purchased Items</h3>
    <hr />
    <div className="bill">
      {cartItems.map(product => (
      <div className="bill-unit" key={product._id}>
        <p>{product.title}</p>
        <p>
          ₹{product.price} x {product.qty}
        </p>
      </div>
      ))}
    </div>
    <h3>Price Details</h3>
    <hr />
    <div className="bill">
      <div className="bill-unit">
        <p>Price({cartItems.length})</p>
        <p>₹ {totalPrices.price}/-</p>
      </div>
      <div className="bill-unit">
        <p>Discount</p>
        <p>-₹ {totalPrices.price - totalPrices.discountedPrice}/-</p>
      </div>
      <div className="bill-unit">
        <p>Delivery charges</p>
        <p>₹ {totalPrices.deliverCharges}/-</p>
      </div>
    </div>
    <hr />
    <div className="bill-unit">
      <h4>Total Amount</h4>
      <h4>₹ {totalPrices.discountedPrice + totalPrices.deliverCharges}/-</h4>
    </div>
    <hr />
    {pathname !== "/checkout" && (
    <p className="text-lg">You will save <span className="text-lg text-bold">₹ {totalPrices.price -
        totalPrices.discountedPrice}</span> on this order.</p>
    )}
    {pathname === "/checkout" && selectedAddress && (
        <>
          <h3>Delivery Address</h3>
          <hr />
          <div>
            <h4>{selectedAddress.name}</h4>
            <address className="card-text">
              <span>{selectedAddress.street}</span>
              <span>{selectedAddress.state}</span>
              <span>{selectedAddress.country}</span>
              <span>{selectedAddress.zipCode}</span>
              <span>{selectedAddress.mobile}</span>
            </address>
          </div>
        </>
      )}
    <div className="cart-cta">
      {pathname === "/checkout" ? (
      <button disabled={!address.length} className="btn btn-primary block-btn" onClick={handlePayment}>
        Proceed to Pay
      </button>
      ) : (
      <button className="btn btn-primary block-btn" onClick={()=> {
        navigate("/checkout");
        }}
        >
        Place Order
      </button>
      )}
    </div>
  </div>
  );
  };

  export {BillDistribution};