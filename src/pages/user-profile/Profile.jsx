import { useAuth } from "../../context";
import { ProfileListOptions } from "./ProfileList";
import "./profile.css";

const Profile = () => {
const {
state: { userName, email },
logout,
} = useAuth();

return(
<main className="profile-container flex-column">
    <h2 className="text-center">User Profile</h2>

    <div className="profile">
    <ProfileListOptions />
        <div className="profile-info">
            <div class="avatar avatar-lg">
                <img className="responsive-img profile-img"
                    src={'https://avatars.dicebear.com/api/initials/${userName}.svg'} alt="avatar-lg" />
            </div>

            <div className="details">
                <div className="info">
                    <span className="text-bold">Name</span>
                    <span>{userName}</span>
                </div>

                <div className="info">
                    <span className="text-bold">Email</span>
                    <span>{email}</span>
                </div>
            </div>
            <div className="profile-cta">
                <button className="btn btn-primary block-btn" onClick={()=> logout()}>
                    Log out
                </button>
            </div>
        </div>
    </div>
</main>
);
};

export { Profile };