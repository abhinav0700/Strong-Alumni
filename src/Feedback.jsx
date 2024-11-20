import React from 'react';
import './Feedback.css'; // Ensure the CSS file is linked properly

function Feedback() {
  const handleRedirect = (url) => {
    window.location.href = url; // Redirect to the external URL
  };

  return (
    <div className="feedback-container">
      <div className="feedback-box">
        <h2 className="feedback-title">Feedback & Surveys</h2>
        <div className="feedback-options">
          <button
            className="feedback-button"
            onClick={() => handleRedirect('https://forms.gle/BnjYgfUxokeE5pDE7')}
          >
            Feedback Survey 
          </button>
          <button
            className="feedback-button"
            onClick={() => handleRedirect('https://forms.gle/UfdXdAN2FsgUUEcg9')}
          >
             Event Survey 
          </button>
          <button
            className="feedback-button"
            onClick={() => handleRedirect('https://forms.gle/hThVyoDKQ3WX2vRc8')}
          >
            Enterprise Survey
          </button>
          <button
            className="feedback-button"
            onClick={() => handleRedirect('https://forms.gle/ugMt9BvmnGTxTX6g6')}
          >
            
        Alumni Events & Networking  
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
