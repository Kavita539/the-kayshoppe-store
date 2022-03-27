

const HorizontalCard = ({title, featuredProductDescription, image, price, discountedPrice}) => {

return(

<div className="card horizontal-card card-shadow">
    <span className="card-badge">New</span>
    <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt="card-img" />
    </div>
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
            <button className="btn text-icon-btn btn-primary"><span><i className="fas fa-shopping-cart"></i></span>Add
                to cart</button>
            <button className="btn outline-btn-secondary">Move to wishlist</button>
        </div>
    </div>
</div>

);
};

export { HorizontalCard };