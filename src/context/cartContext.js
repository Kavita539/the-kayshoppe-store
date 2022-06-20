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
import {
    cartReducer
} from "../reducers";
import {
    actionTypes
} from "../reducers/actionTypes";

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

    const addToCart = async product => {
        try {
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
            }
        } catch (err) {
            console.log(err);
        }
    };

    const changeQuantity = async (type, productId) => {
        try {
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
            }
        } catch (err) {
            console.log(err);
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
            }
        } catch (err) {
            console.log(err);
        }
    };

    return ( <cartContext.Provider value = {
            {
                state,
                dispatch,
                addToCart,
                changeQuantity,
                removeFromCart
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