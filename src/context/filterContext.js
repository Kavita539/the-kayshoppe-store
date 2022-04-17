import {
	createContext,
	useContext,
	useReducer,
	useEffect
} from "react";
import {
	filterReducer
} from "../reducers/filterReducer";
import {
	useProducts
} from "./productContext";

const filterContext = createContext();

const useFilter = () => useContext(filterContext);

const FilterProvider = ({
	children
}) => {
	const {
		priceRange
	} = useProducts();
	const [state, dispatch] = useReducer(filterReducer, {
		sortByPrice: "",
		includeOutOfStock: false,
		range: {min:0, max:0},
		category: [],
		rating: 1,
	});

	useEffect(() => {
		priceRange.min &&
			priceRange.max &&
			dispatch({
				type: "SET_RANGE",
				payload: {
					min: priceRange ?.min,
					max: priceRange ?.max
				}
			});
	}, [priceRange.min, priceRange.max]);


	return ( <filterContext.Provider value = {{ state, dispatch}} > {children} </filterContext.Provider> );
};

export {
	useFilter,
	FilterProvider
};