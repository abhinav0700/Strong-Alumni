import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './HomePage.css'; // Ensure the CSS file is linked
import logo from './logo.jpg'; // Ensure the logo image path is correct
import alumni1 from './profile.jpg'; // Example alumni images
import alumni2 from './magesh.jpg';
import alumni3 from './imgg3.png';
import alumni4 from './PASSPORT.jpg';

const Home = () => <div>Welcome to the Home Page!</div>;
const Recommendations = () => <div>Welcome to Recommendations!</div>;
const Donation = () => <div>Welcome to Donation!</div>;
const JobPortal = () => <div>Welcome to Job Portal!</div>;
const FeedbackSurvey = () => <div>Welcome to Feedback & Survey!</div>;
const FundRaise = () => <div>Welcome to Fund Raiser Page!</div>;
const FundDonar = () => <div>Welcome to Fund Donor Page!</div>;

function HomePage() {
  const alumniDetails = [
    {
      image: alumni1,
      name: "Abhinav",
      role: "Software Engineer at Google",
      quote: "Believe in yourself and you can achieve anything.",
    },
    {
      image: alumni2,
      name: "Magesh Malnikam",
      role: "Product Manager at Facebook",
      quote: "Strive for progress, not perfection. Health is Wealth",
    },
    {
      image: alumni3,
      name: "Adithiya Vijay",
      role: "Data Scientist at Amazon",
      quote: "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
      image: alumni4,
      name: "Ashvanth",
      role: "UX Designer at Apple",
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
    },
  ];

  // SMART SEARCH functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  // Fetch the Excel data on mount
  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Mohammed-Ghayaz/search_engine/main/Alumni%20List.xlsx'
        );
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        setProfiles(jsonData);
      } catch (error) {
        console.error('Error fetching Excel file:', error);
      }
    };

    fetchExcelData();
  }, []);

  // Filter profiles by search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = profiles.filter(profile =>
        profile.fullname.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredProfiles(filtered);
    } else {
      setFilteredProfiles([]);
    }
  }, [searchTerm, profiles]);

  return (
    <div className="home-container">
      <div className="search-container">
        <img src={logo} alt="Logo" className="logo" />
        <input
          type="text"
          placeholder="SMART SEARCH"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      

      {/* Display search results */}
      <div className="profile-results">
        {filteredProfiles.length > 0 ? (
          <ul>
            {filteredProfiles.map((profile, index) => (
              <li key={index}>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  {profile.fullname}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          searchTerm && <p>No profiles found.</p>
        )}
      </div>

      <div className="menu-container">
        <nav className="navigation-menu">
          <Link to="/homepage" className="menu-item">Home</Link>
          <Link to="/recommendation" className="menu-item">Recommendations</Link>

          <div className="dropdown">
            <Link to="#" className="menu-item">Donation</Link>
            <div className="dropdown-content">
              <Link to="/fundraise" className="menu-item">Fund Raiser</Link>
              <Link to="/funddonar" className="menu-item">Fund Donor</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link to="#" className="menu-item">Job Portal</Link>
            <div className="dropdown-content">
              <Link to="/jobpost" className="menu-item">Job Post</Link>
              <Link to="/jobsearch" className="menu-item">Job Search</Link>
            </div>
          </div>
          <Link to="/feedback" className="menu-item">Feedback & Survey</Link>
        </nav>
      </div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/0vjeZPG-Af4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/x06btkisoog"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video"
        ></iframe>
      </div>

      {/* Alumni Section */}
      <div className="alumni-grid">
        {alumniDetails.map((alumni, index) => (
          <div key={index} className="alumni-box">
            <img src={alumni.image} alt={alumni.name} className="alumni-photo" />
            <div className="alumni-info">
              <h3>{alumni.name}</h3>
              <p>{alumni.role}</p>
              <p className="alumni-quote">"{alumni.quote}"</p>
            </div>
          </div>
        ))}
      </div>

      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/fundraise" element={<FundRaise />} />
        <Route path="/funddonar" element={<FundDonar />} />
        <Route path="/jobportal" element={<JobPortal />} />
        <Route path="/feedback-survey" element={<FeedbackSurvey />} />
      </Routes>
    </div>
  );
}

export default HomePage;
