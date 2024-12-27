import React from 'react';

const InputField = ({ label, type, placeholder }) => {
  return (
    <span className="form-group">
      <label >{label}</label>
      <input type={type} placeholder={placeholder} />
    </span>
  );
};


const Button = ({ label, type }) => {
    return (
      <button type={type} className="submit-button">
        {label}
      </button>
    );
  };
  
  const CheckBox = ({ label }) => {
    return (
        <div className="checkbox-group">
        <input type="checkbox" id="agree" />
        <label htmlFor="agree">
          {" "}
          {label}
        </label>
      </div>
    );
  };
  
 
export {InputField, Button,CheckBox};