import React, { useState, useEffect } from 'react';
import './FundRaise.css'; // Make sure the CSS file is linked properly

function FundRaise() {
  const [formData, setFormData] = useState({
    name: '',
    eventName: '',
    eventDescription: '',
    approxAmount: '',
    alumniEmail: '',
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
    if (!formData.alumniEmail.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulate an email sending process with a 3-second delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 3000);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Fund Raise</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="signup-input" required />
          <input type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} className="signup-input" required />
          <textarea name="eventDescription" placeholder="Event Description" value={formData.eventDescription} onChange={handleChange} className="signup-input" required />
          <input type="number" name="approxAmount" placeholder="Approx Amount" value={formData.approxAmount} onChange={handleChange} className="signup-input" required />
          <input type="email" name="alumniEmail" placeholder="Alumni Email" value={formData.alumniEmail} onChange={handleChange} className="signup-input" required />
          {error && <div className="error">{error}</div>}

          {/* Display different states based on submission */}
          {isSubmitting ? (
            <button className="signup-button" disabled>Filtering with Smart Search</button>
          ) : isSubmitted ? (
            <div className="success-message">
              <span className="success-tick">✔</span> Email sent successfully
            </div>
          ) : (
            <button type="submit" className="signup-button">Send Mail</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default FundRaise;
