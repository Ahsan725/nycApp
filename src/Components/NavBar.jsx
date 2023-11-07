import React, { useState, useEffect } from "react";
import {
  FaPaperPlane,
  FaIdBadge,
  FaInfoCircle,
  FaUserCheck,
  FaTimes
} from "react-icons/fa";
import { HiHome, HiMenu } from "react-icons/hi";
import "./NavBarStyles.css";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  // Use the window.innerWidth to determine the screen width
  // const screenWidth = window.innerWidth;
  // Set the clicked state based on the screen width
  // useEffect(() => {
  //   if (screenWidth <= 850) {
  //     setClicked(true); // Enable the menu button control on smaller screens
  //   } else {
  //     setClicked(false); // Disable the menu button control on larger screens
  //   }
  // }, [screenWidth]);

  return (
    <div className="NavBar">
      <nav className="NavbarItems">
        <h1 className="logotext">
          AlumLink <FaPaperPlane />
        </h1>
        <div className="menu-icons" onClick={toggleMenu}>
          {clicked ? (
            <FaTimes className="Cancel" />
          ) : (
            <HiMenu className="Hamburger" />
          )}
        </div>
        <ul className={`nav-menu ${clicked ? "active" : ""}`}>
          <li>
            <a href="index.html">
              <HiHome /> Home
            </a>
          </li>
          <li>
            <a href="index.html">
              <FaIdBadge /> Alum
            </a>
          </li>
          <li>
            <a href="index.html">
              <FaInfoCircle /> About
            </a>
          </li>
          <li>
            <a href="index.html">
              <FaUserCheck /> Log In
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
