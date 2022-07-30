import { useState, useEffect } from "react";
import { Modal } from "../modal/Modal";
import { Input } from "../input/Input";
import { validAddressFormChecker, toastStyle } from "../../utils";
import { useAddress } from "../../context";
import toast from "react-hot-toast";

const defaultValue = { name: "", mobile: "", zipCode: "", street: "", state: "", country: "" };

const AddressModal = ({
initialAddress = defaultValue,
isModalOpen,
setIsModalOpen,
isUpdating,
}) => {
const [userInput, setUserInput] = useState(initialAddress);
const [formErrors, setFormErrors] = useState({});
const [submitted, setSubmitted] = useState(false);

const { addNewAddress, editAddress } = useAddress();

useEffect(() => {
setFormErrors(() => validAddressFormChecker(userInput));
}, [userInput, submitted]);

const changeHandler = e => {
const { name, value } = e.target;
setUserInput({ ...userInput, [name]: value });
};

const formSubmitHandler = e => {
e.preventDefault();
setSubmitted(true);
if (!(Object.values(formErrors).length > 0)) {
if (isUpdating) {
editAddress(userInput);
setIsModalOpen(false);
setUserInput(initialAddress);
setSubmitted(false);
toast.success('Address Edited', toastStyle);
} else {
addNewAddress(userInput);
setIsModalOpen(false);
setUserInput(initialAddress);
setSubmitted(false);
toast.success('Address added', toastStyle);
}
}else {
    toast.error('please fill in the details', toastStyle);
}
};

const closeForm = e => {
e.preventDefault();
setUserInput(initialAddress);
setIsModalOpen(false);
};

const addDummyAddress = e => {
e.preventDefault();
setUserInput({
name: "Joseph Sitlani",
mobile: "7891234561",
zipCode: "400072",
street: "240 nd Floor Shivai Indl.estate Karghar , Navi Mumbai,",
state: "Maharashtra",
country: "India",
});
};

return (
<Modal parameter={isModalOpen}>
    <div className="dialog-modal-box">
    <form className="form-grp">
        <Input label="Name" name="name" required defaultValue={userInput.name} helperText={formErrors.name}
            showError={submitted} changeHandler={changeHandler} />
        <Input label="Street" name="street" required defaultValue={userInput.street} helperText={formErrors.street}
            showError={submitted} changeHandler={changeHandler} />
        <Input label="Zip-code" name="zipCode" required defaultValue={userInput.zipCode} helperText={formErrors.zipCode}
            showError={submitted} changeHandler={changeHandler} />
        <Input label="State" name="state" required defaultValue={userInput.state} helperText={formErrors.state}
            showError={submitted} changeHandler={changeHandler} />
        <Input label="Country" name="country" required defaultValue={userInput.country} helperText={formErrors.country}
            showError={submitted} changeHandler={changeHandler} />
        <Input label="Mobile" name="mobile" required defaultValue={userInput.mobile} helperText={formErrors.mobile}
            showError={submitted} changeHandler={changeHandler} />
        <div className="address-modal-cta">
            <button type="submit" onClick={e=> formSubmitHandler(e)} className="btn btn-primary address-form-btn">
                {isUpdating ? "Update" : "Save"}
            </button>
            {!isUpdating && (
            <button className="btn btn-secondary address-form-btn" onClick={e=> addDummyAddress(e)}>
                Add dummy address
            </button>
            )}
            <button className="btn btn-secondary address-form-btn" onClick={e=> closeForm(e)}>
                Cancel
            </button>
        </div>
    </form>
    </div>
</Modal>
);
};

export { AddressModal };