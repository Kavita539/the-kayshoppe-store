import { useState } from "react";
import { AddressModal, AddressCard, Loader } from "../../components";
import { useAddress } from "../../context";
import { ProfileListOptions } from "./ProfileList";
import "./profile.css";

const UserAddress = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

const {
addressState: { address, isLoading },
} = useAddress();

return (
<main className="profile-container flex-column">
    <AddressModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

    <h2 className="text-center">User Profile</h2>

    <div className="profile">
        <ProfileListOptions />
        <div className="address-info flex-total-center flex-column">
            <div className="flex-total-center address-head">
                <h3 className="text-center">My Addresses</h3>
                <button className="btn outline-btn" onClick={()=> setIsModalOpen(true)}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>

            {isLoading &&
            <Loader />}
             {!address.length && !isLoading && <h3 className="text-center">No address available</h3>}
            {!isLoading &&
            address?.map(eachAddress =>
            <AddressCard key={eachAddress._id} address={eachAddress} />)}
        </div>
    </div>
</main>
);
};
export { UserAddress };