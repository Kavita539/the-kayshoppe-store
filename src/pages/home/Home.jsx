import "./home.css";
import { CategoryCard, Header, Footer, HorizontalCard } from "../../components";
import { featuredProducts } from "../../backend/db/products";

const Home = ()=>{
    return(
        <>
        <Header/>
        {/* Banner section for the e-commerce */}
          <div className="banner flex-center">
              
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

            <CategoryCard/>
        

            


            <section className="text-center">
                <h1 className="section-heading">Featured Products</h1>

                <div className="featured-products-area featured-products">
                {featuredProducts.map(({ title, imageDescription, featuredProductDescription, price, discountedPrice, image }) => (
            <HorizontalCard
              title={title}
              imageDescription={imageDescription}
              featuredProductDescription={featuredProductDescription}
              price={price}
              image={image}
            />
          ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export { Home };