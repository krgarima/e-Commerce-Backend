import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";
import "./Login.css";

export default function Login() {
  const {
    setLogged,
    userName,
    setUserName,
    password,
    setPassword,
    rememberPassword,
    setRememberPassword,
  } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError(true);
      return;
    }
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: userName,
        password: password,
      });
      setLogged(true);
      localStorage.setItem("token", response.data.encodedToken);
      if (!rememberPassword) {
        setUserName("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
    navigate(-1);
  };

  const setDummyData = async (e) => {
    e.preventDefault();
    setUserName("marryjoe@gmail.com");
    setPassword("marryjoe12345");
    setError(false);
  };

  return (
    <div className="SignUp center">
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
            onChange={(e) => {
              setError(false);
              setUserName(e.target.value);
            }}
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
            onChange={(e) => {
              setError(false);
              setPassword(e.target.value);
            }}
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
              checked={rememberPassword ? "true" : ""}
              onClick={() => setRememberPassword(!rememberPassword)}
            />
            <label htmlFor="userAgreement">Remember me</label>
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
          {error && <div className="error-auth">Invalid input !</div>}
        </form>
      </div>
    </div>
  );
}
