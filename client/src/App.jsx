import "./App.css";
import "./index.css";
import './global.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Landing";
import MultiAnalyzer from "./pages/Hr dashboard/multi_analyzer";
import SingleAnalyzer from "./pages/single analyzer/single_analyzer";
import { SigIn } from "./pages/Auth/signIn";
import { LogIn } from "./pages/Auth/login";
import { Navigate } from "react-router-dom";
import { ResumeBuilder } from "./pages/resume Builder/Resume_builder";
import Enhancer from "./pages/resume Builder/outlets/enhacner";
import Landing from "./pages/resume Builder/outlets/landing";
import { ToTop } from "./components/toTop.js/toTop";
const apiUrl = process.env.REACT_APP_API_URL;
function App() {

  return (
    <>
      
    <ToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Single_analyzer" element={<SingleAnalyzer />}/>
         
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} >
         <Route index element={<Landing />} />
         <Route path="enhancer" element={<Enhancer />} />
          <Route path="rank" element={<Navigate to="/Single_analyzer" />} />
        </Route>
        <Route path="/hr_dashboard" element={<MultiAnalyzer />} />
        <Route path="/signIn" element={<SigIn />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
