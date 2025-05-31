import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a
            href="https://www.facebook.com/hao.bich.594998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logo512.png" alt="UIT" />
          </a>
        </div>
        <nav className="nav">
          <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              BLOGS
            </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            MY PRODUCTS
          </NavLink>
          <NavLink
            to="/experiences"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            MY EXPERIENCES
          </NavLink>
          <NavLink
            to="/me"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT ME
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
