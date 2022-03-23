import React from 'react';
import "./Login.css"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    
      <div className="SignUp center">
                        <div className="signUp-Container">
                            <h1 className="signUp-heading">Login</h1>
                            <div className="signup-contents">
                                <label for="userNm" className="userNm">Email address</label>
                                <input type="text" className="userNm" id="userNm" placeholder="Enter username"/>
                                <br/>
                                <label for="userPswd" className="userPswd">Password</label>
                                <input type="password" className="userPswd" id="userPswd" placeholder="Enter password"/>
                                <br/>
                                <div className="check">
                                    <input type="checkbox" name="userAgreement" className="userAgreement"
                                        id="userAgreement"/>
                                    <label for="userAgreement">Remember me</label>
                                    <a href="http://" rel="noopener noreferrer" className="forgotPswd">Forgot
                                        your password?</a>
                                </div>
                                <br/>
                                <button className="signup-btns createNewAccount-btn">Login</button>
                                <br/>
                                <button className="signup-btns toLoginPage-btn"><Link to="/SignUp">Create New Account &gt;</Link></button>
                            </div>
                        </div>
                    </div>
    
  )
}
