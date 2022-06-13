import React from "react";

import { ReactComponent as Logo } from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="container d-flex justify-content-between align-items-center p-xl-0">
      <div className="header__logo">
        <a href="#" aria-label="Go To Home">
          <Logo className="header__logo__svg" />
        </a>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__ul d-flex list-unstyled">
          <li>
            <a className="header__ul__link text-primary text-decoration-none" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="header__ul__link text-primary text-decoration-none" href="#">
              Team
            </a>
          </li>
          <li>
            <a className="header__ul__link text-primary text-decoration-none" href="#">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
