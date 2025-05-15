import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-center py-5 bg-light">
      <div className="container">
        <h1 className="fw-bold text-primary">Fighting Scams, Protecting You</h1>
        <p className="lead text-secondary">
          We verify, warn, and educate to keep you safe from fraud.
        </p>
        <div className="my-4">
          <img
            src="media/images/shieldblack.jpg"
            alt="Cybersecurity Shield"
            className="img-fluid rounded shadow"
            style={{width:"20%"}}
          />
        </div>
        <div>
          <Link to="/reportaScam" className="btn btn-danger me-2">
            Report a Scam
          </Link>
          <a href="/" className="btn btn-outline-primary">
            Learn How We Verify Scams
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
