import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import AboutPage from "./Pages/AboutPage";
import Error404Page from "./Pages/Error404Page";
import HomePage from "./Pages/HomePage";
import JobDetailsPage from "./Pages/JobDetailsPage";
import LoginPage from "./Pages/LoginPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import JobCard from "./components/JobCard";
import AddJobs from "./Pages/AddJobs";

import classes from "./styles/App.module.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const deleteJobHandler = (currentId) => {
    setJobs(
      jobs.filter((currentJob) => currentJob.jobId !== currentId)
    );
  };

  useEffect(() => {
    const getJobs = async () => {
      const response = await axios.get("http://localhost:8000/jobs");
      setJobs(response.data);
    };
    getJobs();
  }, []);

  return (
    <>
      <div>
        <Navbar isLoggedIn={isLoggedIn} userEmail={userEmail} />

        <div className={classes.mainCnt}>
          <div className={classes.routesContainer}>
            <Routes>
              <Route path="/" element={<HomePage jobList={jobs} deleteJobHandler={deleteJobHandler}
              />} />
              <Route
                path="/login"
                element={
                  <LoginPage
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                    setUserEmail={setUserEmail}
                  />
                }
              />
              <Route
                path="/job/jobDetails/:id"
                element={<JobDetailsPage jobList={jobs} />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Error404Page />} />
              <Route path="/AddJob" element={<AddJobs />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
