import { useWishlist } from "../../context";
import { AddToCartButton } from "../vertical-card/AddToCartButton";
import "./wishlistCard.css";


const WishlistCard = ({product}) => {
    const { _id, title, brandDescription, price, discountedPrice, rating, image } = product;

    const { removeFromWishlist } = useWishlist();

    return(
        <div className="card">
                    <button className="card-close-btn" onClick={() => removeFromWishlist(_id)}><i className="fas fa-times fa-md"></i></button>
                    <div className="card-image-container">
                        <img className="responsive-img rounded-top-corner-img wishlist-card-img" src={image}
                            alt="card-img" />
                    </div>
                    <div className="vertical-card-info-container">
                        <div className="card-info">
                            <div className="card-title">
                                <div>
                                    <h3 className="card-title-header">{title}</h3>
                                    <p className="card-description  text-semibold custom-color">{brandDescription}</p>
                                </div>
                            </div>
                            <div className="price">
                                 <p class="discount-price">₹ {discountedPrice}</p>
                                <p class="actual-price">₹ {price}</p>
                            </div>
                            <div className="rating text-semibold text-sm"><i className="fas fa-sm fa-star"></i>{rating}</div>
                        </div>
                        <div className="vertical-card-call-to-action">
                        <AddToCartButton product={product} />
                        </div>
                    </div>
                </div>
    );
};

export { WishlistCard };