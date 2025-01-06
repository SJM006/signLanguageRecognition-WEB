import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState({
    fName: "fname",
    lName: "lname",
    email: "email",
    password: "pass",
    confirmPass: "conpass",
  });
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/otp");
  };

  return (
    <div className='register-container'>
      <div className='register-box'>
        <h1>Create Account</h1>
        <form className='register-form'>
          <div className='register-form-group'>
            <input
              type='text'
              placeholder='Firstname'
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              required
              name='firstname'
              maxLength={12}
            />
          </div>
          <p className='register-error'>{error.fName}</p>
          <div className='register-form-group'>
            <input
              type='text'
              placeholder='Lastname'
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
              name='lastname'
              maxLength={12}
            />
          </div>
          <p className='register-error'>{error.lName}</p>
          <div className='register-form-group'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name='email'
            />
          </div>
          <p className='register-error'>{error.email}</p>
          <div className='register-form-group'>
            <input
              type={isVisible ? "text" : "password"}
              placeholder='Password'
              value={password}
              onChange={(e) => setPassowrd(e.target.value)}
              required
              name='password'
              maxLength={12}
            />
          </div>
          <p className='register-error'>{error.password}</p>
          <div className='register-form-group'>
            <input
              type={isVisible ? "text" : "password"}
              placeholder='Confirm Password'
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
            {isVisible ? (
              <FaEye
                style={{
                  height: "35px",
                  width: "35px",
                  marginRight: "15px",
                }}
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              />
            ) : (
              <FaEyeSlash
                style={{
                  height: "35px",
                  width: "35px",
                  marginRight: "15px",
                }}
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              />
            )}
          </div>
          <p className='register-error'>{error.confirmPass}</p>
          <button
            type='submit'
            className='register-btn'
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
        <div className='register-navigation'>
          <p>Already have an account?</p>
          <span
            onClick={() => {
              navigate("/Login");
            }}
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
