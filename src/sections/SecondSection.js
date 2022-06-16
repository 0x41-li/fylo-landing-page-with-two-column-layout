import React from "react";

export default function SecondSection(props) {
  return (
    <section className="second-section px-lg-0">
      <div className="container p-0">
        <div className="second-section__row row m-0 gap-lg-5 flex-lg-nowrap gap-xxl-0">
          <div className="second-section__text-part-col col-lg-6 p-0 flex-shrink-1 col-xxl-auto">
            <div className="second-section__text-part mx-auto mw-430">
              <h2 className="second-section__h2 text-white font-raleway fw-bold text-center text-lg-start">
                Get early access today
              </h2>
              <p className="second-section__para text-white font-open-sans fw-normal text-center mb-0 text-lg-start">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
          </div>
          <div className="second-section__form-col col-lg-6 col-xxl-auto p-0 flex-shrink-1">
            <div className="second-section__form mx-auto mw-430 mx-lg-0">
              <form
                action=""
                onSubmit={(e) => props.formSubmitHandler(e, "sEmail")}
                className="second-section__form"
                noValidate
              >
                <div className="second-section__input-box">
                  <input
                    className={
                      "second-section__input border-0 text-primary font-raleway mx-auto d-block mx-lg-0 mt-lg-0" +
                      (!props.formData.sEmail.valid ? " is-invalid" : "")
                    }
                    type="email"
                    name="sEmail"
                    placeholder="email@example.com"
                    value={props.formData.sEmail.value}
                    onChange={props.handleInputChange}
                  />

                  {!props.formData.sEmail.valid && (
                    <p className="second-section__error-form text-white font-open-sans text-center text-lg-start">
                      Please check your email
                    </p>
                  )}
                </div>
                <button className="second-section__btn btn btn-secondary text-white border-0 font-raleway fw-bold mx-auto d-block mx-lg-0">
                  Get Started For Free
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
