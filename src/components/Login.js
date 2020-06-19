import React, { useState, useEffect } from "react";
import "../style.css";
import { Dashboard } from "./Dashboard";
import { Register } from "./Register";

function Login(props) {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [isLogin, setLogin] = useState(false);
  let [showRegister, setRegister] = useState(false);

  const handleUsername = (value) => setUsername(value);
  const handlePassword = (value) => setPassword(value);

  useEffect(() => {}, []);

  const handleLogin = (e) => {
    e.preventDefault();

    let person = {
      username,
      password,
    };

    username &&
      password &&
      localStorage.setItem("person", JSON.stringify(person));

    setLogin(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegister(!showRegister);
  };

  return (
    <>
      {!isLogin ? (
        !showRegister ? (
          <form className="form-view">
            <h3>Login</h3>
            <div className="form-group">
              <label htmlFor="username" id="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                value={username}
                onChange={(e) => handleUsername(e.currentTarget.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" id="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => handlePassword(e.currentTarget.value)}
              />
            </div>
            <button className="showButton" onClick={handleRegister}>
              Register
            </button>
            <button className="showButton" onClick={handleLogin}>
              Login
            </button>
          </form>
        ) : (
          <Register />
        )
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export { Login };
