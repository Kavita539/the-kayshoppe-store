import { products  } from "../../backend/db/products";
import { VerticalCard } from "../../components/vertical-card/VerticalCard";
import "./products.css";

const ProductGridArea = ({ setFiltersStyle }) => {
    const filterBtn = () => {
        return(
            <div className="filter-button-div">
                <button className="btn outline-btn-primary text-icon-btn filter-button" id="show-filter-btn" onClick={()=>setFiltersStyle("show-filter-btn")}>
                    <span className="btn-icon"><i class="fas fa-sliders-h"></i></span>Filters
                </button>
            </div>
        );
    }
    return(
        <div className="products">
            {filterBtn()}
            <main class="main-products">
                {products.map(({ _id, title, image, brandDescription, price, discountedPrice, rating }) => (
                <VerticalCard key={_id} title={title} image={image} price={price} description={brandDescription} discountedPrice={discountedPrice} rating={rating} />
                ))}
            </main>

        </div>
    );
};

export { ProductGridArea };