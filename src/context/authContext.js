import axios from "axios";
import {
    useContext,
    createContext,
    useReducer
} from "react";
import {
    useNavigate
} from "react-router-dom";
import {
    authReducer
} from "../reducers/authReducer";
import {
    actionTypes
} from "../reducers/actionTypes";

const {
    LOGIN_USER,
    LOGOUT_USER
} = actionTypes;

const authContext = createContext();
const useAuth = () => useContext(authContext);

const initialState = {
    userName: JSON.parse(localStorage.getItem("jwt"))?.userName || "",
    email: JSON.parse(localStorage.getItem("jwt"))?.email || "",
    token: JSON.parse(localStorage.getItem("jwt"))?.token || "",
  };

const AuthProvider = ({
    children
}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const navigate = useNavigate();

    const signup = async (userInput, setLoader, setError) => {
        try {
            setError("");
            setLoader(true);
            const res = await axios.post("/api/auth/signup", userInput);

            if (res.status === 201) {
                setLoader(false);

                const {
                    firstName, email
                } = res.data.createdUser;
                const {
                    encodedToken
                } = res.data;

                localStorage.setItem("jwt", JSON.stringify({
                    userName: firstName,
                    token: encodedToken,
                    email: email
                }));

                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        userName: firstName,
                        token: encodedToken,
                        email: email
                    },
                });

                navigate("/");
            }
        } catch (err) {
            setError(err.response.data.errors);
            setLoader(false);
        }
    };

    const login = async (userInput, setLoader, setError, from) => {
        try {
            setError("");
            setLoader(false);
            const res = await axios.post("/api/auth/login", userInput);
            if (res.status === 200) {
                setLoader(false);

                const {
                    firstName,
                    email
                } = res.data.foundUser;
                const {
                    encodedToken
                } = res.data;
                localStorage.setItem("jwt", JSON.stringify({
                    userName: firstName,
                    token: encodedToken,
                    email: email
                }));

                dispatch({
                    type: LOGIN_USER,
                    payload: {
                        userName: firstName,
                        token: encodedToken,
                        email: email
                    },
                });

                navigate(from, {
                    replace: true
                });
            }
        } catch (err) {
            setError(err.response.data.errors);
            setLoader(false);
        }
    };

    const logout = () => {
        dispatch({
            type: LOGOUT_USER
        });
        navigate("/");
        localStorage.removeItem("jwt");
    };

    return ( <authContext.Provider value = {
            {
                state,
                dispatch,
                signup,
                login,
                logout
            }
        } > {
            children
        } </authContext.Provider>
    );
};

export { useAuth, AuthProvider };