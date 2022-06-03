import {
	createContext,
	useContext,
	useReducer,
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
		category: [],
		rating: 1,
	});



	return  <filterContext.Provider value = {{ state, dispatch}} > {children} </filterContext.Provider> ;
};

export {
	useFilter,
	FilterProvider
};