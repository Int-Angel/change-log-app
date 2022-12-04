import React from "react";

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
          <p>You don't have and account? Register</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
