import React from "react";

export default function SecondSection() {
  return (
    <section className="second-section">
      <div className="container p-0">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="second-section__text-part mx-auto mw-430">
              <h2 className="second-section__h2 text-white font-raleway fw-bold text-center">
                Get early access today
              </h2>
              <p className="second-section__para text-white font-open-sans fw-normal text-center mb-0">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="second-section__form mx-auto mw-430">
              <form action="">
                <div className="second-section__input-box">
                  <input
                    className="second-section__input border-0 text-primary font-raleway mx-auto d-block"
                    type="text"
                    name="semail"
                    placeholder="email@example.com"
                  />
                </div>
                <button className="second-section__btn btn bg-secondary text-white border-0 font-raleway fw-bold mx-auto d-block">
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
