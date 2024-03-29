const Input = ({type, label, placeholder, mandatory, defaultValue, showError, helperText, disabled, name,
changeHandler}) => {
return(
<div className="input-grp"> <label className="form-label form-label-mandatory">{label}</label>
    <input className="form-field" type={type || "text" } placeholder={placeholder} defaultValue={defaultValue}
        required={mandatory} disabled={disabled} onChange={changeHandler} name={name} />
    <div className="text-danger">{showError && helperText}</div>
</div>
);
};

export { Input };