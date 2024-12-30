import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
