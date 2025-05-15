import React from "react";
import { Link } from 'react-router-dom';

const scams = [
  {
    title: "Tech Support Scam",
    risk: "High",
    stars: "⭐️⭐️⭐️⭐️⭐️",
    description: "Scammers impersonate support agents to steal info.",
    color: "red",
  },
  {
    title: "Amazon Prime Renewal Scam",
    risk: "Medium",
    stars: "⭐️⭐️⭐️⭐️",
    description: "Fake emails trick users into entering card details.",
    color: "red",
  },
  {
    title: "Fake IRS Calls",
    risk: "High",
    stars: "⭐️⭐️⭐️⭐️⭐️",
    description: "Fraudsters demand tax payments over the phone.",
    color: "red",
  },
  {
    title: "WhatsApp Lottery Scam",
    risk: "Medium",
    stars: "⭐️⭐️⭐️⭐️",
    description: "Users receive fake lottery winning messages.",
    color: "red",
  },
];

function ScamCards() {
  return (
    <section className="scam-section">
      <div className="container">
        <h2 className="text-white mb-5">🔥 Trending Scams This Week</h2>
        <div className="row">
          {scams.map((scam, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="scam-card">
                <h4>{scam.title}</h4>
                <p className={`risk-level ${scam.color}`}>{scam.risk} Risk {scam.stars}</p>
                <p>{scam.description}</p>
                <a href="#" className="btn btn-outline-light">Read Details</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/latestScam" className="btn btn-primary btn-lg">See All Scams</Link>
        </div>
      </div>
    </section>
  );
}

export default ScamCards;
