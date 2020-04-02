import { Link } from "wouter";
import './Navbar.scss';
import React from "react";

const Nav = () => {
  return (
    <nav className="main-nav">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/register"}>Register</Link>
      </div>
      <div>
        <Link href={"/login"}>Login</Link>
      </div>
    </nav>
  )
};

export default Nav;
