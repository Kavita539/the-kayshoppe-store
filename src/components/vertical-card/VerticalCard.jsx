import "./verticalCard.css";
import { AddToCartButton } from "./AddToCartButton";
import { AddToWishlistButton } from "./AddToWishlistButton";
import { Link } from "react-router-dom";

const VerticalCard = ({product}) => {
const { id, image, title, brandDescription, price, discountedPrice, rating } = product;


return(
<div className="card vertical-card">
    <Link to={`/products/details/${id}`} className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt="card-img" />
    </Link>
    <div className="vertical-card-info-container">
        <div className="card-info">
            <div className="card-title">
                <div>
                    <h3 className="card-title-header">{title}</h3>
                    <p className="card-description  text-semibold custom-color">{brandDescription}</p>
                </div>
                <AddToWishlistButton product={product} />
            </div>
            <div className="price">
                <p className="discount-price">₹ {discountedPrice}</p>
                <p className="actual-price">₹ {price}</p>
            </div>
            <div className="rating text-semibold text-sm"><i className="fas fa-sm fa-star"></i>{rating}</div>
        </div>
        <div className="vertical-card-call-to-action">
        <AddToCartButton product={product} />
        </div>
    </div>
</div>
);
}

export { VerticalCard };