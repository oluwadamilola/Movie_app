import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Navstyled, Nav} from '../../styles/style'

function Header() {
  return (
    <Navstyled>
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
    </Navstyled>
  );
}

export default Header
