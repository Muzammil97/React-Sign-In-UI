import React from "react";
import { useNavigate } from "react-router-dom";
// import "./LoginForm.css";
import {Button,InputField,CheckBox} from "../Component";
const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <>
<div className="user-form-container">
        <div className="user-form">
          <div>
      <InputField  label="Email id" type="email" placeholder="Enter your email id here" />
      <InputField label="Password" type="password" placeholder="Enter your password here" />
      </div>
      <Button label="Submit" type="submit" />
      </div>
      
      <div className="image-side">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-illustration-download-in-svg-png-gif-file-formats--password-profile-businessman-pack-business-illustrations-5857593.png"
          alt="Sign In illustration"
        />
      </div>
    </div>

    </>
  );
};

export default LoginForm;

