import React, { useEffect, useState } from 'react';
import './JobSearch.css'; // Ensure the CSS file is linked

function JobSearch() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    // Retrieve the job list from localStorage
    const storedJobs = JSON.parse(localStorage.getItem('jobList')) || [];
    setJobList(storedJobs);
  }, []);

  const clearJobs = () => {
    // Clear the job list from localStorage
    localStorage.removeItem('jobList');
    // Update state to reflect cleared list
    setJobList([]);
  };

  if (jobList.length === 0) {
    return (
      <div className="jobsearch-container">
        <div className="jobsearch-box">
          <h2 className="jobsearch-title">Job Listings</h2>
          <p className="jobsearch-empty">No job postings available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="jobsearch-container">
      <div className="jobsearch-box">
        <h2 className="jobsearch-title">Job Listings</h2>
        {jobList.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.jobName}</h3>
            <p><strong>Company Name:</strong> {job.companyName}</p>
            <p><strong>Job Description:</strong> {job.jobDescription}</p>
            <p><strong>Job Requirements:</strong> {job.jobRequirement}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Company Website:</strong> <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer">{job.companyWebsite}</a></p>
          </div>
        ))}
        {/* Clear Jobs Button */}
        <button className="clear-jobs-button" onClick={clearJobs}>Clear Jobs</button>
      </div>
    </div>
  );
}

export default JobSearch;
