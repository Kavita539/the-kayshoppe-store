import { NavLink } from "react-router-dom";
import "./profile.css";

const ProfileListOptions = () => {
return (
<ul className="profile-list no-style-list flex-column">
    <li className="profile-list-item flex-total-center">
        <NavLink to="/user/profile" className={({ isActive })=>
            isActive ? "profile-links profile-active-link" : "profile-links"
            }
            >
            Profile
        </NavLink>
    </li>
    <li className="profile-list-item flex-total-center">
        <NavLink to="/user/address" className={({ isActive })=>
            isActive ? "profile-links profile-active-link" : "profile-links"
            }
            >
            Addresses
        </NavLink>
    </li>
    <li className="profile-list-item flex-total-center">
        <NavLink to="/user/orders" className={({ isActive })=>
            isActive ? "profile-links profile-active-link" : "profile-links"
            }
            >
            Orders
        </NavLink>
    </li>
</ul>
);
};

export { ProfileListOptions };