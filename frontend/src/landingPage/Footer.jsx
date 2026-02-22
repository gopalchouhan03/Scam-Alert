import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="footer-links">
          <button className="btn-link-style">About</button>
          <button className="btn-link-style">Contact</button>
          <button className="btn-link-style">Privacy Policy</button>
          <button className="btn-link-style">Terms</button>
        </div>
        <div className="social-icons">
          <button className="btn-link-style"><i className="fab fa-twitter"></i></button>
          <button className="btn-link-style"><i className="fab fa-facebook-f"></i></button>
          <button className="btn-link-style"><i className="fab fa-telegram-plane"></i></button>
        </div>
        <p className="copyright">© 2025 ScamAlert. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
