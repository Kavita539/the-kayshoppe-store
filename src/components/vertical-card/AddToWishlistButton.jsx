import { useState } from "react";
import { useWishlist, useAuth } from "../../context";
import { useNavigate, useLocation } from "react-router-dom";

const AddToWishlistButton = ({ product }) => {
const [isFetching, setIsFetching] = useState(false);
const { addToWishlist, removeFromWishlist } = useWishlist();
const navigation = useNavigate();
const { pathname } = useLocation();

const {
state: { token },
} = useAuth();

const {
state: { wishedItems },
} = useWishlist();

const doesItemExistInWishlist = wishedItems.find(item => item._id === product._id);

return (
<div className={`card-heart-logo ${ pathname.includes("/products/") ? "position-unset btn outline-btn-primary block-btn card-wishlist-btn" : "" }`}
    disabled={isFetching ? true : false} onClick={()=>
    token
    ? !doesItemExistInWishlist
    ? addToWishlist(product, setIsFetching)
    : removeFromWishlist(product._id)
    : navigation("/signin")
    }>

    {pathname === "/wishlist" ? (
        <i className="fas fa-times"></i>
    ) : (
        <span className="flex-total-center">
            <i className={doesItemExistInWishlist ? "fas fa-heart text-danger" : "far fa-heart " }></i>
            {pathname.includes("/products/details/")
            ? doesItemExistInWishlist
              ? "Added in wishlist"
              : "Add to wishlist"
            : ""}
        </span>  
     )} 

</div>
);
};

export { AddToWishlistButton };