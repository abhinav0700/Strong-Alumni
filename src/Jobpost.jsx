import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobPost.css'; // Make sure the CSS file is linked

function JobPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobName: '',
    companyName: '',
    jobDescription: '',
    jobRequirement: '',
    salary: '',
    companyWebsite: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the existing jobs array from localStorage
    const existingJobs = JSON.parse(localStorage.getItem('jobList')) || [];

    // Add new job to the array
    const updatedJobs = [...existingJobs, formData];

    // Save updated jobs array to localStorage
    localStorage.setItem('jobList', JSON.stringify(updatedJobs));

    // Show success message with a tick for 2 seconds
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      navigate('/jobsearch'); // Redirect to JobSearch page
    }, 2000);
  };

  return (
    <div className="jobpost-container">
      <div className="jobpost-box">
        <h2 className="jobpost-title">Post a Job</h2>
        {successMessage ? (
          <div className="jobpost-success">
            <span className="tick-mark">✔</span> Job submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="jobName"
              placeholder="Job Name"
              value={formData.jobName}
              onChange={handleChange}
              className="jobpost-input"
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="jobpost-input"
              required
            />
            <textarea
              name="jobDescription"
              placeholder="Job Description"
              value={formData.jobDescription}
              onChange={handleChange}
              className="jobpost-input"
              required
            />
            <textarea
              name="jobRequirement"
              placeholder="Job Requirements"
              value={formData.jobRequirement}
              onChange={handleChange}
              className="jobpost-input"
              required
            />
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              className="jobpost-input"
              required
            />
            <input
              type="text"
              name="companyWebsite"
              placeholder="Company Website"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="jobpost-input"
              required
            />
            <button type="submit" className="jobpost-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default JobPost;
