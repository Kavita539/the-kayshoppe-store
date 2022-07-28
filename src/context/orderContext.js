import {
    createContext,
    useContext,
    useReducer,
    useEffect
} from "react";
import {
    orderReducer,
    orderInitialState
} from "../reducers";
import {
    useAuth
} from "./authContext";
import {
    getOrdersService,
    addOrderService
} from "../services";
import { actionTypes } from "../reducers/actionTypes";
import toast from "react-hot-toast";

const {
    INITIALIZE,
    SET_ERROR,
    SET_ORDERS
} = actionTypes;

const OrderContext = createContext();

const OrderProvider = ({
    children
}) => {
    const [orderState, orderDispatch] = useReducer(orderReducer, orderInitialState);

    const {
        state: {
            token
        },
    } = useAuth();

    useEffect(() => {
        (async () => {
            if (token) {
                try {
                    orderDispatch({
                        type: INITIALIZE
                    });

                    const {
                        status,
                        data
                    } = await getOrdersService(token);

                    if (status === 200) {
                        orderDispatch({
                            type: SET_ORDERS,
                            payload: data.orders
                        });
                    }
                } catch (err) {
                    orderDispatch({
                        type: SET_ERROR,
                        error: err.response.data[0].errors
                    });
                }
            } else {
                orderDispatch({
                    type: SET_ORDERS,
                    payload: []
                });
            }
        })();
    }, [token]);

    const addOrder = async order => {
        try {
            orderDispatch({
                type: INITIALIZE
            });

            const {
                status,
                data
            } = await addOrderService(order, token);

            if (status === 201) {
                orderDispatch({
                    type: SET_ORDERS,
                    payload: data.orders
                });
                toast.success("Order has been placed successfully");
            }
        } catch (err) {
            orderDispatch({
                type: SET_ERROR,
                error: err.response.data[0].errors
            });
        }
    };

    return ( <
        OrderContext.Provider value = {
            {
                orderState,
                orderDispatch,
                addOrder
            }
        } > {
            children
        } </OrderContext.Provider>
    );
};

const useOrder = () => useContext(OrderContext);

export {
    OrderProvider,
    useOrder
};