import React from "react";
import { Link } from "react-router-dom";
import { Navstyled, Nav, ListItem } from "../../styles/style";

function Header() {
  return (
    <Navstyled>
      <Nav className="navbar">
        <div className="nav">
          <ul className=" nav-links">
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/episodes">Episodes</Link>
            </ListItem>
          </ul>
        </div>
      </Nav>
    </Navstyled>
  );
}

export default Header;
