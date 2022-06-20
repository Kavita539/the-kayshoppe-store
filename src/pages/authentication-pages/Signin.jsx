import { Header, Footer, Input,Loader } from "../../components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import { useAuth } from "../../context";
import { validLoginFormChecker } from "../../utils";
import "./authentication.css";

const Signin = () => {
const[loader, setLoader] = useState(false);
const[error, setError] = useState("");
const[userInput, setUserInput] = useState({
email: "",
password: "",
});
const [formErrors, setFormErrors] = useState({});
const [submitted, setSubmitted] = useState(false);
const { login } = useAuth();
let location = useLocation();
const from = location.state?.from.pathname || "/";

const changeHandler = e => {
const { name, value } = e.target;
setUserInput({ ...userInput, [name]: value });
};

const formSubmitHandler = e => {
e.preventDefault();
setSubmitted(true);

if (!(Object.values(formErrors).length > 0)) {
login(userInput, setLoader, setError, from);
setFormErrors({});
}
};

const loginAsGuest = e => {
e.preventDefault();
setSubmitted(true);
setUserInput({
email: "adarshbalika@gmail.com",
password: "adarshbalika",
});
login({ email: "adarshbalika@gmail.com", password: "adarshbalika" }, setLoader, setError, from);
};

useEffect(() => {
setFormErrors(() => validLoginFormChecker(userInput));
}, [userInput, submitted]);


return(
<>
  <Header />

  <div className="authentication-container">
    <div className="form-div">
      <form className="form-grp">
        <h3 className="text-center text-lg">SIGN IN</h3>
        {loader &&
        <Loader />}
        {error && <p className="text-danger text-center">{error}</p>}

        <Input type="Email" required={true} label="Email" placeholder="xyz@gmail.com" defaultValue={userInput.email}
          changeHandler={changeHandler} showError={submitted} helperText={formErrors.email} />



        <Input type="Email" required={true} label="password" placeholder="***********" defaultValue={userInput.password}
          changeHandler={changeHandler} showError={submitted} helperText={formErrors.password} />



        <div className="agreement-options">
          <label className="form-label-agreement" htmlFor="agreement"><input type="checkbox" name="agreement" />
            Remember me</label>
        </div>

        <div className="authentication-btn-cta">
          <button className="btn btn-primary block-btn submit-btn" onClick={e=> formSubmitHandler(e)}>Login</button>
        </div>
        <div className="authentication-btn-cta">
          <button className="btn outline-btn-primary block-btn submit-btn" onClick={e=> loginAsGuest(e)}>Login with Test
            Credentials</button>
        </div>


        <div className="redirect-link text-center">
          <button className="btn link-btn link-cta">
            <Link to="/signup">Create new
            account<i className="fas fa-chevron-right"></i></Link></button>
        </div>
      </form>
    </div>

  </div>
  <Footer />
</>
);
};

export { Signin };