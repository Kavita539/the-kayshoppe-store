import "./header.css";
import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../context";

const Header = () => {
    const {
        state: { token },
        logout,
    } = useAuth();
    const {
        state: { cartItems },
    } = useCart();
return(
<nav className="navbar">
    <div className="left-navbar">
        <button id="menu-icon-button" className="burger-menu-button navlist-link-item">
            <i className="fas fa-bars"></i>
        </button>
        <Link to="/" className="link-no-style">
        <div className="nav-logo-title"> <span className="text-xl custom-color">K</span>ayy<span
                className="text-xl custom-color">S</span>hoppe</div>
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
            <Link to="/products" className="navlist-link-item"> <button className="btn link-btn">Shop Now</button>
            </Link>
        </li>
        <li>
            <Link to="/wishlist" className="navlist-link-item"> <i className="fas fa-heart fa-md"></i></Link>
        </li>
        <li>
            <Link to="/cart" className="navlist-link-item"> <i className="fas fa-shopping-cart"></i></Link>
        </li>
        {token ? (
        <li>
            <button className="btn outline-btn logout-btn" onClick={()=> logout()}>
                LogOut
            </button>
        </li>
        ) : (
        <li>
            <Link to="/signin" className="navlist-link-item"> <i className="fas fa-user"></i></Link>

        </li>
        )}

    </ul>
</nav>
);
};

export { Header };