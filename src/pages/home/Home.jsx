import "./home.css";
import { CategoryCard, Header, Footer, HorizontalCard } from "../../components";
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
        <Header/>
        {/* Banner section for the e-commerce */}
          <div className="banner flex-center" style={{ backgroundImage: `url(https://www.pngmagic.com/product_images/ecommerce-website-banner.jpg)` }}>
              
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

            <CategoryCard/>
        
            <HorizontalCard />
            <Footer />
        </>
    );
}

export { Home };