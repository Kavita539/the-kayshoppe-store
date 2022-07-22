import "./home.css";
import { CategoryCard, Header, Footer, HorizontalCard, Loader } from "../../components";
import { Link } from "react-router-dom";
import { useCategory, useProducts } from "../../context";


const Home = ()=>{
const { categories, loader: categoryLoader, error: categoryError } = useCategory();
const {products, loader:productLoader, error:productError} = useProducts();
const featuredProducts = products.filter(product=>product.isFeatured);

return(
<>
    <Header />
    {/* Banner section for the e-commerce */}
    <div className="banner flex-center"
        style={{ backgroundImage: `url(https://www.pngmagic.com/product_images/ecommerce-website-banner.jpg)` }}>

        <div className="banner-content text-center">
            <h2 className="banner-heading"> <span className="banner-initials custom-color">K</span>ayy<span
                    className="banner-initials custom-color">S</span>hoppe</h2>
            <p className="banner-sub-heading custom-color">ITS KAYY TO SPLURGE!</p>
            <div className="banner-cta">
                <Link to="/products" className="btn btn-primary">Shop now</Link>
                <a href="#categories" className="btn outline-btn-primary">Categories</a>
            </div>
        </div>
    </div>

    {/* Category section */}
    <section className="text-center" id="categories">
        <h1 className="section-heading">Categories</h1>
        {categoryLoader &&
        <Loader />}
        {categoryError && <div>{categoryError}</div>}
        <div className="category-area">
            {categories &&
            categories.map(({ _id, categoryName, image }) => (
            <CategoryCard key={_id} category={categoryName} categoryImage={image} />
            ))}
        </div>
    </section>


    {/*
    <HorizontalCard /> */}
    {/* FeaturedProducts section */}
    <section className="text-center">
        <h1 className="section-heading">Featured Products</h1>
        {productLoader &&
        <Loader />}
        {productError && <div>{productError}</div>}
        <div className="featured-products-area featured-products">
        {featuredProducts.map(product => (
            <HorizontalCard key={product._id} product={product} />
          ))}
        </div>
    </section>
    <Footer />
</>
);
}

export { Home };