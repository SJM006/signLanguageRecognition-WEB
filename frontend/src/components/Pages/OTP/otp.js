import React, { useState, useEffect } from "react";
import axios from "axios";
import "./otp.css";
import otpPageImage from "../../../assets/images/otpPageImage.png";

const OTPVerification = () => {
  const [email, setEmail] = useState("ayanokoji1610@gmail.com");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(30);

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if not empty, otherwise move to previous input
      if (value && index < otp.length - 1) {
        e.target.nextSibling.focus();
      } else if (!value && index > 0) {
        e.target.previousSibling.focus();
      }
    }
  };

  // Handle resend OTP
  const handleResend = () => {
    setOtp(new Array(4).fill(""));
    setTimer(30); // Reset timer
  };

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const sendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/send-otp", {
        email: email,
      });
      setMessage(response.data.message);
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        otp: otp.join(""),
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error verifying OTP");
    }
  };

  return (
    <div className='otp-main'>
      <div className='otp-container'>
        <img src={otpPageImage} />
        <h2>Please Verify Account</h2>
        <p>Enter the 4 digit code we sent to {email}:</p>
        <div className='otp-box'>
          {otp.map((value, index) => (
            <input
              key={index}
              type='text'
              maxLength='1'
              value={value}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <button className='verify-btn' onClick={verifyOtp}>
          Verify & Continue
        </button>
        <br />

        {timer > 0 ? (
          <p>Resend OTP in {timer} seconds</p>
        ) : (
          <button className='cancel-btn' onClick={handleResend}>
            Resend
          </button>
        )}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default OTPVerification;
