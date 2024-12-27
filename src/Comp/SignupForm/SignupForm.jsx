import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button,InputField,CheckBox} from "../Component";
const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <>
    <div  className="user-form-container">
            <div  className="user-form">
            <div>
    
    <InputField  label="Name" type="text" placeholder="Enter your name here" />
    <InputField  label="Email id" type="email" placeholder="Enter your email id here" />
    <InputField label="Password" type="password" placeholder="Enter your password here" />
    </div>
   <CheckBox label={'By Signing up you agree to recieve updates and speacial Offers.'}/>
    <Button label="Submit" type="submit" />
            </div>
         
          
          <div className="image-side">
            <img
              src="https://cdni.iconscout.com/illustration/free/thumb/free-sign-up-form-illustration-download-in-svg-png-gif-file-formats--log-register-user-login-account-call-to-action-pack-design-development-illustrations-3798675.png?f=webp"
              alt="Signup illustration"
            />
          </div>
        </div>
    
        </>
  );
};

export default SignupForm;
