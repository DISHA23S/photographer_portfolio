import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-links">
            <div className="footer-link">Terms & Conditions</div>
            <div className="footer-divider"></div>
            <div className="footer-link">Privacy Policy</div>
          </div>
          <div className="social-buttons-container">
            <button className="social-button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/0b242f0ff3ed52d4384da181f7e5530464a63d77?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </button>
            <button className="social-button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/ec2714fb35eced696f65afc05dc207517bf5df91?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </button>
            <button className="social-button">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/5a96035c82473100177e71dc3ef2aac5f4099b6b?placeholderIfAbsent=true"
                alt="Social Media"
                className="social-icon"
              />
            </button>
          </div>
          <div className="footer-copyright">
            © 2025 Name Photography. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
