import "./categoryCard.css";

const CategoryCard = ({category, categoryImage}) => {


return(

<div className="category card text-card">
  <div className="overlay-container">
    <h1 className="overlay-text text-bolder">{category}</h1>
  </div>
  <img src={categoryImage} alt="category-card" />
</div>

);
};



export { CategoryCard };