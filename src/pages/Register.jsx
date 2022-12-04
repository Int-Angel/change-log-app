import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  return (
    <div className="dotBackground">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Change Log</span>
          <span className="title">Register</span>
          <form>
            <input required type="text" placeholder="username" />
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <button>Sign up</button>
          </form>
          <p>
            You do have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
