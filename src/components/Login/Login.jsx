import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../AuthContext';
import bgImage from '../../assets/login-hero-bg.jpg'; 
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (currentUser) {
      // Redirect to /home if user is logged in
      navigate('/home');
    }
  }, [currentUser, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // currentUser will be updated by onAuthStateChanged, triggering the useEffect above
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg(error.message);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '10px',
      }}
    >
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {errorMsg && <p className="error-message">{errorMsg}</p>}
          <div className="input-field">
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Enter your email</label>
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
          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Log In</button>
          <div className="register">
            <p>Don't have an account? <Link to="/signup">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
