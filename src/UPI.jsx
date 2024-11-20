import React, { useState } from 'react';
import './UPI.css'; // Make sure the CSS file is linked properly

function UPI() {
  const [formData, setFormData] = useState({
    upiId: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simple validation
    if (!formData.upiId.includes('@')) {
      setError('Please enter a valid UPI ID.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulate a delay of 2 seconds before showing the success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="upi-container">
      <div className="upi-box">
        <h2 className="upi-title">UPI Payment</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="upiId"
              placeholder="Enter your UPI ID"
              value={formData.upiId}
              onChange={handleChange}
              className="upi-input"
              required
            />
            {error && <div className="error">{error}</div>}
            {isSubmitting ? (
              <button className="upi-button" disabled>Submitting...</button>
            ) : (
              <button type="submit" className="upi-button">Submit</button>
            )}
          </form>
        ) : (
          <div className="success-message">
            <span className="success-tick">✔</span> Submitted
          </div>
        )}
      </div>
    </div>
  );
}

export default UPI;
