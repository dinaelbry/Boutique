import React from "react";
import about from "../assets/about.jpg"; 

function AboutUs() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">About Chic Boutique</h2>
        <div className="row">
          <div className="col-md-6">
            <p>
              Chic Boutique is your destination for high-quality, trendy
              clothing. We believe in empowering our customers to express their
              unique style with confidence. Our curated collections are designed
              to suit every occasion, from casual outings to elegant events.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src= {about}
              className="img-fluid rounded"
              alt="About Chic Boutique"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
