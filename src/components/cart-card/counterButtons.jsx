import { useState } from "react";
import { useCart } from "../../context";

const CounterButtons = ({ product }) => {
const [isFetching, setIsFetching] = useState(false);
const { changeQuantity } = useCart();

return (
<div className="quantity-div">
    <button className="minus" disabled={product.qty===1 ? true : isFetching.counter ? true : false} onClick={()=>
        changeQuantity("decrement", product._id, setIsFetching)}
        >
        -
    </button>
    <span className="qty-count">{product.qty}</span>
    <button disabled={isFetching.counter} className="add" onClick={()=> changeQuantity("increment", product._id,
        setIsFetching)}
        >
        +
    </button>
</div>
);
};

export { CounterButtons };