import {
    createContext,
    useContext,
    useReducer,
    useEffect
} from "react";
import {
    addressReducer,
    initialState
} from "../reducers";
import {
    useAuth
} from "./authContext";
import {
    getAllAddress,
    addAddress,
    updateAddress,
    removeAddress
} from "../services/address-services";
import {
    actionTypes
} from "../reducers/actionTypes";
import toast from "react-hot-toast";

const {
    INITIALIZE,
    SET_ERROR,
    SET_ADDRESS
} = actionTypes;

const AddressContext = createContext();

const AddressProvider = ({
    children
}) => {
    const [addressState, addressDispatch] = useReducer(addressReducer, initialState);

    const {
        state: {
            token
        },
    } = useAuth();

    useEffect(() => {
        (async () => {
            if (token) {
                try {
                    addressDispatch({
                        type: INITIALIZE
                    });

                    const {
                        status,
                        data
                    } = await getAllAddress(token);

                    if (status === 200) {
                        addressDispatch({
                            type: "SET_ADDRESS",
                            payload: data.address
                        });
                    }
                } catch (err) {
                    addressDispatch({
                        type: "SET_ERROR",
                        error: err.response.data[0].errors
                    });
                }
            } else {
                addressDispatch({
                    type: "SET_ADDRESS",
                    payload: []
                });
            }
        })();
    }, [token]);

    const addNewAddress = async address => {
        try {
            addressDispatch({
                type: INITIALIZE
            });

            const {
                status,
                data
            } = await addAddress(address, token);
            if (status === 201) {
                addressDispatch({
                    type: SET_ADDRESS,
                    payload: data.address
                });
            }
        } catch (err) {
            addressDispatch({
                type: SET_ERROR,
                error: err.response.data[0].errors
            });
            toast.error('You need to fill the form');
        }
    };

    const editAddress = async address => {
        try {
            addressDispatch({
                type: INITIALIZE
            });

            const {
                status,
                data
            } = await updateAddress(address, token);

            if (status === 200) {
                addressDispatch({
                    type: SET_ADDRESS,
                    payload: data.address
                });
            }
        } catch (err) {
            addressDispatch({
                type: SET_ERROR,
                error: err.response.data[0].errors
            });
            toast.error('You need to fill the form');
        }
    };

    const deleteAddress = async address => {
        try {
            addressDispatch({
                type: INITIALIZE
            });

            const {
                status,
                data
            } = await removeAddress(address, token);

            if (status === 200) {
                addressDispatch({
                    type: SET_ADDRESS,
                    payload: data.address
                });
            }
        } catch (err) {
            addressDispatch({
                type: SET_ERROR,
                error: err.response.data[0].errors
            });
            
        }
    };

    return ( <
        AddressContext.Provider value = {
            {
                addressState,
                addressDispatch,
                addNewAddress,
                editAddress,
                deleteAddress
            }
        } >
        {
            children
        } </AddressContext.Provider>
    );
};

const useAddress = () => useContext(AddressContext);

export {
    AddressProvider,
    useAddress
};