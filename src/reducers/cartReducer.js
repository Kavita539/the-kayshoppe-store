import {
    actionTypes
} from "./actionTypes";

const {
    SET_CART
} = actionTypes;

const cartReducer = (state, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state, cartItems: action.payload
            };
    }
};
export {
    cartReducer
};