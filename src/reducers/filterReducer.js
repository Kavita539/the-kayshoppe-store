import {
    actionTypes
} from "./actionTypes";

const {
    SORT_BY_PRICE,
    FILTER_CATEGORY,
    SET_RATING,
    CLEAR,
} = actionTypes;

const filterReducer = (state, action) => {
    switch (action.type) {
        case SORT_BY_PRICE:
            return {
                ...state, sort: action.payload
            };

        case FILTER_CATEGORY:
            if (action.payload === "all") return {
                ...state,
                category: []
            };
            const isCategoryExist = state.category.includes(action.payload);
            return isCategoryExist ? {
                ...state,
                category: state.category.filter(item => item !== action.payload),
            } : {
                ...state,
                category: [...state.category, action.payload]
            };

        case SET_RATING:
            return {
                ...state, rating: action.payload
            };

        case CLEAR:
            return {
                ...state,
                sort: "",
                    category: [],
                    rating: 1,
            };
        default:
            return state;
    }
};

export {
    filterReducer
};