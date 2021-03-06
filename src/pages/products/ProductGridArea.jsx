import { VerticalCard, Loader } from "../../components";
import "./products.css";
import {useFilter, useProducts} from "../../context";
import { filterProducts, sortProductsByPrice } from "../../utils";

const ProductGridArea = ({ showFilters, setShowFilters }) => {
  const { state } = useFilter();
  const { products, loader, error } = useProducts();
  const sortedList = sortProductsByPrice(state.sort, products);
  const finalFilteredList = filterProducts(state, sortedList);
    const filterBtn = () => {
        return(
            <div className="filter-button-div">
                {!showFilters ? (
                <button className="btn outline-btn-primary text-icon-btn filter-button" onClick={()=>
                    setShowFilters(true)}>
                    <span className="btn-icon">
                        <i className="fas fa-sliders-h"></i>
                    </span>
                    Filters
                </button>
                ) : (
                <button className="btn outline-btn-primary text-icon-btn filter-button" onClick={()=>
                    setShowFilters(false)}>
                    <span className="btn-icon"></span>
                    Apply
                </button>
                )}
            </div>
        );
    }
    return(
        <>
        <div className="products">
            {filterBtn()}
            {loader && <Loader />}
            {error && <div>{error}</div>}
            <main className="main-products">
                {finalFilteredList.map(product => (
                    <VerticalCard key={product._id} product={product} />
                ))}
            </main>

        </div>
        </>
    );
};

export { ProductGridArea };