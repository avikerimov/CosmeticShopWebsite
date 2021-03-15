import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-lg">
        <Link className="navbar-brand" to="/">
          Angel Cosmetics
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className="collapse navbar-collapse col-lg-6"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="#">
              בית <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              בשמים לגבר
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="DiorMan">
                Dior
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="ArmaniMan">
                Armani
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="CarolinaHerreraMan">
                Carolina Herrera
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="VersaceMan">
                Versace
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              בשמים לאישה
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="#">
                Dior
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Armani
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Carolina Herrera
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Versace
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              איפור
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="#">
                Dior
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Armani
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Carolina Herrera
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Versace
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              טיפוח פנים
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="#">
                Dior
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Armani
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Carolina Herrera
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Versace
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              קרם גוף
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="#">
                Dior
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Armani
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Carolina Herrera
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Versace
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-lg"></div>
    </nav>
  );
}

export default Navbar;
