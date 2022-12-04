import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  return (
    <div className="dotBackground">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Change Log</span>
          <span className="title">Login</span>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Sign in</button>
          </form>
          <p>
            You don't have and account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
