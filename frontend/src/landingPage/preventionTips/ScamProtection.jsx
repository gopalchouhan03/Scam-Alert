import React from "react";
import { Link } from "react-router-dom";

function ScamProtection() {
  return (
    <div className="container-fluid bg-dark text-white py-5 text-center">
      <div className="container py-5">
        <h1 className="display-4 fw-bold text-warning">How to Protect Yourself from Scams</h1>
        <p className="lead">Learn the warning signs, avoid fraud, and stay safe online.</p>
        <Link to="/reportaScam" className="btn btn-danger btn-lg mt-3">Report a Scam</Link>
      </div>
    </div>
  );
};

export default ScamProtection;
