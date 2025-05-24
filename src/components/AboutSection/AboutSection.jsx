import React from "react";
import { useNavigate } from "react-router-dom";  // import useNavigate
import "./AboutSection.css";

const AboutSection = ({ preview = false }) => {
  const navigate = useNavigate();  // initialize navigate

  return (
    <div className="about-section">
      <div className="about-header">
        <div className="about-label">About</div>
        {preview && (
          <button
            className="about-cta-button"
            onClick={() => navigate("/about")}  // navigate on click
          >
            Know More&nbsp;
            <img
              src="https://img.icons8.com/ios-filled/24/ffffff/right--v1.png"
              alt="Right Arrow"
              style={{ verticalAlign: "middle" }}
            />
          </button>
        )}
      </div>

      <div className="about-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/b5c3e7f42b72b4af8fd26f49a645e56ffc058cd3?placeholderIfAbsent=true"
          className="about-image"
          alt="Photographer"
        />

        <div className="about-details">
          <div className="about-intro">
            <div className="section-header">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/4eb2ae8ab2a996bd554b48b675226b405048c29f?placeholderIfAbsent=true"
                className="section-icon"
                alt=""
              />
              <h2 className="section-title">Introduction</h2>
            </div>
            <p className="intro-text">
              My journey as a photographer is a lifelong passion to capture the
              extraordinary within the everyday, to freeze fleeting moments, and
              to share the vibrant beauty of India through my lens. Rooted in
              the diverse and colorful landscapes of this incredible country, I
              draw inspiration from its rich heritage, bustling streets, and
              serene nature alike. Join me on this visual journey, where every
              photograph tells a unique story, and each frame reflects a piece
              of my soul.
            </p>
          </div>

          <div className="contact-info">
            <div className="section-header">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/4eb2ae8ab2a996bd554b48b675226b405048c29f?placeholderIfAbsent=true"
                className="section-icon"
                alt=""
              />
              <h2 className="section-title">Contact Information</h2>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <h3 className="contact-label">Email</h3>
                <div className="contact-value">name@gmail.com</div>
              </div>
              <div className="contact-item">
                <h3 className="contact-label">Phone Number</h3>
                <div className="contact-value">+91 000000000</div>
              </div>
            </div>

            <div className="contact-actions">
              <div className="social-buttons">
                <button className="social-button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/0859b59b29e9211275c0bd63e678e98efeec26d5?placeholderIfAbsent=true"
                    className="social-icon"
                    alt="Instagram"
                  />
                </button>
                <button className="social-button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/9caf242dac18e50aad2269f4fb76cc4e194b41f9?placeholderIfAbsent=true"
                    className="social-icon"
                    alt="Facebook"
                  />
                </button>
                <button className="social-button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/e6508e3b3ffc2b2014ca2ae847093414ced8a8be?placeholderIfAbsent=true"
                    className="social-icon"
                    alt="Twitter"
                  />
                </button>
              </div>

              <div className="action-buttons">
                <button 
                className="action-button"
                onClick={() => navigate("/contact")}>Let's Work</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
