import {
    actionTypes
} from "./actionTypes";

const filterReducer = (state, action) => {
    const {
        SORT_BY_PRICE,
        OUT_OF_STOCK,
        FILTER_CATEGORY,
        SET_RATING,
        SET_RANGE,
        SET_MIN,
        SET_MAX,
        CLEAR,
    } = actionTypes;
    switch (action.type) {
        case SORT_BY_PRICE:
            return {
                ...state, sortByPrice: action.payload
            };

        case OUT_OF_STOCK:
            return {
                ...state, includeOutOfStock: !state.includeOutOfStock
            };

        case FILTER_CATEGORY:
            if (action.payload === "all") return {
                ...state,
                category: []
            };
            const doesCategoryExist = state.category.includes(action.payload);
            return doesCategoryExist ?
                {
                    ...state,
                    category: state.category.filter(item => item !== action.payload),
                } :
                {
                    ...state,
                    category: [...state.category, action.payload]
                };

        case SET_RATING:
            return {
                ...state, rating: action.payload
            };

        case SET_RANGE:
            return {
                ...state,
                range: {
                    min: action.payload.min,
                    max: action.payload.max,
                },
            };

        case SET_MIN:
            return {
                ...state, range: {
                    ...state.range,
                    min: action.payload
                },
            };

        case SET_MAX:
            return {
                ...state, range: {
                    ...state.range,
                    max: action.payload
                },
            };

        case CLEAR:
            return {
                ...state,
                    sortByPrice: "",
                    includeOutOfStock: false,
                    range: {
                        min: action.payload.min,
                        max: action.payload.max
                    },
                    category: [],
                    rating: 1,
            }

            default:
                return state;

    }
};

export {
    filterReducer
};