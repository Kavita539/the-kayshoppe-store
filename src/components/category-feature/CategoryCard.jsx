import "./categoryCard.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryCard = () => {
    const [categories, setCategories] = useState([]);

useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/categories");
        if (res.status === 200) {
          setCategories(res.data.categories);
        }
      } catch (err) {
       console.log(error);
      }
    })();
  }, []);


    return(
        <section className="text-center" id="categories">
        <h1 className="section-heading">Categories</h1>

        <div className="category-area">
       
            {categories&& categories.map(( category ) => (
            <div key={category?._id} className="category card text-card">
                <div  className="overlay-container">
                    <h1 className="overlay-text text-bolder">{category?.categoryName}</h1>
                </div>
                <img src={category?.image}  />
            </div>
            ))}
        </div>
    </section>  
    
    );
};



export { CategoryCard };