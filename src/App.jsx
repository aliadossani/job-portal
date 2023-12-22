import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/LogIn" />
          <Route path="/SignIn" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
