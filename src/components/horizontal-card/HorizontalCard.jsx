import { useCart, useAuth, useWishlist } from "../../context";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const HorizontalCard = ({product}) => {
const {
id,
title,
featuredProductDescription,
price,
discountedPrice,
image,
} = product;

const {
state: {
token
},
} = useAuth();

const {
addToCart,
state: {
cartItems
},
} = useCart();

const {
    state: { wishedItems },
    addToWishlist,
} = useWishlist();

const [loader, setLoader] = useState(false);
const [error, setError] = useState("");
const navigation = useNavigate();

return(

<div className="card horizontal-card card-shadow">
{error && <div>{error}</div>}
    <span className="card-badge">New</span>
    <Link to={`/products/details/${id}`} className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt="card-img" />
    </Link>
    <div className="card-info-container">
        <div className="card-info text-left">
            <div className="card-title">
                <div>
                    <h3 className="card-title-header">{title}</h3>
                    <p className="card-paragraph">{featuredProductDescription}</p>
                </div>
            </div>
            <div className="price">
                <p className="discount-price">₹{discountedPrice}</p>
                <p className="actual-price">₹{price}</p>
            </div>
        </div>
        <div className="card-call-to-action">
        {cartItems.find(item => item._id === product._id) ? (
            <Link to="/cart" className="btn text-icon-btn btn-primary block-btn text-center">
              <span>
                <i className="fas fa-shopping-cart"></i>
              </span>
              Go to cart
            </Link>
          ) : (
            <button
              className="btn text-icon-btn btn-primary block-btn text-center"
              disabled={loader}
              onClick={() =>
                token ? addToCart(product, setLoader, setError) : navigation("/signin")
              }
            >
              <span className="btn-icon">
                <i className="fas fa-shopping-cart"></i>
              </span>
              Add to cart
            </button>
          )}
          {wishedItems.find(item => item._id === product._id) ? (
            <Link to="/wishlist" className="btn btn-outline-primary block-btn text-center">
            Go to Wishlist
            </Link>
            ) : (
            <button className="btn outline-btn-primary block-btn"disabled={loader} onClick={()=> (token ?
                addToWishlist(product, setLoader, setError) : navigation("/signin"))}
                >
                Move to wishlist
            </button>
          )}
        </div>
    </div>
</div>

);
};

export { HorizontalCard };