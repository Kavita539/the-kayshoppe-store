import { useCart } from "../../context";

const BillDistribution = () => {
  const {
    state: { cartItems },
  } = useCart();

  const totalPrices = cartItems.reduce(
    (totalPrice, currentProduct) => {
      return {
        price: totalPrice.price + currentProduct.price * currentProduct.qty,
        discountedPrice:
          totalPrice.discountedPrice + currentProduct.discountedPrice * currentProduct.qty,
        deliverCharges:
          currentProduct.discountedPrice < 1000
            ? totalPrice.deliverCharges + 150
            : totalPrice.deliverCharges,
      };
    },
    { price: 0, discountedPrice: 0, deliverCharges: 0 }
  );
    return(
        <div className="bill-distribution-div">
          <h3>Price Details</h3>
          <hr/>
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
          <hr/>
          <div className="bill-unit">
            <h4>Total Amount</h4>
            <h4>₹ {totalPrices.discountedPrice + totalPrices.deliverCharges}/-</h4>
          </div>
          <hr/>
          <p className="text-lg">You will save <span className="text-lg text-bold">₹ 650</span> on this order.</p>
          <div className="cart-cta">
            <button className="btn btn-primary block-btn">Place Order</button>
          </div>
        </div>
    );
};

export {BillDistribution};