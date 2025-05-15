import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-telegram-plane"></i></a>
        </div>
        <p className="copyright">© 2025 ScamAlert. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
