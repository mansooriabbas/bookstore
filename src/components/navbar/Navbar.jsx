import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <main id="navbar">
      <nav className="selections">
        <p>
          <strong>Bookstore</strong>
        </p>
        <p>About</p>
        <p>Login</p>
        <p>News</p>
        <p>Search</p>
      </nav>
    </main>
  );
};
