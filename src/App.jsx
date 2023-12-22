
import AboutPage from "./Pages/AboutPage";
import Error404Page from "./Pages/Error404Page";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import JobDetailsPage from "./Pages/JobDetailsPage";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
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
