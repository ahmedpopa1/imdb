import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  return (
   
      <div className="log">
      <div className="login-box">
        <p>Login</p>
        <div className="go-back-container">
          <button className="go-back" onClick={() => navigate(-1)}>
            ⬅ Go Back
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input required="" name="" type="text" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="password" />
            <label>Password</label>
          </div>

          <Link to="/profile">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="a2">
            Sign up!
          </Link>
        </p>
      </div>
      </div>
   
  );
}
