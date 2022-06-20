import "./verticalCard.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth, useCart } from "../../context";

const VerticalCard = ({product}) => {
const { _id,image, title, brandDescription, price, discountedPrice, rating } = product;
const {
addToCart,
state: { cartItems, loader, error },
} = useCart();
console.log(loader, error);

const {
state: { token },
} = useAuth();
const navigation = useNavigate();
const location = useLocation();

return(
<div className="card vertical-card">
    <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt="card-img" />
    </div>
    <div className="vertical-card-info-container">
        <div className="card-info">
            <div className="card-title">
                <div>
                    <h3 className="card-title-header">{title}</h3>
                    <p className="card-description  text-semibold custom-color">{brandDescription}</p>
                </div>
                <div className="card-heart-logo"><i className="fas fa-heart like-btn"></i></div>
            </div>
            <div className="price">
                <p className="discount-price">₹ {discountedPrice}</p>
                <p className="actual-price">₹ {price}</p>
            </div>
            <div className="rating text-semibold text-sm"><i className="fas fa-sm fa-star"></i>{rating}</div>
        </div>
        <div className="vertical-card-call-to-action">
            {cartItems.find(item => item._id === _id) ? (
            <Link to="/cart" className="btn text-icon-btn btn-primary block-btn">
            <i className="fas fa-shopping-cart"></i>
            Go to cart
            </Link>
            ) : (
            <button className="btn text-icon-btn btn-primary block-btn" onClick={()=> (token ? addToCart(product) :
                navigation("/signin"))}
                >
                <i className="fas fa-shopping-cart"></i>
                Add to cart
            </button>
            )}
        </div>
    </div>
</div>
);
}

export { VerticalCard };