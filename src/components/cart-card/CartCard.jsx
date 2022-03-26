const CartCard = ({product}) => {
  const { title, brandDescription, price, discountedPrice, quantity, image } = product;
    return(
        <div className="card horizontal-card">
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
                  <p class="discount-price">₹ {discountedPrice}</p>
                  <p class="actual-price">₹ {price}</p>
                </div>
                <div className="quantity-div">
                  <button className="minus"> -</button>
                  <input className="qty-count" type="number" value={quantity} readOnly={true} />
                  <button className="add">+</button>
                </div>
              </div>
              <div className="card-call-to-action">
                <button className="btn btn-primary block-btn">
                  Remove from cart
                </button>
                <button className="btn outline-btn-secondary block-btn">Move to wishlist</button>
              </div>
            </div>
          </div>
    );
};

export { CartCard };