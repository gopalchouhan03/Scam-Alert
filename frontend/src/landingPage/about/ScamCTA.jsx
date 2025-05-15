import React from "react";
import { Link } from "react-router-dom";

function ScamCTA() {
  return (
    <div className="container-fluid bg-light py-4 mt-5 mb-5">
      <div className="container text-center">
        <h2 className="mb-3">Join the Fight Against Scams</h2>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/reportaScam" className="btn btn-danger btn-lg">
            Report a Scam
          </Link>

          <button className="btn btn-outline-primary btn-lg">Subscribe for Alerts</button>
        </div>
      </div>
    </div>
  );
};

export default ScamCTA;
