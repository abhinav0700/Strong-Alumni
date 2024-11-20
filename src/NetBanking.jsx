import React, { useState } from 'react';
import './NetBanking.css'; // Make sure the CSS file is linked properly

function NetBanking() {
  const [formData, setFormData] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: ''
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
    if (formData.accountNumber.length < 9) {
      setError('Please enter a valid account number.');
      return;
    }
    if (formData.ifscCode.length !== 11) {
      setError('Please enter a valid IFSC code.');
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
    <div className="netbanking-container">
      <div className="netbanking-box">
        <h2 className="netbanking-title">Net Banking</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="bankName"
              placeholder="Bank Name"
              value={formData.bankName}
              onChange={handleChange}
              className="netbanking-input"
              required
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={handleChange}
              className="netbanking-input"
              required
            />
            <input
              type="text"
              name="ifscCode"
              placeholder="IFSC Code"
              value={formData.ifscCode}
              onChange={handleChange}
              className="netbanking-input"
              required
            />
            {error && <div className="error">{error}</div>}
            {isSubmitting ? (
              <button className="netbanking-button" disabled>Submitting...</button>
            ) : (
              <button type="submit" className="netbanking-button">Submit</button>
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

export default NetBanking;
