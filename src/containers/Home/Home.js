import { Link } from "wouter";
import React from "react";

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to Can I Have</h1>
      <p>
        Will allow you to track who is currently using a service
      </p>
      <div className="reg-container">
        <div>
          <Link href="/login">
            <p className="App-link">Login</p>
          </Link>
        </div>
        <div>
          <Link href="/register">
            <p className="App-link">Register</p>
          </Link>
        </div>
        {/*<div>*/}
        {/*  <button onClick={askForPermissionToReceiveNotifications} >*/}
        {/*    Enable Push Notifications*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </header>
  </div>
);

export default Home;
