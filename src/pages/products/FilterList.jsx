import "./products.css"
import {useCategory, useFilter, useProducts} from "../../context";
import { actionTypes } from "../../reducers/actionTypes";

const {
  SORT_BY_PRICE,
  FILTER_CATEGORY,
  SET_RATING,
  CLEAR,
} = actionTypes;

const FilterList = ({showFilters, setShowFilters}) => {
    const { state, dispatch } = useFilter();
  const { priceRange } = useProducts();
  const { categories } = useCategory();
  const categoriesNames = categories.map(category => category.categoryName);
    return(
            <section className={`filters ${showFilters ? "show-filters" : ""}`} id="filters">
            
            <div className="filter-title">
                <h5 className="filter-name">Filters</h5>
                <button
          className="btn btn-primary"
          onClick={() =>
            dispatch({ type: CLEAR, payload: { min: priceRange.min, max: priceRange.max } })
          }
        >
          Clear
        </button>
            </div>
            <ul className="styled-list filter-list">
                <div className="list-title">Price</div>
                <li><input type="radio" name="price" id="high-to-low" checked={state.sort === "high-to-low"} onChange={() => dispatch({ type: SORT_BY_PRICE, payload: "high-to-low" })}/><label htmlFor="high-to-low">Price-High to Low</label></li>
                <li><input type="radio" name="price" id="low-to-high" checked={state.sort === "low-to-high"} onChange={() => dispatch({ type: SORT_BY_PRICE, payload: "low-to-high" })}/><label htmlFor="low-to-high">Price-Low to High</label></li>
                <hr className="divider-hr" />
                <div className="list-title">Categories</div>
                <li>
                    <div>
                    <input
              type="checkbox"
              id="all"
              checked={
                state.category.length === 0 || state.category.length === categoriesNames.length
              }
              onChange={() => dispatch({ type: FILTER_CATEGORY, payload: "all" })}
            />
            <label htmlFor="all">all</label>
                    </div>
                    {categoriesNames.map(category => {
            return (
              <div key={category}>
                <label>
                  <input
                    type="checkbox"
                    checked={state.category.includes(category)}
                    onChange={() => dispatch({ type: FILTER_CATEGORY, payload: category })}
                  />
                  {category}
                </label>
              </div>
            );
          })}</li>
                <hr className="divider-hr" />
                <div className="list-title">Rating</div>
                <li>{[4, 3, 2, 1].map(rating => (
            <div key={rating}>
              <label>
                <input
                  type="radio"
                  name="rating"
                  checked={state.rating === rating}
                  onChange={() => dispatch({ type: SET_RATING, payload: rating })}
                />
                {rating} stars and above
              </label>
            </div>
          ))}</li>
            </ul>
        </section>
    );
};

export { FilterList };