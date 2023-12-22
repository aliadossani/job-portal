import './App.css'
import AboutPage from './Pages/AboutPage'
import Error404Page from './Pages/Error404Page'
import HomePage from './Pages/HomePage'
import { Routes, Route } from "react-router-dom"
import JobDetailsPage from './Pages/JobDetailsPage'
import LoginPage from './Pages/LoginPage'

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="//login" element={<LoginPage />} />
          <Route path="/job/jobDetails/:id" element={<JobDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </div>

    </>
  )
}

export default App
