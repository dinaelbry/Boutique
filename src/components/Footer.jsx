import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-1">
      <div className="container text-center">
        <p>
          &copy; 2025 Build With &hearts; By ENG. Dina Elbry . All rights
          reserved.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#shop" className="text-white">
              Shop
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#about" className="text-white">
              About
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
