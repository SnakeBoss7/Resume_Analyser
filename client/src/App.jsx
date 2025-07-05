import "./App.css";
import "./index.css";
import './global.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/HomePages/Landing";
import MultiAnalyzer from "./pages/HomePages/multi_analyzer";
import SingleAnalyzer from "./pages/HomePages/single_analyzer";
import { SigIn } from "./pages/Auth/signIn";
import { LogIn } from "./pages/Auth/login";
const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  return (
    <Router>
      <Routes>
     
          <Route path="/" element={<Landing />} />
          <Route path="/Single_analyzer" element={<SingleAnalyzer />} />
          <Route path="/hr_dashboard" element={<MultiAnalyzer />} />
          <Route path="/signIn" element={<SigIn />} />
          <Route path="/logIn" element={<LogIn />} />
     
      </Routes>
    </Router>
  );
}

export default App;
