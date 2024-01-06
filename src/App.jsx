import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import AboutPage from "./Pages/AboutPage";
import Error404Page from "./Pages/Error404Page";
import JobListing from "./Pages/JobListing";
import JobDetailsPage from "./Pages/JobDetailsPage";
import LoginPage from "./Pages/LoginPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import AddJobs from "./Pages/AddJobs";

import classes from "./styles/App.module.css";
import { API_BASE_URL } from "./constants";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const getJobs = async () => {
    const response = await axios.get(API_BASE_URL);
    setJobs(response.data);
    setIsLoading(false);
  };

  const deleteJobHandler = async (currentId) => {
    await axios.delete(`${API_BASE_URL}/${currentId}`);
    getJobs();
  }

  const saveJobHandler = (currentId) => {
    setJobs(
      jobs.map((currentJob) => {
        if (currentJob.jobId === currentId) {
          currentJob.isJobSaved = !currentJob.isJobSaved;
        }
        return currentJob;
      })
    )
  };

  const savedJobs = useMemo(() => {
    return jobs.filter((job) => job.isJobSaved);
  }, [jobs]);


  const applyJobHandler = (currentId) => {
    setJobs(
      jobs.map((currentJob) => {
        if (currentJob.jobId === currentId) {
          currentJob.isApplied = !currentJob.isApplied;
        }
        return currentJob;
      })
    )
  };

  const appliedJobs = useMemo(() => {
    return jobs.filter((job) => job.isApplied);
  }, [jobs]);

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className={classes.rootCnt}>
      <Navbar isLoggedIn={isLoggedIn} userEmail={userEmail} />
      {
        !isLoading && <div className={classes.mainCnt}>
          <div className={classes.routesContainer}>
            <Routes>
              <Route path="/" element={<JobListing jobList={jobs} deleteJobHandler={deleteJobHandler} saveJobHandler={saveJobHandler} showDeleteButton={true}
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
                path="/job/jobDetails/:jobId"
                element={<JobDetailsPage jobList={jobs} saveJobHandler={saveJobHandler} applyJobHandler={applyJobHandler} />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Error404Page />} />
              <Route path="/AddJob" element={<AddJobs getJobs={getJobs} />} />
              <Route path="/savedJobs" element={<JobListing jobList={savedJobs} saveJobHandler={saveJobHandler} showDeleteButton={false} />} />
              <Route path="/appliedJobs" element={<JobListing jobList={appliedJobs} deleteJobHandler={deleteJobHandler} saveJobHandler={saveJobHandler} showDeleteButton={false} />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      }

      <Footer />
    </div>
  );
}

export default App;
