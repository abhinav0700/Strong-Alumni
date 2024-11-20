import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css'; // Ensure the CSS file is linked properly

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: '',
    phone: '',
    role: '', // Alumni or Student
    yearOfPassing: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { role, email, password, confirmPassword, phone, age, yearOfPassing } = formData;
    const currentYear = new Date().getFullYear();

    // Basic validation checks
    if (!email.endsWith("@svce.ac.in")) {
      setError('Please use an institutional email (@svce.ac.in).');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number should be 10 digits.');
      return false;
    }

    if (role === "Student") {
      if (age <= 15) {
        setError('As a student, your age must be greater than 15.');
        return false;
      }
      if (yearOfPassing <= currentYear) {
        setError('As a student, your year of passing must be in the future.');
        return false;
      }
    } else if (role === "Alumni") {
      if (age < 22) {
        setError('As an alumni, your age must be greater than or equal to 22.');
        return false;
      }
      if (yearOfPassing > currentYear) {
        setError('As an alumni, your year of passing cannot be in the future.');
        return false;
      }
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the array
    const newUser = {
      email: formData.email,
      password: formData.password,
    };
    existingUsers.push(newUser);

    // Store updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Redirect to login page after signup
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="signup-input" required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="signup-input" required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="signup-input" required />
          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="signup-input" required />
          <select name="role" value={formData.role} onChange={handleChange} className="signup-input" required>
            <option value="">Select Role</option>
            <option value="Alumni">Alumni</option>
            <option value="Student">Student</option>
          </select>
          <input type="number" name="yearOfPassing" placeholder="Year of Passing" value={formData.yearOfPassing} onChange={handleChange} className="signup-input" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="signup-input" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="signup-input" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="signup-input" required />
          {error && <div className="error">{error}</div>}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="signup-footer">
          <p className="login-text">
            Already have an account? <Link to="/login" className="login-link">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
