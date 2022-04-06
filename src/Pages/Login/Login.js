import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { userName, setUserName, password, setPassword, setLogged } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const encodedToken = localStorage.getItem("token");
    if (
      encodedToken &&
      userName === "adarshbalika@neog.camp" &&
      password === "password"
    ) {
      setLogged(true);
      navigate("/ProductListing");
    } else {
      setLogged(false);
      setUserName("");
      setPassword("");
    }
  };

  const setDummyData = async (e) => {
    e.preventDefault();
    setUserName("adarshbalika@neog.camp");
    setPassword("password");

    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: "Adarsh",
        lastName: "Balika",
        email: "adarshbalika@neog.camp",
        password: "adarshBalika",
      });
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SignUp center">
      <div className="signUp-Container">
        <h1 className="signUp-heading">Login</h1>
        <form className="login-contents">
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
            <Link to="/SignUp">Create a New Account &gt;</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
