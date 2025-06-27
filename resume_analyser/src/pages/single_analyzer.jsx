import React, { useState } from "react";
import FileDropzone from "../components/FileDropzone";
import Header from "../components/header";
import Footer from "../components/footer";
import Landing from "./Landing";
import multi_analyzer from "./multi_analyzer";
import { FaFileAlt, FaHome, FaUsers,FaChartBar } from "react-icons/fa";
import { useProvider } from "../context/user_data";

export default function Single_analyzer({ user_data }) {
  const { userData, setUserData } = useProvider();
  console.log(userData);
  return (
    <div className='bg-gray-100' >
      <Header
        pages={["Home", "single Analyzer", "HR dashboard"]}
        links={["", "single_analyzer", "Hr_dashboard"]}
        icons={[FaHome, FaFileAlt, FaUsers]}
      />
      {Object.keys(userData).length > 0 ? (
        <>
          <div class="mx-auto container my-7 flex flex-col justify-evenly h-full p-5 bg-gradient-to-r from-primary via-purple-500 to-primary_lg rounded-lg">
            <h1 className="tracking-tight text-white text-3xl font-bold">
              Hello, {userData.Name} 👋
            </h1>
            <p className="tracking-tight text-white text-">
              Your resume has been analyzed. Here are your personalized insights
              and recommendations.
            </p>
          </div>

          <div class="stats container  mx-auto justify-evenly w-full flex flex-col xl:flex-row w-full">
            {/* data */}
            <div className="performance_dashboard bg-white  border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg w-full  xl:w-1/2  flex flex-col gap-5 justify-between ">
            <div class="heading flex items-center gap-5">
                  <FaChartBar className="text-2xl"/><h2 className="text-2xl font-bold  tracking-tight ">Resume Performance Dashboard</h2>
            </div>
            <div class="performance_data flex w-full flex-wrap gap-5">
              
              <div class="top flex flex-1 min-w-[300px] gap-5">
                <div className="justify-evenly h-[90px] flex flex-col flex-1 items-center text-green-600 border border-green-300 rounded-lg " >
                <p className="text-2xl font-bold">{userData.ATS_Compatibility.ATS_Score}</p>
                <p className="text-lg font-bold tracking-tight">ATS Score</p>
              </div>
              <div className="justify-evenly h-[90px] flex flex-col  flex-1 items-center  text-primary border border-blue-300 rounded-lg">
                <p className="text-2xl font-bold">{userData.Best_Role_Fit.Match}</p>
                <p className="text-lg font-bold tracking-tight">Role Match</p>
              </div>
              </div>
              <div class="botttom flex flex-1 min-w-[300px] gap-5">
                <div className="justify-evenly h-[90px] flex flex-col flex-1 items-center text-purple-600 border border-purple-300 rounded-lg">
                <p className="text-2xl font-bold">{userData.Keywords_Found}</p>
                <p className="text-lg font-bold tracking-tight">Keywords Found</p>
              </div>
              <div className="justify-evenly h-[90px] flex flex-col flex-1 items-center   text-orange-600 border border-orange-300 rounded-lg">
                <p className="text-2xl font-bold">{userData.Overall_Grade}</p>
                <p className="text-lg font-bold tracking-tight">Overall Grade</p>
              </div>
              </div>
              
              </div>
            </div>
            <div class="w-full md:w-1/2"></div>
          </div>
        </>
      ) : (
        <></>
      )}

      {/* <Footer /> */}
    </div>
  );
}
