// import { } from "wouter";
import React, { useReducer, useState, useRef } from "react";
import Nav from "../../../components/NavBar/Navbar";
import { reducer, init } from "./reducer";

import "./Register.scss";

const Register = (props) => {
  const [formData, setFormData] = useReducer(reducer, props, init);
  const form = useRef(null);
  let [error, setError] = useState('');

  const onChangeHandler = (e) => {
    setFormData({type: 'UPDATE_FORM', name: e.target.name, value: e.target.value});
  };

  const handleClick = async (event) => {
    event.preventDefault();

    const {username, email, password1, password2} = formData;
    if (
      username === '' || email === '' || password1 === '' || password2 === ''
    ) {
      return setError('Missing fields');
    } else if (password1 !== password2) {
      return setError('Please make sure that your passwords match');
    }

    fetch('http://localhost:4000/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email, password1, password2})
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });

    setError('');
    // document
    // window.location.href = window.location.origin + '/main'
  };

  return (
    <div>
      <Nav/>
      <div>
        <h1>Register</h1>
        {error !== ''?<span>{error}</span>:<span/>}
        <form ref={form}>
          <input type="text"
                 name="username"
                 placeholder="User Name"
                 onChange={onChangeHandler}
                 required />
          <input type="text"
                 name="email"
                 placeholder="Email"
                 onChange={onChangeHandler}
                 required />
          <input type="password"
                 name="password1"
                 placeholder="Password"
                 onChange={onChangeHandler}
                 required />
          <input type="password"
                 name="password2"
                 placeholder="Password"
                 onChange={onChangeHandler}
                 required />
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Register;
