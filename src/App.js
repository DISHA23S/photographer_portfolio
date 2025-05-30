import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from './components/Login/Login';
import Signup from './components/Signup/Signuppage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Portfolio from './components/Portfolio/Portfolio';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Dashboard from './components/Dashboard/Dashboard';

import ProtectedRoute from './components/Firebase/ProtectedRoute';
import { AuthContext } from './components/Firebase/AuthContext';

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const { currentUser, isAdmin, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="loading-screen" style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0e0e10",
        color: "#fff",
        fontSize: "1.5rem"
      }}>
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <div className="app-wrapper">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/home"
              element={
                <ProtectedRoute isAuthenticated={!!currentUser}>
                  <HomePage setActiveTab={setActiveTab} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/portfolio"
              element={
                <ProtectedRoute isAuthenticated={!!currentUser}>
                  <Portfolio />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute isAuthenticated={!!currentUser}>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute isAuthenticated={!!currentUser}>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute isAuthenticated={!!currentUser && isAdmin}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
