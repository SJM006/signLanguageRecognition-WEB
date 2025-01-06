import React, { useState } from "react";
import "./Login.css";
import loginPageImage from "../../../assets/images/loginPageImage.jpg";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState(false);
  const [passowrd, setPassword] = useState(false);
  const [error, setError] = useState({
    email: "email",
    password: "pass",
  });
  const navigate = useNavigate();
  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='login-form'>
          <h1>Hello Again!</h1>
          <form>
            <div className='login-form-group'>
              <input type='email' placeholder='Email' required />
            </div>
            <p className='login-error'>{error.email}</p>
            <div className='login-form-group'>
              <input type='password' placeholder='Password' required />
              {isVisible ? (
                <FaEye
                  style={{ height: "35px", width: "35px", marginRight: "15px" }}
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                />
              ) : (
                <FaEyeSlash
                  style={{ height: "35px", width: "35px", marginRight: "15px" }}
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                />
              )}
            </div>
            <p className='login-error'>{error.password}</p>
            <div className='forgetPass'>
              <span>Forgot Password</span>
            </div>
            <button type='submit' className='login-btn'>
              Sign In
            </button>
          </form>
          <div className='login-navigation'>
            <p>Don't have an account?</p>
            <span
              onClick={() => {
                navigate("/Register");
              }}
            >
              Register
            </span>
          </div>
        </div>
        <div className='login-image'>
          <img src={loginPageImage} alt='Logo' />
        </div>
      </div>
    </div>
  );
};

export default Login;
