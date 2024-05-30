import React from "react";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="cen navcont">
      <div className="cen navbar">
        <div >
          <h1>LOGO</h1>
        </div>
        <div className="cen option">
          <ul className="cen">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
