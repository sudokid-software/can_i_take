import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { reducer, init } from "./auth-form.reducer";

import "./auth-form.scss";

const AuthForm = props => {
  const [formData, setFormData] = useReducer(reducer, props, init);
  const [error, setError] = useState('');

  const checkForErrors = () => {
    const { username, email, password1, password2 } = formData;

    // Registration checks
    if (props.isRegister) {
      if (username === "" || email === "" || password1 === "" || password2 === "") {
        setError("Missing fields");
        return true;
      }

      if (password1 !== password2) {
        setError("Please make sure that your passwords match");
        return true;
      }
      // Login checks
    } else {
      if (username === "" || password1 === "") {
        setError("Missing fields");
        return true;
      }
    }

    setError("");
    return false;
  };

  const onChangeHandler = event => {
    setFormData({ type: "UPDATE_FORM", name: event.target.name, value: event.target.value });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (checkForErrors()) {
      return;
    }

    if (props.isRegister) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  const handleRegister = () => {
    const {username, email, password1, password2} = formData;
    axios.post('http://localhost:4000/api/user/register', {
      username,
      email,
      password1,
      password2
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleLogin = () => {
  };

  return (
    <div className="auth-form">
      {props.heading ? <h1 className="auth-form--heading">{props.heading}</h1> : null}
      {/* Registration Email field */}
      {error!==''?<span>{error}</span>:null}
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
    </div>
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
