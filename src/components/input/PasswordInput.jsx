import { useState } from "react";
import "./input.css"

const PasswordInput = ({label, placeholder, mandatory, defaultValue, showError, helperText, disabled, name,
changeHandler}) => {
const [showPassword, setShowPassword] = useState(false);

return(
<div className="input-grp"> <label className={mandatory ? "form-label form-label-mandatory" : "form-label "
        }>{label}</label>
    <input className="form-field" type={showPassword ? "text" : "password" } placeholder={placeholder}
        defaultValue={defaultValue} required={mandatory} disabled={disabled} changeHandler={changeHandler} name={name} />

    <div className="text-danger">{showError && helperText}</div>
</div>
);
};

export { PasswordInput };