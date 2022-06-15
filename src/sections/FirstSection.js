import React from "react";

// images
import topCurveMobile from "../assets/images/first-section-top-curve.png";
import firstSectionIllustration from "../assets/images/first-section-illustration.png";
import kyleBurton from "../assets/images/kyle-burton-image.png";

// icons
import quotesIcon from "../assets/icons/quotes.png";
import rightArrowIcon from "../assets/icons/right-arrow.png";

export default function firstSection() {
  return (
    <section className="first-section">
      <div className="first-section__top-curve">
        <img className="w-100" src={topCurveMobile} alt="" />
      </div>
      <div className="first-section__content">
        <div className="container mx-auto d-lg-flex align-items-lg-center justify-content-lg-between gap-lg-5 align-items-xl-start p-0">
          <div className="first-section__illustr order-lg-2 mw-430 mx-auto mx-lg-0">
            <img
              src={firstSectionIllustration}
              alt=""
              className="first-section__img w-100"
            />
          </div>
          <div className="first-section__text-part mw-430 mx-auto mx-lg-0">
            <h2 className="first-section__h2 text-primary font-raleway text-center text-lg-start fw-bold">
              Stay productive, wherever you are
            </h2>
            <p className="first-section__fpara text-primary text-center text-lg-start font-open-sans fw-normal">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="first-section__spara text-primary text-center text-lg-start font-open-sans fw-normal">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <a href="#" className="first-section__link-wrapper text-center text-lg-start d-block">
              <span
                href="#"
                className="first-section__link text-decoration-none fw-normal font-open-sans d-inline-block position-relative"
              >
                See how Fylo works
                <span className="first-section__link__right-arrow d-inline-flex rounded-circle align-items-center justify-content-center align-top position-relative">
                  <img src={rightArrowIcon} alt="" />
                </span>
                <span className="first-section__link__underline"></span>
              </span>
            </a>
            <div className="first-section__feedback-box mx-auto mx-lg-0">
              <img
                className="first-section__feedback-quotes-img"
                src={quotesIcon}
                alt=""
              />
              <p className="first-section__feedback-para text-primary fw-normal font-open-sans">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="first-section__feedback-person d-flex">
                <div className="first-section__feedback-person-image">
                  <img
                    src={kyleBurton}
                    alt=""
                    className="first-section__person-img"
                  />
                </div>
                <div className="first-section__feedback-person-info">
                  <p className="first-section__feedback-person-name text-primary font-open-sans fw-bold mb-0">
                    Kyle Burton
                  </p>
                  <p className="first-section__feedback-person-job text-primary font-open-sans fw-normal mb-0">
                    Founder &amp; CEO, Huddle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
