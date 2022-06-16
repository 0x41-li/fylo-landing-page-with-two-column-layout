import React from "react";

// logo
import { ReactComponent as Logo } from "../assets/images/white-logo.svg";

// icons
import PhoneIcon from "../assets/icons/phone-in-talk.png";
import EmailIcon from "../assets/icons/email.png";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container p-0">
        <div className="footer__logo">
          <a href="" aria-label="The logo of the site takes to home">
            <Logo className="footer__logo__svg" />
          </a>
        </div>
        <div className="row mx-0 mt-32">
          <div className="col-lg-3 col-xxl-auto px-0">
            <ul className="footer__contact-list">
              <li className="d-flex align-items-center gap-16">
                <img src={PhoneIcon} alt="" className="footer__phone-img" />
                <p className="footer__contact-list__p text-white mb-0 font-open-sans fw-normal">
                  Phone: +1-543-123-4567
                </p>
              </li>
              <li className="d-flex align-items-center gap-16 mt-16">
                <img src={EmailIcon} alt="" className="footer__email-img" />
                <p className="footer__contact-list__p text-white mb-0 font-open-sans fw-normal">
                  example@fylo.com
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-xxl-auto mt-32 px-0 mt-lg-0">
            <ul className="footer__menu-list list-unstyled">
              <li>
                <a
                  href="#"
                  className="footer__menu-list__p text-decoration-none d-block text-white font-open-sans fw-normal mb-0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__menu-list__p text-decoration-none d-block text-white font-open-sans fw-normal mb-0 mt-16"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__menu-list__p text-decoration-none d-block text-white font-open-sans fw-normal mb-0 mt-16"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__menu-list__p text-decoration-none d-block text-white font-open-sans fw-normal mb-0 mt-16"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-xxl-auto mt-32 px-0 mt-lg-0">
            <ul className="footer__smenu-list list-unstyled">
              <li>
                <a
                  href="#"
                  className="footer__smenu-list__p text-decoration-none d-block text-white font-open-sans mb-0 fw-normal"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__smenu-list__p text-decoration-none d-block text-white font-open-sans mb-0 mt-16 fw-normal"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__smenu-list__p text-decoration-none d-block text-white font-open-sans mb-0 mt-16 fw-normal"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-xxl-auto mt-32 px-0 mt-lg-0">
            <ul className="footer__social-media d-flex list-unstyled justify-content-center">
              <li>
                <a
                  href="#"
                  className="footer__social-media__a d-flex align-items-center justify-content-center rounded-circle d-block"
                >
                  <FacebookIcon className="footer__social-media-svg d-block" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__social-media__a d-flex align-items-center justify-content-center rounded-circle d-block"
                >
                  <TwitterIcon className="footer__social-media-svg d-block" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__social-media__a d-flex align-items-center justify-content-center rounded-circle d-block"
                >
                  <InstagramIcon className="footer__social-media-svg d-block" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
