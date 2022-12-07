import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const signUpURL = "/auth/signup";
    const signUpPayload = {
      username: username,
      email: email,
      pass: password,
    };

    axios
      .post(signUpURL, signUpPayload)
      .then((response) => {
        console.log(response);
        setErr(false);
        window.location.href = "/login";
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
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="username"
              value={username}
              onChange={handleChangeUsername}
            />
            <input
              required
              type="email"
              placeholder="email"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              required
              type="password"
              placeholder="password"
              value={password}
              onChange={handleChangePassword}
            />
            <button>Sign up</button>
          </form>
          {err ? <div className="error">Error</div> : null}
          <p>
            You do have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
