import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          type="text"
          className="auth__input"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Password"
          name="password"
          autoComplete="off"
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Confirm password"
          name="confirm-password"
          autoComplete="off"
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
