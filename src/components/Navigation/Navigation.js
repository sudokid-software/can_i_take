import { Link } from "wouter";
import React, { Fragment } from "react";

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
        {true?<li><Link className="nav-link" href={"/logout"}>Logout</Link></li>
          : <Fragment>
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
          </Fragment>
          }
      </ol>
    </nav>
  );
};

export default Nav;
