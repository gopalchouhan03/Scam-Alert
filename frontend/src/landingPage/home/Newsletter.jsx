import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`); // Replace with API integration
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="container text-center">
        <h2>📩 Get Scam Alerts in Your Inbox</h2>
        <p>Weekly updates on new scams & safety tips.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <button type="submit" className="btn btn-warning">Subscribe</button>
        </form>
        <small className="privacy-text">We never spam. Unsubscribe anytime.</small>
      </div>
    </section>
  );
}

export default Newsletter;
