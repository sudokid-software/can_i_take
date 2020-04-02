import React, { useReducer } from "react";
import PropTypes from "prop-types";

import { reducer, init } from "./auth-form.reducer";

import "./auth-form.scss";

const AuthForm = props => {
  const [formData, setFormData] = useReducer(reducer, props, init);

  const setError = (errString = "") => {};

  const onChangeHandler = e => {
    setFormData({ type: "UPDATE_FORM", name: e.target.name, value: e.target.value });
  };

  const onLoginHandler = async event => {
    event.preventDefault();

    const { username, email, password1, password2 } = formData;
    console.log("FormData:", formData);

    fetch("/manifest.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });

    if (username === "" || email === "" || password1 === "" || password2 === "") {
      return setError("Missing fields");
    } else if (password1 !== password2) {
      return setError("Please make sure that your passwords match");
    }

    setError("");
    // document
    window.location.href = window.location.origin + "/main";
  };

  const onRegisterHandler = event => {};

  return (
    <form className="auth-form">
      {props.heading ? <h1 className="auth-form--heading">{props.heading}</h1> : null}
      {/* Registration Email */}
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
      {/* Registration password confirmation */}
      {props.isRegister ? (
        <input
          type="password"
          name="password2"
          placeholder="Password"
          onChange={onChangeHandler}
          required
        />
      ) : null}
      {props.isRegister ? (
        <button onClick={onRegisterHandler}>Register</button>
      ) : (
        <button onClick={onLoginHandler}>Login</button>
      )}
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
