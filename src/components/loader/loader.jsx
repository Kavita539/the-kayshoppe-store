import "./loader.css";

const Loader = () => {
    return(
        <div className="loader-container">
            <div className="loader">
                <img className="responsive-img" src="/assets/Spinner-1s-200px.svg"/>
            </div>
        </div>
    );
};

export { Loader };

