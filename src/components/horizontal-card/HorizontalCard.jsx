import React, { useEffect, useState } from "react";
import axios from "axios";

const HorizontalCard = () => {
    const [featuredProducts, setFeaturedProducts]=useState([]);

    useEffect(() => {
        (async () => {
          try {
            const res = await axios.get("/api/products");
            if (res.status === 200) {
              setFeaturedProducts(res.data.featuredProducts);
            //   console.log(hello)
            }
          } catch (err) {
           console.log(error);
          }
        })();
      }, []);

    return(
        <section className="text-center">
        <h1 className="section-heading">Featured Products</h1>

        <div className="featured-products-area featured-products">
        {featuredProducts&& featuredProducts.map((featuredProduct) =>(
                <div key={featuredProduct?._id} class="card horizontal-card card-shadow">
                <span class="card-badge">New</span>
                <div class="card-image-container">
                    <img class="responsive-img rounded-top-corner-img" src="/assets/card-1-resized-image.jpg"
                        alt="card-img" />
                </div>
                <div class="card-info-container">
                    <div class="card-info text-left">
                        <div class="card-title">
                            <div>
                                <h3 class="card-title-header">{featuredProduct?.title}</h3>
                                <p class="card-paragraph">{featuredProduct?.featuredProductDescription}</p>
                            </div>
                        </div>
                        <div class="price">
                            <p class="discount-price">{featuredProduct?.price}</p>
                        </div>
                    </div>
                    <div class="card-call-to-action">
                        <button class="btn text-icon-btn btn-primary"><span><i
                                    class="fas fa-shopping-cart"></i></span>Add to cart</button>
                        <button class="btn outline-btn-secondary">Move to wishlist</button>
                    </div>
                </div>
            </div>
        ))}
        
        </div>
    </section>
    );
};

export { HorizontalCard };