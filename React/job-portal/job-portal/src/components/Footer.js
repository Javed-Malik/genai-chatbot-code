import React from "react";
import "./Footer.css"; // Make sure this file is created for custom styling

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
