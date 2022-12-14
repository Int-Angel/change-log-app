import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const signInURL = "/auth/signin";
    const loginPayload = {
      username: username,
      pass: password,
    };

    axios
      .post(signInURL, loginPayload)
      .then((response) => {
        setErr(false);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.app_user_id);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
      });
  };

  return (
    <div className="dotBackground">
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Change Log</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleChangeUsername}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChangePassword}
            />
            <button>Sign in</button>
          </form>
          {err ? <div className="error">Error</div> : null}
          <p>
            You don't have and account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
