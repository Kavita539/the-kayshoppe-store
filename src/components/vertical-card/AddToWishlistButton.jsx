import { useState } from "react";
import { useWishlist, useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

const AddToWishlistButton = ({ product }) => {
const [isFetching, setIsFetching] = useState(false);
const { addToWishlist, removeFromWishlist } = useWishlist();

const {
state: { token },
} = useAuth();

const {
state: { wishedItems },
} = useWishlist();

const doesItemExistInWishlist = wishedItems.find(item => item._id === product._id);

return (
<div className="card-heart-logo" disabled={isFetching ? true : false} onClick={()=>
    token
    ? !doesItemExistInWishlist
    ? addToWishlist(product, setIsFetching)
    : removeFromWishlist(product._id)
    : navigation("/signin")
    }
    >
    <i className={doesItemExistInWishlist ? "fas fa-heart text-danger" : "far fa-heart " }></i>
</div>
);
};

export { AddToWishlistButton };