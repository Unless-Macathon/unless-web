import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <NavLink className="navbar-brand" style={{color: '#7B2CBF'}} to="/">
            VOTE
          </NavLink>
          <div>
            <ul className="nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link link-dark px-2 active" style={{color: '#7B2CBF'}} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-dark px-2" style={{color: '#7B2CBF'}} to="/allparties">
                  All Parties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-dark px-2" style={{color: '#7B2CBF'}} to="/voting">
                  Voting
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-dark px-2" style={{color: '#7B2CBF'}} to="/statistics">
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="py-3 mb-4 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <span class="fs-4">VOTE</span>
          </a>
          <form class="col-12 col-lg-auto mb-3 mb-lg-0">
          </form>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
