import { useState } from "react";
import "./input.css"

const PasswordInput = ({label, placeholder, mandatory, defaultValue, errorText, helperText, disabled, name,
changeHandler}) => {
const [showPassword, setShowPassword] = useState(false);

const togglePassword = e => {
e.preventDefault();
setShowPassword(prevState => !prevState);
};
return(
<div className="input-grp"> <label className={mandatory ? "form-label form-label-mandatory" : "form-label "
        }>{label}</label>
    <input className="form-field" type={showPassword ? "text" : "password" } placeholder={placeholder}
        defaultValue={defaultValue} required={mandatory} disabled={disabled} onChange={changeHandler} name={name} />
    <button onClick={togglePassword} className="password-toggle-button btn outline-btn">
        {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
    </button>
    <div className="text-danger">{errorText && helperText}</div>
</div>
);
};

export { PasswordInput };