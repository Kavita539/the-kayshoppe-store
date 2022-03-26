const BillDistribution = () => {
    return(
        <div className="bill-distribution-div">
          <h3>Price Details</h3>
          <hr/>
          <div className="bill">
            <div className="bill-unit">
              <p>Price(2 items)</p>
              <p>₹ 2350/-</p>
            </div>
            <div className="bill-unit">
              <p>Discount</p>
              <p>-₹ 650/-</p>
            </div>
            <div className="bill-unit">
              <p>Delivery charges</p>
              <p>₹ 300/-</p>
            </div>
          </div>
          <hr/>
          <div className="bill-unit">
            <h4>Total Amount</h4>
            <h4>₹ 2000/-</h4>
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