import React from "react";

// sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";

// scss
import "./scss/app.scss";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}
