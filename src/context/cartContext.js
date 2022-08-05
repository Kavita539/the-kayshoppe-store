import {
    useContext,
    useEffect,
    createContext,
    useReducer
} from "react";
import axios from "axios";
import {
    useAuth
} from "./authContext";
import { useWishlist } from "./wishlistContext";
import {
    cartReducer
} from "../reducers";
import {
    actionTypes
} from "../reducers/actionTypes";
import { clearCartService } from "../services/cart-services/clearCartService";
import toast from "react-hot-toast";

const {
    SET_CART
} = actionTypes;


const cartContext = createContext();
const useCart = () => useContext(cartContext);

const CartProvider = ({
    children
}) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cartItems: [],
    });
    const {
        state: {
            token
        },
    } = useAuth();

    const {
        state: { wishedItems },
        addToWishlist,
    } = useWishlist();

    useEffect(() => {
        token &&
            (async () => {
                try {
                    const res = await axios.get("/api/user/cart", {
                        headers: {
                            authorization: token,
                        },
                    });
                    if (res.status === 200) {
                        dispatch({
                            type: SET_CART,
                            payload: res.data.cart
                        });
                        
                    }
                } catch (err) {
                    console.log(err);

                }
            })();
    }, [token]);

    const addToCart = async (product, setIsFetching) => {
        try {
            setIsFetching(true);
            const res = await axios.post(
                "/api/user/cart", {
                    product,
                }, {
                    headers: {
                        authorization: token,
                    },
                }
            );

            if (res.status === 201) {
                dispatch({
                    type: SET_CART,
                    payload: res.data.cart
                });
                setIsFetching(false);
                toast.success("Product added to cart");
            }
        } catch (err) {
            console.log(err.message);
            setIsFetching(false);
            toast.error("Something went wrong,Please try again");
        }
    };

    const changeQuantity = async (type, productId, setIsFetching) => {
        try {
            setIsFetching(prevState => ({ ...prevState, counter: true }));
            const res = await axios.post(
                `/api/user/cart/${productId}`, {
                    action: {
                        type: type,
                    },
                }, {
                    headers: {
                        authorization: token,
                    },
                }
            );

            if (res.status === 200) {
                dispatch({
                    type: SET_CART,
                    payload: res.data.cart
                });
                setIsFetching(prevState => ({ ...prevState, counter: false }));
                toast.success("Product quantity updated");
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong,Please try again");
            setIsFetching(prevState => ({ ...prevState, counter: false }));
        }
    };

    const removeFromCart = async productId => {
        try {
            const res = await axios.delete(
                `/api/user/cart/${productId}`,

                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            if (res.status === 200) {
                dispatch({
                    type: SET_CART,
                    payload: res.data.cart
                });
                toast.success("Product removed from cart");
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong,Please try again");
        }
    };

    const clearCart = async () => {
        try {
          const { status, data } = await clearCartService(token);
    
          if (status === 201) {
            dispatch({ type: SET_CART, payload: data.cart });
          }
        } catch (err) {
          console.log(err);
        }
      };

    const moveItemFromCartToWishlist = (product, setIsFetching) => {
        wishedItems.find(item => item._id === product._id) ?
         toast(<span>Item is already present in wishlist</span>, {
            icon: "👌",
          }) :
            addToWishlist(product, setIsFetching); 
            removeFromCart(product._id);
    };

    return ( <cartContext.Provider value = {
            {
                state,
                dispatch,
                addToCart,
                changeQuantity,
                removeFromCart,
                moveItemFromCartToWishlist,
                clearCart,
            }
        } > {
            children
        } </cartContext.Provider>
    );
};

export {
    CartProvider,
    useCart
};