import React, { useReducer } from "react";
import PropTypes from "prop-types";

import { reducer, init } from "./auth-form.reducer";

import "./auth-form.scss";

const AuthForm = props => {
  const [formData, setFormData] = useReducer(reducer, props, init);

  const setError = (errString = "") => {
    // console.error(errString);
  };

  const checkForErrors = () => {
    const { username, email, password1, password2 } = formData;

    // Registration checks
    if (props.isRegister) {
      if (username === "" || email === "" || password1 === "" || password2 === "") {
        return setError("Missing fields");
      }

      if (password1 !== password2) {
        return setError("Please make sure that your passwords match");
      }
      // Login checks
    } else {
      if (username === "" || password1 === "") {
        return setError("Missing fields");
      }
    }

    setError("");
  };

  const onChangeHandler = event => {
    setFormData({ type: "UPDATE_FORM", name: event.target.name, value: event.target.value });
  };

  const onSubmitHandler = event => {
    event.preventDefault();

    checkForErrors();

    if (props.isRegister) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  const handleRegister = () => {};

  const handleLogin = () => {
    fetch("/manifest.json")
      .then(res => res.json())
      .then(res => {
        console.debug(res);

        // document
        if(res.statusText === 'OK'){
          window.location.href = window.location.origin + "/main";
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <form className="auth-form">
      {props.heading ? <h1 className="auth-form--heading">{props.heading}</h1> : null}
      {/* Registration Email field */}
      {props.isRegister ? (
        <input type="text" name="email" placeholder="Email" onChange={onChangeHandler} required />
      ) : null}
      <input
        type="text"
        name="username"
        placeholder="User Name"
        onChange={onChangeHandler}
        required
      />
      <input
        type="password"
        name="password1"
        placeholder="Password"
        onChange={onChangeHandler}
        required
      />
      {/* Registration password confirmation field */}
      {props.isRegister ? (
        <input
          type="password"
          name="password2"
          placeholder="Password"
          onChange={onChangeHandler}
          required
        />
      ) : null}
      <button onClick={onSubmitHandler}>{props.isRegister ? "Register" : "Login"}</button>
    </form>
  );
};

AuthForm.initialProps = {
  isRegister: false
};

AuthForm.propTypes = {
  heading: PropTypes.string,
  isRegister: PropTypes.bool
};

export default AuthForm;
