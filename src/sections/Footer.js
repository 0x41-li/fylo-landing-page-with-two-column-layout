import React from "react";

// logo
import { ReactComponent as Logo } from "../assets/images/white-logo.svg";

// icons
import { ReactComponent as PhoneIcon } from "../assets/icons/phone-in-talk.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
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
        <div className="footer__row row mx-0 mt-32 gx-0 justify-content-lg-between justify-content-xxl-start">
          <div className="footer__contact-list-col col-lg-4 col-xxl-auto">
            <ul className="footer__contact-list">
              <li className="d-flex align-items-center gap-16">
                <PhoneIcon className="footer__phone-svg" />
                <p className="footer__contact-list__p text-white mb-0 font-open-sans fw-normal">
                  Phone: +1-543-123-4567
                </p>
              </li>
              <li className="footer__contact-list__li-email d-flex align-items-center gap-16 mt-16">
                <EmailIcon className="footer__email-img" />
                <p className="footer__contact-list__p text-white mb-0 font-open-sans fw-normal">
                  example@fylo.com
                </p>
              </li>
            </ul>
          </div>
          <div className="footer__menu-col col-lg-2 col-xxl-auto mt-32 mt-lg-0">
            <ul className="footer__menu-list list-unstyled">
              <li>
                <a
                  href="#"
                  className="footer__menu-list__a text-decoration-none d-block font-open-sans fw-normal mb-0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__menu-list__a text-decoration-none d-block font-open-sans fw-normal mb-0 mt-16"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__menu-list__a text-decoration-none d-block font-open-sans fw-normal mb-0 mt-16"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__menu-list__a text-decoration-none d-block font-open-sans fw-normal mb-0 mt-16"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__smenu-col col-lg-2 col-xxl-auto mt-32 mt-lg-0">
            <ul className="footer__smenu-list list-unstyled">
              <li>
                <a
                  href="#"
                  className="footer__smenu-list__a text-decoration-none d-block font-open-sans mb-0 fw-normal"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__smenu-list__a text-decoration-none d-block font-open-sans mb-0 mt-16 fw-normal"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer__smenu-list__a text-decoration-none d-block font-open-sans mb-0 mt-16 fw-normal"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__social-media-col col-lg-2 col-xxl-auto mt-32 mt-lg-0">
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
