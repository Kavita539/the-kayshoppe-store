import { Input, PasswordInput, Loader } from "../../components";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./authentication.css";
import { useAuth } from "../../context";
import { validSignupFormChecker} from "../../utils";

const Signup = () => {
const { signup } = useAuth();
const [formErrors, setFormErrors] = useState({});
const [submitted, setSubmitted] = useState(false);
const [loader, setLoader] = useState(false);
const [error, setError] = useState("");
const [userInput, setUserInput] = useState({
name: "",
lastName: "",
email: "",
password: "",
confirmPassword: "",
agreement: "not agree",
});
const changeHandler = e => {
const { name, value } = e.target;
setUserInput({ ...userInput, [name]: value });
};

useEffect(() => {
setFormErrors(() => validSignupFormChecker(userInput));
}, [userInput, submitted]);

const formSubmitHandler = e => {
e.preventDefault();
setSubmitted(true);
if (!(Object.values(formErrors).length > 0)) {
signup(userInput, setLoader, setError);
setFormErrors({});
}
};

return(
<>
    <div className="authentication-container">
        <div className="form-div">
            <form className="form-grp">
                <h3 className="text-center text-lg">SIGN UP</h3>
                {loader &&
                <Loader />}
                {error && <p className="text-danger text-center">{error}</p>}
                <Input type="text" defaultValue={userInput.name} name="name" label="Name" helperText={formErrors.name}
                    showError={submitted} required={true} changeHandler={changeHandler} />

                <Input type="text" defaultValue={userInput.lastName} name="lastName" label="Lastname"
                    helperText={formErrors.lastName} showError={submitted} required={true}
                    changeHandler={changeHandler} />

                <Input type="email" defaultValue={userInput.email} name="email" label="Email"
                    helperText={formErrors.email} showError={submitted} required={true} changeHandler={changeHandler}
                    placeholder="example@xyz.com" />

                <PasswordInput defaultValue={userInput.password} name="password" label="Password"
                    helperText={formErrors.password} showError={userInput.password.length> 2 || submitted}
                    required={true}
                    changeHandler={changeHandler} />

                    <Input type="password" defaultValue={userInput.confirmPassword} name="confirmPassword"
                        label="Confirm Password" helperText={formErrors.confirmPassword}
                        showError={userInput.confirmPassword.length> 2 || submitted} required={true}
                    changeHandler={changeHandler} />


                    <div className="agreement-options">
                        <label htmlFor="agreement">
                            <input type="checkbox" name="agreement" onChange={changeHandler}
                                value={userInput.agreement==="agree" ? "not agree" : "agree" }
                                checked={userInput.agreement==="agree" } id="agreement" />
                            I agree to all Terms & Conditions
                        </label>

                        {submitted && (
                        <p className="text-danger text-xs text-center option-helper-txt">
                            {formErrors.agreement}
                        </p>
                        )}
                    </div>

                    <div className="authentication-btn-cta">
                        <button className="btn btn-primary block-btn submit-btn" onClick={e=>
                            formSubmitHandler(e)}>Create new account</button>
                    </div>

                    <div className="redirect-link text-center">
                        <button className="btn link-btn link-cta">
                            <Link to="/signin">Already have
                            an account?<i className="fas fa-chevron-right"></i></Link></button>
                    </div>
            </form>
        </div>

    </div>
</>
);
};

export { Signup };