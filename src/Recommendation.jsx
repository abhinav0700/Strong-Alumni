import React, { useEffect, useState } from 'react';
import './Recommendation.css'; // Ensure the CSS file is linked

// Main LinkedIn profile to always be displayed at the top
const myProfile = {
  name: "Abhinav M",
  profileLink: "https://www.linkedin.com/in/abhinav070/",
  image: "https://media.licdn.com/dms/image/v2/D5635AQERZWwgqY2P7A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1721318164625?e=1728032400&v=beta&t=vPiwLCykiGb6Jtqrtf4O29qDMC3Bw-hw8b1DSWg9AVo", // Replace with actual image link if needed
};

// List of other LinkedIn profiles for random display
const otherProfiles = [
  { name: "Arivuchelvan", profileLink: "https://www.linkedin.com/in/arivuchelvan-g-4a6bb918a", image: "https://media.licdn.com/dms/image/v2/D5603AQG9Gmi2HaQghA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701537784935?e=1731542400&v=beta&t=3xopcqExpp-_-Cvj__jS2xwResmF1VhBehArci99WiQ" },
  { name: "Madhumithaa Harikumar", profileLink: "https://www.linkedin.com/in/madhumithaa-harikumar-2775011b8", image: "https://media.licdn.com/dms/image/v2/D5603AQGflnsVIC2-LQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706362172771?e=1731542400&v=beta&t=OxkQKgjEXl_HWsA1vzfmVfQGJZn8f6dVT--y0aUwLFo" },
  { name: "Loga", profileLink: "https://www.linkedin.com/in/logaprakashr", image: "https://media.licdn.com/dms/image/v2/C4D03AQHjJooAMJPtFA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1614223658106?e=1731542400&v=beta&t=A_trhyuPkplaGmYO3LkxtmAZKKcnq9EMh0IJ-WYSjVc" },
  { name: "Sri Vardhan", profileLink: "https://www.linkedin.com/in/sri-vishnu-vardhan", image: "https://media.licdn.com/dms/image/v2/D5603AQGHFI5Oo-9Qqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724502800117?e=1731542400&v=beta&t=d0FBCQ3tImgtDeVcmFp8pDJwL3KtcV6Cqub8Qt69VbI" },
  { name: "Venkatanarayanan", profileLink: "https://www.linkedin.com/in/venkatanarayanan-n-00987b194", image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" },
  { name: "Savitha", profileLink: "https://www.linkedin.com/in/savitha-sri-1262002", image: "https://media.licdn.com/dms/image/v2/D5603AQH2gwfwXpIhtA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715259756732?e=1731542400&v=beta&t=XvJnD4CgNwBLp42lRLsvKPA0OBOq3dW0GOrketfL8wA" },
  { name: "Syed", profileLink: "https://www.linkedin.com/in/syed-huzair", image: "https://media.licdn.com/dms/image/v2/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1660002772504?e=1727370000&v=beta&t=a3SrNCTzQkRkBP80HJwjPv3kCtTkz5jZav1WA6j8y7U" },
  { name: "Riyenth", profileLink: "https://www.linkedin.com/in/riyenth-s-69848118a", image: "https://media.licdn.com/dms/image/v2/D5603AQEwvQK9jRR9VA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677396822317?e=1731542400&v=beta&t=uM52kf7zkpwpbnwRyRGTOAB_NFcyVzSBdRGxtlZ7uXA" },
  { name: "Vaigundha Vasan", profileLink: "https://www.linkedin.com/in/vaigundha-vasan-a92255214", image: "https://media.licdn.com/dms/image/v2/D5635AQFXn9dpagdDsg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719326513763?e=1727370000&v=beta&t=cLrWSh-cKnL3PRp-7URCF8Kh3GvgBXbAMLRBdRihEHg" },
];

function Recommendation() {
  const [randomProfiles, setRandomProfiles] = useState([]);

  useEffect(() => {
    // Select 3 random profiles from the list
    const shuffled = otherProfiles.sort(() => 0.5 - Math.random());
    setRandomProfiles(shuffled.slice(0, 3));
  }, []);

  const handleImageError = (event) => {
    event.target.src = "https://via.placeholder.com/150"; // Use a placeholder image when LinkedIn image fails
  };

  return (
    <div className="recommendation-container">
      {/* My LinkedIn Profile */}
      <div className="profile-card my-profile">
        <h2>My LinkedIn Profile</h2>
        <a href={myProfile.profileLink} target="_blank" rel="noopener noreferrer">
          <img src={myProfile.image} alt={myProfile.name} className="profile-image" onError={handleImageError} />
          <p>{myProfile.name}</p>
        </a>
      </div>

      {/* Recommended Profiles */}
      <div className="recommended-profiles">
        <h2>Recommended Profiles</h2>
        <div className="profile-list">
          {randomProfiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <a href={profile.profileLink} target="_blank" rel="noopener noreferrer">
                <img src={profile.image} alt={profile.name} className="profile-image" onError={handleImageError} />
                <p>{profile.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
