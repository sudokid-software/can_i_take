// import { Link } from "wouter";
import React, { useReducer, useRef } from "react";
import Nav from "../../../components/NavBar/Navbar";
import { reducer, init } from "../reducer";

const Register = (props) => {
  const [username, setUsername] = useReducer(reducer, props, init);
  const [email, setEmail] = useReducer(reducer, props, init);
  const [password1, setPassword1] = useReducer(reducer, props, init);
  const [password2, setPassword2] = useReducer(reducer, props, init);
  const form = useRef(null);
  let errors = useRef(false);

  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case 'username':
        setUsername({type: 'addUsername', username: e.target.value});
        return;
      case 'email':
        setEmail({type: 'addEmail', username: e.target.value});
        return;
      case 'password1':
        setPassword1({type: 'addPassword1', username: e.target.value});
        return;
      case 'password2':
        setPassword2({type: 'addPassword2', username: e.target.value});
        return;
      default:
        return;
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("UserName", username);
    console.log('Email', email);
    console.log('Password1', password1);
    console.log('Password2', password2);

    if (
      username !== '' || email !== '' || password1 !== '' || password2 !== ''
    ) {
      errors = 'Please fill out the full form';
      return;
    }

    if (password1 !== password2) {
      errors = 'Please make sure that your passwords match';
      return;
    }

    errors = false;
    form.current.reset()
  };

  return (
    <div>
      <Nav/>

      <div>
        <form>
          <input type="text"
                 name="user_name"
                 placeholder="User Name"
                 onChange={onChangeHandler} />
          <input type="text"
                 name="email"
                 placeholder="Email"
                 onChange={onChangeHandler} />
          <input type="password"
                 name="password1"
                 placeholder="Password"
                 onChange={onChangeHandler} />
          <input type="password"
                 name="password2"
                 placeholder="Password"
                 onChange={onChangeHandler} />
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  )
};

export { Register };
