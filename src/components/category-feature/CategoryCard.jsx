import "./categoryCard.css";

const CategoryCard = ({categoryImage, category}) => {
    return(
        <div className="category card text-card">
                        <div className="overlay-container">
                            <h2 className="overlay-text text-bolder">{category}</h2>
                        </div>
                        <img src={categoryImage} alt={category} />
                    </div>
    );
};

export { CategoryCard };