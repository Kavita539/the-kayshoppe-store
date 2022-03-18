import "./categoryCard.css";

const CategoryCard = () => {
    return(
        <div class="category card text-card">
                        <div class="overlay-container">
                            <h2 class="overlay-text text-bolder">{category}</h2>
                        </div>
                        <img src={categoryImage} alt={category} />
                    </div>
    );
};

export { CategoryCard };