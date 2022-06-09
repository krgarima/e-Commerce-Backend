import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

export default function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newPassword: "",
  });

  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const signupHandler = async () => {
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.password ||
      !userData.newPassword ||
      userData.password !== userData.newPassword ||
      !userData.email.includes("@")
    ) {
      setError(true);
      return;
    }

    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        newPassword: "",
      });
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="SignUp center">
      <form className="signUp-Container">
        <h1 className="signUp-heading">Sign Up</h1>
        <div className="signup-contents">
          <label htmlFor="userFName" className="userNm">
            First Name
          </label>
          <input
            type="text"
            className="userNm"
            id="userFName"
            placeholder="Enter your First Name"
            value={userData.firstName}
            onChange={(event) => {
              setError(false);
              setUserData({ ...userData, firstName: event.target.value });
            }}
          />
          <br />
          <label htmlFor="userLName" className="userNm">
            Last Name
          </label>
          <input
            type="text"
            className="userNm"
            id="userLName"
            placeholder="Enter your Last Name"
            value={userData.lastName}
            onChange={(event) => {
              setError(false);
              setUserData({ ...userData, lastName: event.target.value });
            }}
          />
          <br />
          <label htmlFor="userEmail" className="userNm">
            Email address
          </label>
          <input
            type="text"
            className="userNm"
            id="userEmail"
            placeholder="johndoe@gmail.com"
            value={userData.email}
            onChange={(event) => {
              setError(false);
              setUserData({ ...userData, email: event.target.value });
            }}
          />
          <br />
          <label htmlFor="userNewPswd" className="userPswd">
            Password
          </label>
          <input
            type="password"
            className="userPswd"
            id="userNewPswd"
            placeholder="Enter a new password"
            value={userData.password}
            onChange={(event) => {
              setError(false);
              setUserData({ ...userData, password: event.target.value });
            }}
          />
          <br />
          <label htmlFor="userRetypePswd" className="userPswd">
            Confirm Password
          </label>
          <input
            type="password"
            className="userPswd"
            id="userRetypePswd"
            placeholder="Re-type your password"
            value={userData.newPassword}
            onChange={(event) => {
              setError(false);
              setUserData({ ...userData, newPassword: event.target.value });
            }}
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
              onClick={() => setDisable(!disable)}
            />
            <label htmlFor="userAgreement">
              I accept all Terms & Conditions
            </label>
          </div>
          <br />
          <button
            className="signup-btns createNewAccount-btn"
            disabled={disable}
            onClick={(event) => {
              event.preventDefault();
              signupHandler();
            }}
          >
            Create my New Account
          </button>
          <br />
          <button className="signup-btns toLoginPage-btn">
            <Link to="/Login">Already have an account &gt;</Link>
          </button>
          {error && <div className="error-auth">Invalid input !</div>}
        </div>
      </form>
    </div>
  );
}
