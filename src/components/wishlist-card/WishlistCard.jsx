const WishlistCard = ({product}) => {
    const { title, brandDescription, price, discountedPrice, rating, image } = product;
    return(
        <div className="card">
                    <button className="card-close-btn"><i className="fas fa-times fa-md"></i></button>
                    <div className="card-image-container">
                        <img className="responsive-img rounded-top-corner-img" src={image}
                            alt="card-img" />
                    </div>
                    <div className="card-info-container">
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
                        <div className="card-call-to-action">
                            <button className="btn text-icon-btn btn-primary block-btn">
                                <i className="fas fa-shopping-cart"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
    );
};

export { WishlistCard };