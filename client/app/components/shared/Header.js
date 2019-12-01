import React from 'react';
import { Link } from "react-router-dom";
import { FaBluetooth, FaAlignRight } from 'react-icons/fa';


function Header() {

  const header = {
    padding: "16px",
    backgroundColor: "#20232a",
    color: "#ffffff",
    zIndex: "1",
    width: "100%",
    top: "0",
    left: "0",

  }
  const linkStyle = {
    textDecoration: "none",
    color: "#61dafb",
    fontSize: "24px",


  }
  return (
    <div style={header}>
      <Link style={linkStyle} to="/episodes">Episodes</Link>
    </div>
  )
}

export default Header
