import React, { Component } from "react";
import PropTypes from "prop-types";
import { Login } from "./Login";

class Register extends Component {
  state = {
    showLogin: false,
  };

  handleRegister = (e) => {
    e.preventDefault();
  };

  handleLoginClick = () => {
    this.setState({ showLogin: true });
  };

  render() {
    let { fullname, email, mobile, password, confirmpassword } = this.props;

    return (
      <>
        {!this.state.showLogin ? (
          <form className="form-view">
            <h3> Register</h3>
            <div className="form-group">
              <label htmlFor="fullname" id="fullname">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" id="email">
                Email ID
              </label>
              <input type="email" id="email" name="email" value={email} />
            </div>
            <div className="form-group">
              <label htmlFor="mobile" id="mobile">
                Mobile
              </label>
              <input id="mobile" name="mobile" value={mobile} />
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword" id="confirmpassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                value={confirmpassword}
              />
            </div>
            <button className="showButton" onClick={this.handleRegister}>
              Register
            </button>
            <button className="showButton" onClick={this.handleLoginClick}>
              Login
            </button>
          </form>
        ) : (
          <Login />
        )}
      </>
    );
  }
}

Register.propsTypes = {};

export { Register };
