import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>© {new Date().getFullYear()} Signup & Login | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
