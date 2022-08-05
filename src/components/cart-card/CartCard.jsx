import { useCart } from "../../context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CounterButtons } from "./counterButtons";
import "./cartCard.css"

const CartCard = ({ product }) => {
const { id, _id, title, brandDescription, price, discountedPrice, qty, image } = product;
const { removeFromCart, moveItemFromCartToWishlist } = useCart();
const [isFetching, setIsFetching] = useState({ wishlist: false, counter: false });

const navigate= useNavigate();

const navigationHandler = () => {
navigate(`/products/details/${id}`);
}

return(
<div className="card horizontal-card cart-card" onClick={() => navigationHandler}>
  <div className="card-image-container">
    <img className="responsive-img rounded-top-corner-img" src={image} alt="card-img" />
  </div>
  <div className="card-info-container">
    <div className="card-info text-left">
      <div className="card-title">
        <div>
          <h3 className="card-title-header">{title}</h3>
          <p className="card-description  text-semibold custom-color">{brandDescription}</p>
        </div>
      </div>
      <div className="price">
        <p className="discount-price">₹ {discountedPrice}</p>
        <p className="actual-price">₹ {price}</p>
      </div>
      <CounterButtons product={product} setIsFetching={setIsFetching} isFetching={isFetching} />
    </div>
    <div className="card-call-to-action">
      <button className="btn outline-btn-primary block-btn" onClick={(e)=> {
        e.stopPropagation();
        moveItemFromCartToWishlist(product, setIsFetching)}}
        disabled={isFetching.wishlist}>Move to wishlist</button>
      <button className="btn outline-btn-secondary block-btn" onClick={(e)=> {
        e.stopPropagation();
        removeFromCart(_id)}}>
        Remove from cart
      </button>
    </div>
  </div>
</div>
);
};

export { CartCard };