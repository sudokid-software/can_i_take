import { Link } from "wouter";
import React from "react";

import "./navigation.scss";

const Nav = () => {
  return (
    <nav>
      <ol className="page-wrapper">
        <li>
          <Link className="nav-link" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" href={"/login"}>
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" href={"/register"}>
            Register
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
