import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const [registerValues, handleInputChange] = useForm({
    name: "jela",
    email: "jela@.com",
    password: "123456",
    confirmPassword: "123456",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerValues);
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          className="auth__input"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={registerValues.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={registerValues.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={registerValues.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Confirm password"
          name="confirmPassword"
          autoComplete="off"
          value={registerValues.confirmPassword}
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
