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
    <main className="homepage">
      {/* Hero / Intro Section */}
      <section
        className="info-section"
        aria-label="Introduction to photographer"
      >
        <div className="info-content title-row">
          {/* Left Side: Photographer's Name */}
          <div className="info-text">
            <p className="info-subtitle">Photography by</p>
            <h1 className="info-title">Your Name</h1>
          </div>

          {/* Right Side: CTA */}
          <div className="cta-wrapper">
            <div className="cta-top-row">
              <span className="cta-text">Let's</span>
              <Link to="/contact" className="cta-button" aria-label="Contact">
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
            <span className="cta-text">Work Together</span>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <AboutSection preview={true} setActiveTab={setActiveTab} />

      {/* Work Section */}
      <section
        className="content-wrapper"
        aria-label="Photography Services and Gallery"
      >
        <header className="title-row">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e988908983e34bf6aa29948865286bf3/4eb2ae8ab2a996bd554b48b675226b405048c29f?placeholderIfAbsent=true"
            className="section-icon"
            alt="Photography icon"
          />
          <h2 className="photography-title">My Work:</h2>
        </header>

        {/* Services List */}
        <div
          className="services-list-columns"
          role="list"
          aria-label="Photography services offered"
        >
          {[leftServices, rightServices].map((columnServices, colIndex) => (
            <ul key={colIndex} className="services-column" role="list">
              {columnServices.map((service, index) => (
                <li
                  key={index}
                  className="service-item-vertical"
                  role="listitem"
                >
                  <div className="camera-circle" aria-hidden="true">
                    <img
                      src="/images/camera.png"
                      alt=""
                      className="camera-icon"
                      aria-hidden="true"
                    />
                  </div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Gallery Grid */}
        <section
          className="gallery-grid"
          aria-label="Photography portfolio gallery"
        >
          {[
            "/images/portrait-photography.jpg",
            "/images/commercial-photography.jpg",
            "/images/wedding-photography.jpg",
            "/images/nature-photography.jpg",
            "/images/travel-photography.jpg",
            "/images/holi-photography.jpg",
          ].map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`Photography sample ${idx + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default HomePage;
