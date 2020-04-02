// import { Link } from "wouter";
import React, { useReducer, useRef } from "react";
import Nav from "../../../components/NavBar/Navbar";
import { reducer, init } from "../reducer";

const Register = ({initial}) => {
  const [username, setUsername] = useReducer(reducer, initial, init);
  const [email, setEmail] = useReducer(reducer, initial, init);
  const [password1, setPassword1] = useReducer(reducer, initial, init);
  const [password2, setPassword2] = useReducer(reducer, initial, init);
  const form = useRef(null);
  let errors = useRef(false);

  const onChangeHandler = (e) => {
    console.log(e);
    setUsername({type: 'addUsername', username: e.target.value});
  };

  const handleClick = (event) => {
    event.preventDefault();

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

export default Register;
