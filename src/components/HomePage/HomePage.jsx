import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import AboutSection from "../AboutSection/AboutSection";

const HomePage = ({ setActiveTab = () => {} }) => {
  console.log("HomePage rendered");

  const services = [
    "Event Photography",
    "Commercial Photography",
    "Product Photography",
    "Wedding Photography",
    "Landscape Photography",
    "Portrait Photography",
    "Branding Photography",
  ];

  const leftServices = services.slice(0, 4);
  const rightServices = services.slice(4);

  return (
    <div className="homepage">
      <section className="info-section">
        <div className="info-content">
          <div className="info-text">
            <div className="info-subtitle">Photography by</div>
            <div className="info-title">Name</div>
          </div>

          <div className="info-cta">
            <div className="cta-wrapper">
              <div className="cta-text">Let's</div>
              <Link to="/contact" className="cta-button" aria-label="Work Together">
                <div className="arrow-icon">↗</div>
              </Link>
            </div>
            <div className="cta-subtitle">Work Together</div>
          </div>
        </div>
      </section>

      <AboutSection preview={true} setActiveTab={setActiveTab} />

      <div className="content-wrapper">
        <div className="title-row">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/4eb2ae8ab2a996bd554b48b675226b405048c29f?placeholderIfAbsent=true"
            className="section-icon"
            alt=""
          />
          <h2 className="photography-title">My Work:-</h2>
        </div>

        <div className="services-list-columns">
          <div className="services-column">
            {leftServices.map((service, index) => (
              <div key={index} className="service-item-vertical">
                <div className="camera-circle">
                  <img
                    src="/images/camera.png"
                    alt="Camera Icon"
                    className="camera-icon"
                  />
                </div>
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="services-column">
            {rightServices.map((service, index) => (
              <div key={index} className="service-item-vertical">
                <div className="camera-circle">
                  <img
                    src="/images/camera.png"
                    alt="Camera Icon"
                    className="camera-icon"
                  />
                </div>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="gallery-grid">
          <div className="gallery-item">
            <img
              src="/images/portrait-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img
              src="/images/commercial-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img
              src="/images/wedding-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img
              src="/images/nature-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img
              src="/images/travel-photography.jpg"
              alt="Photography sample"
            />
          </div>
          <div className="gallery-item">
            <img src="/images/holi-photography.jpg" alt="Photography sample" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
