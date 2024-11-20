import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [sentOtp, setSentOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.phone === phone);

    if (user) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setSentOtp(generatedOtp);
      alert(`Your OTP is: ${generatedOtp}`);
    } else {
      setError('Phone number not registered.');
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === sentOtp) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userIndex = users.findIndex((user) => user.phone === phone);
      users[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Password updated successfully!');
      navigate('/login');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleVerifyOtp}>
        <input
          type="text"
          placeholder="Registered Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="button" onClick={handleSendOtp}>Send OTP</button>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
