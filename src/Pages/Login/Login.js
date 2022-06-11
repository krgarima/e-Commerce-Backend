import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Blackmole";
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

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userName || !password) {
      notify("Missing fields");
      return;
    } else if (
      userName !== "marryjoe@gmail.com" ||
      password !== "marryjoe12345"
    ) {
      notify("Incorrect username or password!");
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
      navigate(-1);
    } catch (error) {
      notify("Please refresh. Something went wrong!");
      // console.log(error);
    }
  };

  const setDummyData = async (e) => {
    e.preventDefault();
    setUserName("marryjoe@gmail.com");
    setPassword("marryjoe12345");
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
              readOnly
              checked={rememberPassword ? true : false}
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
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
