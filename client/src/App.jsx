import "./App.css";
import { useState } from "react";
import axios from "axios";
import FileDropzone from "./components/FileDropzone";
import "./index.css";
import './global.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import MultiAnalyzer from "./pages/multi_analyzer";
import SingleAnalyzer from "./pages/single_analyzer";


function App() {
  const [file_name, setFile_name] = useState("");
  const [mess, setMess] = useState("");
  const handleUpload = async (File) => {
    let formData = new FormData();
    formData.append("resume", File);

    await axios
      .post("http://localhost:5000/", formData)
      .then((Response) => {
        setFile_name(Response.data.file.filename);
        setMess(Response.data.message);
      })
      .catch((err) => {
        setMess("Unable to upload file : " + err.response.data.message);
      });
  };
  const handleConsole = async (e) => {
    console.log(file_name);
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/resume/analyze", { filename: file_name })
      .then((Response) => {
        // If you want to display the parsed data:
        setMess("Analysis complete!");
        console.log("Analysis result:", Response.data.data); // This is your parsed resume text
      })
      .catch((err) => {
        setMess(
          "Unable to analyze file : " +
            (err.response?.data?.message || err.message)
        );
      });
  };
  return (
    <Router>
      <Routes>
     
          <Route path="/" element={<Landing />} />
          <Route path="/Single_analyzer" element={<SingleAnalyzer />} />
          <Route path="/hr_dashboard" element={<MultiAnalyzer />} />
     
      </Routes>
    </Router>
  );
}

export default App;
