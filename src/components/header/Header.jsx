import "./header.css";
import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";

const Header = ({ navAside, setNavAside }) => {
const {
state: { token },
logout,
} = useAuth();

const {
state: { cartItems },
} = useCart();

const {
state: { wishedItems },
} = useWishlist();
return(
<nav className="navbar">
    <div className="left-navbar">
        <button id="menu-icon-button" className="burger-menu-button navlist-link-item">
            <i className="fas fa-bars" onClick={() => setNavAside(prevState => !prevState)}></i>
        </button>
        <Link to="/" className="link-no-style">
        <div className="nav-logo-title"> <span className="text-xl custom-color span-letter">K</span>ayy<span
                className="text-xl custom-color span-letter">S</span>hoppe</div>
        <div className="nav-logo-tagline custom-color">ITS KAYY TO SPLURGE!</div>
        </Link>
    </div>
    <div className="mid-navbar">
        <div className="nav-search-bar">
            <button className="btn search-btn"><i className="fas fa-search"></i></button>
            <input className="form-field" type="text" placeholder="search here..." />
        </div>
    </div>
    <ul className="right-navbar">
        <li>
            <Link to="/products" className="navlist-link-item display-none-link"> <button className="btn link-btn">Shop Now</button>
            </Link>
        </li>
        <li>
            <Link to="/wishlist" className="navlist-link-item"> <span className="badge-container"><i
                    className="fas fa-heart fa-md"></i>
                <span className={ token && wishedItems.length> 0
                    ? "status-badge number-badge"
                    : "display-none"
                    }
                    >
                    {wishedItems.length}
                </span>
            </span>
            </Link>
        </li>
        <li>
            <Link to="/cart" className="navlist-link-item"> <span className="badge-container"><i
                    className="fas fa-shopping-cart"></i>
                <span className={ token && cartItems.length> 0
                    ? "status-badge number-badge"
                    : "display-none"
                    }
                    >
                    {cartItems.length}
                </span>
            </span>
            </Link>
        </li>
        {token ? (
        <li>
            <Link to="/user/profile" className="navlist-link-item display-none-link">
            <i className="fas fa-user"></i>
            </Link>
        </li>
        ) : (
        <li>
            <Link to="/signin" className="navlist-link-item display-none-link"> <i className="fas fa-user"></i></Link>

        </li>
        )}

    </ul>
</nav>
);
};

export { Header };