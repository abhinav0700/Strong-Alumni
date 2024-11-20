import React, { useState } from 'react';
import './DebitCard.css'; // Make sure the CSS file is linked properly

function DebitCard() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cardNumber') {
      // Automatically format the card number as _ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _
      const formattedCardNumber = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, [name]: formattedCardNumber }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simple validation
    if (formData.cardNumber.replace(/\s+/g, '').length !== 16) {
      setError('Please enter a valid 16-digit card number.');
      return;
    }
    if (formData.cvv.length !== 3) {
      setError('Please enter a valid 3-digit CVV.');
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
    <div className="debitcard-container">
      <div className="debitcard-box">
        <h2 className="debitcard-title">Debit Card</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              className="debitcard-input"
              maxLength="19"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              className="debitcard-input"
              maxLength="3"
              required
            />
            <div className="expiry-fields">
              <input
                type="text"
                name="expiryMonth"
                placeholder="MM"
                value={formData.expiryMonth}
                onChange={handleChange}
                className="debitcard-input expiry-input"
                maxLength="2"
                required
              />
              <input
                type="text"
                name="expiryYear"
                placeholder="YY"
                value={formData.expiryYear}
                onChange={handleChange}
                className="debitcard-input expiry-input"
                maxLength="2"
                required
              />
            </div>
            {error && <div className="error">{error}</div>}
            {isSubmitting ? (
              <button className="debitcard-button" disabled>Submitting...</button>
            ) : (
              <button type="submit" className="debitcard-button">Submit</button>
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

export default DebitCard;
