import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Auth.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      toast.success("Login Successfully");
      navigate("/profile");

      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="auth-container">
      <div className="card">
        <h2>Login</h2>
        <p>Please enter your email and password</p>
        <div className="form-group mb-3">
          <input
            type="eamil"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={ !email || !password}
          onClick={handleSubmit}
        >
          LOGIN
        </button>
        <p className="mt-3">
          Not  A User? <NavLink to="/register">Register Here!</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
