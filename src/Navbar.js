import React, { useState, useEffect } from "react";
import Logo from "./img/nutflex_logo.png";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Logo} alt="Nutflex Logo" />

      <img
        className="nav__avatar"
        src={"https://avatars.dicebear.com/api/bottts/karl.svg"}
        alt="Nutflex "
      />
    </div>
  );
}

export default Navbar;
