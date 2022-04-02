import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { PrivateRouteContext } from "../../Context/privateRoute-context";
import { AuthContext } from "../../Context/auth-context";

export default function Login() {
  const navigate = useNavigate();
  const { userName, setUserName, password, setPassword, setLogged } =
    useContext(AuthContext);
  const { privateRoute, setPrivateRoute } = useContext(PrivateRouteContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (userName === "adarshbalika@neog.camp" && password === "password") {
      setPrivateRoute(true);
      setLogged(true);
      navigate("/ProductListing");
    } else {
      setPrivateRoute(false);
      setLogged(false);
      setUserName("");
      setPassword("");
    }
  };

  const setDummyData = (e) => {
    e.preventDefault();
    setUserName("adarshbalika@neog.camp");
    setPassword("password");
  };

  return (
    <div className="SignUp center">
      {console.log(privateRoute)}
      <div className="signUp-Container">
        <h1 className="signUp-heading">Login</h1>
        <form className="signup-contents">
          <label htmlFor="userNm" className="userNm">
            Email address
          </label>
          <input
            type="text"
            className="userNm"
            id="userNm"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label htmlFor="userPswd" className="userPswd">
            Password
          </label>
          <input
            type="password"
            className="userPswd"
            id="userPswd"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
            />
            <label htmlFor="userAgreement">Remember me</label>
            <a href="http://" rel="noopener noreferrer" className="forgotPswd">
              Forgot your password?
            </a>
          </div>

          <button
            className="signup-btns createNewAccount-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          <button className="signup-btns btn-dummyData" onClick={setDummyData}>
            Add Dummy username & password
          </button>
          <button className="signup-btns toSignUpPage-btn">
            <Link to="/SignUp">Create New Account &gt;</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
