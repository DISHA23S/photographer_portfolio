import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";  // Adjust path as needed
import { AuthContext } from "../AuthContext"; // if you want to update auth state globally
import Logo from "../../assets/Logo";
import "./Header.css";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" }, // remove if not used
  ];

  const navigate = useNavigate();
  const location = useLocation();

  // Optional: Access currentUser and auth state from context if needed
  const { currentUser } = useContext(AuthContext);

  const handleClick = (path) => {
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // After logout, redirect to login
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      // Optionally display error to user
    }
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="logo">
          <Logo />
        </div>

        <button className="mobile-menu">
          <i className="menu-2" aria-label="Toggle menu" />
        </button>

        <div className="nav-container">
          <nav className="main-nav">
            <div className="nav-tabs">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className={`nav-item ${
                    location.pathname === item.path ? "nav-item-active" : ""
                  }`}
                  onClick={() => handleClick(item.path)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </nav>

          <button
            className="contact-button"
            onClick={() => handleClick("/contact")}
          >
            Contact Me
          </button>

          {/* Logout button right after Contact Me */}
          {currentUser && (
            <button
              className="logout-button"
              onClick={handleLogout}
              style={{ marginLeft: "10px" }} // optional styling to separate buttons
            >
            <img src="/images/logout.png" alt="Logout" className="logout-icon" />
            </button>
          )}
        </div>
      </div>
      <div className="header-divider" />
    </div>
  );
};

export default Header;
