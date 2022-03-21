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
// const HorizontalCard = ({title,
//     imageDescription,
//     featuredProductDescription,
//     price,
//     image,}) =>{
//     return (
//     <div className="card horizontal-card card-shadow">
//     <span className="card-badge">New</span>
//     <div className="card-image-container">
//         <img className="responsive-img rounded-top-corner-img" src={image}
//             alt={imageDescription} />
//     </div>
//     <div className="card-info-container">
//         <div className="card-info text-left">
//             <div className="card-title">
//                 <div>
//                     <h3 className="card-title-header">{title}</h3>
//                     <p className="card-paragraph">{featuredProductDescription}</p>
//                 </div>
//             </div>
//             <div className="price">
//                 <p className="discount-price">{price}</p>
//             </div>
//         </div>
//         <div className="card-call-to-action">
//             <button className="btn text-icon-btn btn-primary"><span><i
//                         className="fas fa-shopping-cart"></i></span>Add to cart</button>
//             <button className="btn outline-btn-secondary">Move to wishlist</button>
//         </div>
//     </div>
// </div>);
// };

export { HorizontalCard };