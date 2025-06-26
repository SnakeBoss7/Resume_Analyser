import React, { useState } from "react";
import FileDropzone from "../components/FileDropzone";
import Header from "../components/header";
import Footer from "../components/footer";
import Landing from "./Landing";
import multi_analyzer from "./multi_analyzer";
import { FaFileAlt, FaHome, FaUsers } from "react-icons/fa";

export default function single_analyzer({user_data}) {
  // Your logic for single resume analysis
  return (
    <div>
      
      <Header pages={['Home','single Analyzer','HR dashboard']} links={['','single_analyzer','Hr_dashboard']}  icons={[FaHome,FaFileAlt,FaUsers]}/>

      <Footer/>
      
    </div>
  );
}