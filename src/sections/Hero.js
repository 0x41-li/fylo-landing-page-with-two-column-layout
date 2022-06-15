import React, { useState } from "react";

// images
import illust from "../assets/images/hero-illustration.png";

export default function Hero() {
  const [email, setEmail] = useState({
    value: "",
    valid: true,
    submittedOnce: false,
  });

  function emailInputHandler(e) {
    const target = e.target;

    setEmail((oldEmail) => ({
      value: target.value,
      valid: oldEmail.submittedOnce ? isValidEmail(target.value) : true,
      submittedOnce: oldEmail.submittedOnce,
    }));
  }

  function formSubmitHandler(e) {
    e.preventDefault();

    setEmail({
      value: email.value,
      valid: !isValidEmail(email.value) ? false : true,
      submittedOnce: true,
    });
  }

  return (
    <section className="hero container p-lg-0 d-flex flex-column mx-auto flex-lg-row align-items-lg-center gap-lg-5 justify-content-xxl-between gap-xxl-0">
      <div className="hero__left-part order-1 order-lg-0 mx-auto mx-lg-0">
        <h1 className="text-primary text-center font-open-sans fw-bold text-lg-start">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="hero__para text-primary text-center font-open-sans fw-normal text-lg-start">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="hero__form-part">
          <form
            onSubmit={formSubmitHandler}
            className="hero__form d-lg-flex gap-lg-3 justify-content-xxl-between"
          >
            <div className="hero__input-box mt-lg-0">
              <input
                className={
                  "hero__input font-raleway" + (!email.valid && " is-invalid")
                }
                type="text"
                name="email"
                placeholder="Enter your email…"
                value={email.value}
                onChange={emailInputHandler}
              />
              {!email.valid && (
                <p className="invalid-feedback">Please check your email</p>
              )}
            </div>
            <button className="hero__btn btn btn-secondary d-block w-100 font-raleway fw-bold mt-lg-0">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="hero__right-part order-0 order-lg-1 mx-auto mx-lg-0">
        <img className="hero__img mx-auto d-block" src={illust} alt="" />
      </div>
    </section>
  );
}

// from Grepper extension
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
