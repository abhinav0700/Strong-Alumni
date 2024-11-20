import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import Recommendation from './Recommendation';
import FundRaise from './FundRaise';
import FundDonar from './FundDonar';
import JobPortal from './JobPortal';
import Login from './Login';
import SignUp from './SignUp';
import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import NetBanking from './NetBanking';
import UPI from './UPI';
import Feedback from './Feedback';
import Jobpost from './Jobpost';
import Jobsearch from './Jobsearch';
import ForgotPassword from './Forgotpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/recommendation" element={<Recommendation />}/>
        <Route path="/fundraise" element={<FundRaise />} />
        <Route path="/funddonar" element={<FundDonar />} />
        <Route path="/jobportal" element={<JobPortal />} />
        <Route path="/funddonar" element={<FundDonar />} />
        <Route path="/creditcard" element={<CreditCard />} />
        <Route path="/debitcard" element={<DebitCard />} />
        <Route path="/netbanking" element={<NetBanking />} />
        <Route path="/upi" element={<UPI />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/jobpost" element={<Jobpost />} />
        <Route path="/jobsearch" element={<Jobsearch />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        // Define other routes as necessary
      </Routes>
    </Router>
  );
}

export default App;
