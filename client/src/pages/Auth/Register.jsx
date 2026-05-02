import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Auth.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log("Register, ", name, email, password);
      toast.success("Registered Successfully");
      navigate("/login");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <div className="auth-container">
      <div className="card">
        <h2>Create An Account</h2>
        <p>Please enter your details to register</p>
        <div className="form-group mb-3">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          disabled={!name || !email || !password}
          onClick={handleSubmit}
        >
          REGISTER
        </button>
        <p className="mt-3">
          Already A User? <NavLink to="/login">Login Here!</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
