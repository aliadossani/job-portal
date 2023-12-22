import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

import AboutPage from "./Pages/AboutPage";
import Error404Page from "./Pages/Error404Page";
import HomePage from "./Pages/HomePage";
import JobDetailsPage from "./Pages/JobDetailsPage";
import LoginPage from "./Pages/LoginPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  console.log({ isLoggedIn, userEmail });

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get("http://localhost:8000/jobs");
      setJobs(response.data);
    }
    getJobs();
  }, []);

  return (
    <>
      <div>
        <Navbar isLoggedIn={isLoggedIn} userEmail={userEmail} />
        <Routes>
          <Route path="/" element={<HomePage jobList={jobs} />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUserEmail={setUserEmail} />} />
          <Route path="/job/jobDetails/:id" element={<JobDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;
