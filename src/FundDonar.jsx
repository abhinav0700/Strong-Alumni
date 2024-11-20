import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FundDonar.css'; // Make sure to link the CSS file

function FundDonar() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path); // Redirect to the respective path
  };

  return (
    <div className="funddonar-container">
      <div className="funddonar-box">
        <h2 className="funddonar-title">Fund Donor</h2>
        <div className="funddonar-options">
          <button className="funddonar-button" onClick={() => handleRedirect('/creditcard')}>Credit Card</button>
          <button className="funddonar-button" onClick={() => handleRedirect('/debitcard')}>Debit Card</button>
          <button className="funddonar-button" onClick={() => handleRedirect('/netbanking')}>Net Banking</button>
          <button className="funddonar-button" onClick={() => handleRedirect('/upi')}>UPI</button>
        </div>
      </div>
    </div>
  );
}

export default FundDonar;
