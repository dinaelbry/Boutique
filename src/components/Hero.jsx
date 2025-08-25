import React from "react";
import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="home d-flex align-items-center text-center text-white"
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Discover Your style</h1>
          <p className="lead mb-4">
            {" "}
            Shop the latest fashion trends at Chic Boutique{" "}
          </p>
          <a href="#shop" className="btn btn-success btn-lg"> Show Shop </a>
        </div>
      </section>
    </>
  );
}
export default Hero;

