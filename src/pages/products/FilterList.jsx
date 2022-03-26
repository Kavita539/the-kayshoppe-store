import "./products.css"

const FilterList = ({filtersStyle, setFiltersStyle}) => {
    return(
        <section className={filtersStyle} id="filters">
            <button className="filter-close-btn"  onClick={() => setFiltersStyle("filter-close-btn")}>
                <span className="btn-icon"><i className="fas fa-times"></i></span>
            </button>
            <div className="filter-title">
                <h5>Filters</h5>
                <button className="btn link-btn"><a href="#">Clear</a></button>
            </div>
            <ul className="styled-list filter-list">
                <div className="list-title">Price</div>
                <li><input type="radio" name="price" />Price-high to low</li>
                <li><input type="radio" name="price" />Price-low to high</li>
                <hr className="divider-hr" />
                <div className="list-title">Categories</div>
                <li><input type="checkbox" name="category" id="" />Shoes</li>
                <li><input type="checkbox" name="category" id="" />Athleisure</li>
                <li><input type="checkbox" name="category" id="" />Makeup</li>
                <li><input type="checkbox" name="category" id="" />Accessories</li>
                <hr className="divider-hr" />
                <div className="list-title">Rating</div>
                <li><input type="radio" name="rating" id="" />4 stars and above</li>
                <li><input type="radio" name="rating" id="" />3 stars and above</li>
                <li><input type="radio" name="rating" id="" />2 stars and above</li>
                <li><input type="radio" name="rating" id="" />1 stars and above</li>
            </ul>
        </section>
    );
};

export { FilterList };