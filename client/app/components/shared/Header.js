import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/app.scss"

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <ul className=" nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link  to="/episodes">Episodes</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header
