import React from "react";

// images
import illust from "../assets/images/hero-illustration.png";

export default function Hero(props) {
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
            onSubmit={(e) => props.formSubmitHandler(e, "email")}
            className="hero__form d-lg-flex gap-lg-3 justify-content-xxl-between"
            noValidate
          >
            <div className="hero__input-box mt-lg-0 position-relative">
              <input
                className={
                  "hero__input font-raleway" +
                  (!props.formData.email.valid && " is-invalid")
                }
                type="email"
                name="email"
                placeholder="Enter your email…"
                value={props.formData.email.value}
                onChange={props.handleInputChange}
              />
              {!props.formData.email.valid && (
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
