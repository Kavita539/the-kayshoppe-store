import "./header.css";

const Header = () => {
    return(
        <nav className="navbar">
                <div className="left-navbar">
                    <button id="menu-icon-button" className="burger-menu-button navlist-link-item">
                        <i className="fas fa-bars"></i>
                    </button>
                    <a className="link-no-style" href="./">
                        <div className="nav-logo-title"> <span className="text-xl custom-color">K</span>ayy<span
                                className="text-xl custom-color">S</span>hoppe</div>
                        <div className="nav-logo-tagline custom-color">ITS KAYY TO SPLURGE!</div>
                    </a>
                </div>
                <div className="mid-navbar">
                    <div className="nav-search-bar">
                        <button className="btn search-btn"><i className="fas fa-search"></i></button>
                        <input className="form-field" type="text" placeholder="search here..." />
                    </div>
                </div>
                <ul className="right-navbar">
                    <li>
                        <a className="navlist-link-item" href="/pages/wishlist-page/wishlist-page.html"> <i
                                className="fas fa-heart fa-md"></i></a>
                    </li>
                    <li>
                        <a className="navlist-link-item" href="/pages/cart-management-page/cart-management.html"> <i
                                className="fas fa-shopping-cart"></i></a>
                    </li>
                    <li>
                        <a className="navlist-link-item" href="/pages/authentication-pages/signin-page.html"> <button
                                className="btn btn-primary">Login</button></a>
                    </li>
                </ul>
            </nav>
    );
};

export { Header };