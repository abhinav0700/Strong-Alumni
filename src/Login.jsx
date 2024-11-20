import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Ensure the CSS file is linked properly

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submit action

    // Get the list of users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the entered email and password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // On successful login, navigate to the homepage
      navigate('/homepage');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Log in</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="login-footer">
          <a href="#" className="forgot-password">
            <Link to="/forgotpassword">Forgot Password?</Link>

          </a>
          <p className="register-text">
            Don't have an account? <Link to="/signup" className="register-link">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
