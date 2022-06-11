import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./SignUp.css";

export default function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newPassword: "",
    checked: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign up | Blackmole";
  }, []);

  const notify = (msg) =>
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const signupHandler = async (event) => {
    event.preventDefault();
    console.log("xjh");
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.password ||
      !userData.newPassword ||
      !userData.checked
    ) {
      notify("Please fill out all the fields!");
      return;
    } else if (!userData.email.includes("@", ".")) {
      notify("Please fill in a valid email address!");
      return;
    } else if (userData.password !== userData.newPassword) {
      notify("Passwords don't match!");
      return;
    } else {
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
        notify("Please refresh. Something went wrong!");
      }
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
              checked={userData.checked}
              onChange={() =>
                setUserData({ ...userData, checked: !userData.checked })
              }
            />
            <label htmlFor="userAgreement">
              I accept all Terms & Conditions
            </label>
          </div>
          <br />
          <button
            className="signup-btns createNewAccount-btn"
            onClick={signupHandler}
          >
            Create my New Account
          </button>
          <br />
          <button className="signup-btns toLoginPage-btn">
            <Link to="/Login">Already have an account &gt;</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
