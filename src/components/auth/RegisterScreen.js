import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

import { useForm } from "../../hooks/useForm";
import { startRegisterWithEmail } from "../../actions/auth";
import { useDispatch } from "react-redux";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [registerValues, handleInputChange] = useForm({
    name: "jela",
    email: "jela@.com",
    password: "123456",
    confirmPassword: "123456",
  });
  const [validForm, setValidForm] = useState({ valid: true, message: "" });

  const { email, name, password, confirmPassword } = registerValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setValidForm({ valid: true, message: "" });
      dispatch(startRegisterWithEmail(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      setValidForm({ valid: false, message: "Please fill the name" });
      return false;
    } else if (!validator.isEmail(email)) {
      setValidForm({ valid: false, message: "Please enter a valid email" });
      return false;
    } else if (password !== confirmPassword || password.length < 5) {
      setValidForm({
        valid: false,
        message: "Password require at least 5 characters and match each other",
      });
      return false;
    }
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleRegister}
      >
        {validForm.valid !== true && (
          <div className="auth__alert-error">{validForm.message}</div>
        )}
        <input
          type="text"
          className="auth__input"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Confirm password"
          name="confirmPassword"
          autoComplete="off"
          value={confirmPassword}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        {`Already registerd? `}
        <Link className="link " to="/auth/login">
          Login here
        </Link>
      </form>
    </>
  );
};
