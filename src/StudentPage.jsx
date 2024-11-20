import React, { useEffect, useState } from 'react';
import './StudentPage.css'; // Create corresponding CSS

function StudentPage() {
  const [jobs, setJobs] = useState([]);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const storedMeetings = JSON.parse(localStorage.getItem('meetings')) || [];
    setJobs(storedJobs);
    setMeetings(storedMeetings);
  }, []);

  return (
    <div className="student-container">
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title}</li>
        ))}
      </ul>

      <h2>Scheduled Meets</h2>
      <ul>
        {meetings.map((meet, index) => (
          <li key={index}>
            {meet.title} - <a href={meet.link} target="_blank" rel="noopener noreferrer">Join</a> on {meet.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentPage;
