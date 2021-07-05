import React from "react";
import { Link } from "react-router-dom";
function NavLinks() {
  return (
    <div>
      <ul>
        {/* page refreshing problem */}
        {/* <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/contact">Contact us</a>
        </li> */}
        {/* no page refreshing problem */}

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/accessparam">Access param</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
