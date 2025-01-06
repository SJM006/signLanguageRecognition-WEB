const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

let generatedOTP;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "darkcognition17@gmail.com",
    pass: "@darkcognition10",
  },
});

app.post("/send-otp", (req, res) => {
  const { email } = req.body;
  console.log(email);

  // Generate a 4-digit OTP
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();

  const mailOptions = {
    from: "darkcognition17@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${generatedOTP}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Error sending email", error });
    }
    res.status(200).json({ message: "OTP sent successfully" });
  });
});

app.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp === generatedOTP) {
    res.status(200).json({ message: "OTP verified successfully" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
