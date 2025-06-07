import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Firebase/authService";
import { getIdTokenResult } from "firebase/auth";
import "../Login/Login.css";
import bgImage from "../../assets/login-hero-bg.jpg";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      const userCredential = await login(email, password, false);
      const user = userCredential.user;
      const tokenResult = await getIdTokenResult(user);
      if (tokenResult.claims.admin) {
        navigate("/admin-dashboard");
      } else {
        setErrorMsg("You are not an admin user.");
      }
    } catch (error) {
      setErrorMsg("Invalid email or password.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "10px",
      }}
    >
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          {errorMsg && <p className="error-message">{errorMsg}</p>}
          <div className="input-field">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Enter your admin email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Enter your password</label>
          </div>
          <button type="submit">{loading ? "Logging in..." : "Log In as Admin"}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 