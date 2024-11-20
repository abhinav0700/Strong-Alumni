// AlumniPage.jsx
import React, { useState } from 'react';
import './AlumniPage.css';

function AlumniPage() {
  const [jobDetails, setJobDetails] = useState({ title: '', description: '' });
  const [meetDetails, setMeetDetails] = useState({ topic: '', link: '', time: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleJobPost = (e) => {
    e.preventDefault();
    const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    localStorage.setItem('jobs', JSON.stringify([...existingJobs, jobDetails]));
    setSuccessMessage('Job posted successfully!');
  };

  const handleMeetSchedule = (e) => {
    e.preventDefault();
    const existingMeets = JSON.parse(localStorage.getItem('meets')) || [];
    localStorage.setItem('meets', JSON.stringify([...existingMeets, meetDetails]));
    setSuccessMessage('Meet scheduled successfully!');
  };

  const handleInputChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="alumni-container">
      <h2>Alumni Page</h2>

      {/* Job Post Form */}
      <form onSubmit={handleJobPost} className="job-post-form">
        <h3>Post a Job</h3>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          onChange={(e) => handleInputChange(e, setJobDetails)}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          onChange={(e) => handleInputChange(e, setJobDetails)}
          required
        />
        <button type="submit">Post Job</button>
      </form>

      {/* Meet Schedule Form */}
      <form onSubmit={handleMeetSchedule} className="meet-schedule-form">
        <h3>Schedule a Meet</h3>
        <input
          type="text"
          name="topic"
          placeholder="Meet Topic"
          onChange={(e) => handleInputChange(e, setMeetDetails)}
          required
        />
        <input
          type="text"
          name="link"
          placeholder="Google Meet Link"
          onChange={(e) => handleInputChange(e, setMeetDetails)}
          required
        />
        <input
          type="datetime-local"
          name="time"
          onChange={(e) => handleInputChange(e, setMeetDetails)}
          required
        />
        <button type="submit">Schedule Meet</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default AlumniPage;
