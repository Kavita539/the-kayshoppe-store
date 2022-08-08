import { Link } from "react-router-dom";
import "./order.css";

const Order = ({ order }) => {
const { orderedAt, orderId, amountPaid, deliveryAddress, orderedProducts } = order;

return (
<div className="card text-card">
    <h3 className="text-success">Order Confirmed</h3>

    <div className="order-info flex-column">
        <small className="text-gray">{orderedAt}</small>
        <span>OrderId: {orderId}</span>
        <span>Total: ₹{amountPaid}</span>
    </div>

    <div className="card-text">
        <span className="text-semibold">Delivery Address:</span>
        <div>
            <h4>{deliveryAddress.name}</h4>
            <address className="card-text">
                <span>{deliveryAddress.street}</span>
                <span>{deliveryAddress.state}</span>
                <span>{deliveryAddress.country}</span>
                <span>{deliveryAddress.zipCode}</span>
                <span>{deliveryAddress.mobile}</span>
            </address>
        </div>
    </div>
    <div className="card-order-container">
    {orderedProducts.map(({ id, _id, image, title, detailedDescription, qty }) => (
    <Link to={`/products/details/${id}`} key={_id} className="card order-card">
    <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt={title} />
    </div>
    <div className="card-info-container">
        <div className="card-info order-info">
            <div className="card-title order-title">
                <span className="text-bold card-header order-header">{title}</span>
                <span className="card-paragraph text-gray">{detailedDescription}</span>
                <span>qty:{qty}</span>
            </div>
        </div>
    </div>
    </Link>
    ))}
    </div>
</div>
);
};
export { Order };