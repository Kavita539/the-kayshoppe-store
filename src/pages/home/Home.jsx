import "./home.css";
import { CategoryCard } from "../../components";
import { categories } from "../../../backend/db/categories";

const Home = ()=>{
    return(
        <>
        {/* Banner section for the e-commerce */}
         <div className="banner">
                <div className="banner-content text-center">
                    <h2 className="banner-heading"> <span className="banner-initials custom-color">K</span>ayy<span
                            className="banner-initials custom-color">S</span>hoppe</h2>
                    <p className="banner-sub-heading custom-color">ITS KAYY TO SPLURGE!</p>
                    <div className="banner-cta">
                        <a href="/pages/product-listing-page/product-listing.html" className="btn btn-primary">Shop now</a>
                        <a href="#categories" className="btn outline-btn-primary">Categories</a>
                    </div>
                </div>
            </div>
            
            {/* Category section */}
            <section className="text-center" id="categories">
                <h1 className="section-heading">Categories</h1>

                <div className="category-area">
                    {categories.map(({ _id, categoryName, image }) => (
                        <CategoryCard key={_id} category={categoryName} categoryImage={image} />
                    ))}
                </div>
            </section>
        </>
    );
}

export { Home };