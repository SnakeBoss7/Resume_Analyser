import "./App.css";
import "./index.css";
import './global.css';
import { BrowserRouter as Router, Route, Routes,Outlet } from "react-router-dom";
import Landing from "./pages/HomePages/Landing";
import MultiAnalyzer from "./pages/HomePages/multi_analyzer";
import SingleAnalyzer from "./pages/HomePages/single_analyzer";
import { SigIn } from "./pages/Auth/signIn";
import { LogIn } from "./pages/Auth/login";
import { Navigate } from "react-router-dom";
import { ResumeBuilder } from "./pages/HomePages/Resume_builder";
const apiUrl = process.env.REACT_APP_API_URL;
function App() {

  return (

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Single_analyzer" element={<SingleAnalyzer />}>
          <Route path="builder" element={<Outlet />} />
          <Route path="enhancer" element={<Outlet />} />
          <Route path="rank" element={<Navigate to="/Single_analyzer" />} />
        </Route>
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
        <Route path="/hr_dashboard" element={<MultiAnalyzer />} />
        <Route path="/signIn" element={<SigIn />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
  );
}

export default App;
