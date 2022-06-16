import React, { useState } from "react";

// sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";

// scss
import "./scss/app.scss";

export default function App() {
  const [formData, setFormData] = useState({
    email: {
      value: "",
      valid: true,
      submittedOnce: false,
    },
    sEmail: {
      value: "",
      valid: true,
      submittedOnce: false,
    },
  });

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: {
        ...oldFormData[name],
        value: value,
        valid: oldFormData[name].submittedOnce ? isValidEmail(value) : true,
      },
    }));
  }

  function formSubmitHandler(e, name) {
    e.preventDefault();

    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        valid: isValidEmail(formData[name].value),
        submittedOnce: isValidEmail(formData[name].value) ? false : true,
      },
    });
  }

  return (
    <main>
      <Header />
      <Hero
        handleInputChange={handleInputChange}
        formSubmitHandler={formSubmitHandler}
        formData={formData}
      />
      <FirstSection />
      <SecondSection
        handleInputChange={handleInputChange}
        formSubmitHandler={formSubmitHandler}
        formData={formData}
      />
    </main>
  );
}

// from Grepper extension
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
