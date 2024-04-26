import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <h1>Food Supply Chain Management System</h1>
        <ul>
          <li>
            <a href="/">Add Food</a>
          </li>
          <li>
            <a href="/search">Search Food</a>
          </li>
          <li>
            <a href="/list">Food List</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
