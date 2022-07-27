import { useCategory } from "../../context";
import "./categoryCard.css";

const CategoryCard = ({category, categoryImage}) => {
const { navigateToCategory } = useCategory();

return(

<div className="category card text-card zoom" onClick={()=> navigateToCategory(category)}>
  <h1 className="category-overlay-text text-bolder">{category}</h1>
  <img src={categoryImage} alt="category-card" />
</div>

);
};



export { CategoryCard };