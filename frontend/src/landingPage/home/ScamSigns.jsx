import React from "react";
import { Link } from 'react-router-dom';

function ScamSigns() {
  return (
    <section className="scam-signs-section">
      <div className="container text-center">
        <h2 className="mb-4">🔍 5 Signs It’s a Scam</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ul className="scam-list">
              <li>❌ <strong>Urgent threats</strong> (e.g., "Your account is locked!")</li>
              <li>❌ <strong>Requests for payment</strong> via gift cards/crypto</li>
              <li>❌ <strong>Too-good-to-be-true offers</strong></li>
              <li>❌ <strong>Unverified links</strong> (phishing attempts)</li>
              <li>❌ <strong>Poor grammar & spelling</strong> in messages</li>
            </ul>
            <Link to="/peventionTips" className="btn btn-dark mt-3">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScamSigns;
