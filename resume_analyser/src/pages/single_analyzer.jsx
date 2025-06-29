import React, { useState } from "react";
import FileDropzone from "../components/FileDropzone";
import Header from "../components/header";
import Footer from "../components/footer";
import Landing from "./Landing";
import multi_analyzer from "./multi_analyzer";
import { Chatbot }  from "../components/chatBot/chatbot";
import {
  FaFileAlt,
  FaHome,
  FaUsers,
  FaChartBar,
  FaBullseye,
  FaMedal,
  FaExclamationTriangle,
  FaCheckDouble,
  FaRegCheckCircle,
  FaCheckCircle,
  FaBolt,
  FaCircle,
  FaEye,
  FaUpload,
  FaFacebookMessenger
} from "react-icons/fa";
import { useProvider } from "../context/user_data";
import { SparklesIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { color } from "framer-motion";
import { HandleUpload } from "../utils/upload";

export default function Single_analyzer({ user_data }) {
  const { userData, setUserData } = useProvider();
  const [activeTab, setActiveTab] = useState("");

  const [mess, setMess] = useState("");
  console.log(userData);

   const handleFile = async (File)=>
      {

        let {data,mess} = await HandleUpload(File);
        if(data)
          {
            setUserData(data);
            setMess(null)
          }
          else
          {
          setUserData(null);
          setMess(mess)
        }

      }
  
  return (
    <div className="bg-#E5EBF2-100" style={{ backgroundColor: "#E5EBF2" }}>
      <Header
        pages={["Home", "single Analyzer", "HR dashboard"]}
        links={["", "single_analyzer", "Hr_dashboard"]}
        icons={[FaHome, FaFileAlt, FaUsers]}
      />
      {Object.keys(userData).length > 0 ? (
        <>
          <div class="container w-full my-3 flex justify-center items-center p-3 ">
            <div className=" flex flex-col justify-evenly h-full p-5 bg-gradient-to-r from-primary via-purple-500 to-primary_lg rounded-lg">
              <h1 className="tracking-tight text-white text-3xl font-bold">
                Hello, {userData.Name} 👋
              </h1>
              <p className="tracking-tight mt-3 text-gray-200 text-sm font-bold">
                Your resume has been analyzed. Here are your personalized
                insights and recommendations.
              </p>
            </div>
          </div>

          <div class="stats container  mx-auto justify-evenly w-full gap-3 flex flex-col xl:flex-row w-full">
            {/* data */}
            <div class="left px-3 md:px-0 w-full  xl:w-1/2 flex flex-col gap-7">
              <div className="performance_dashboard bg-white  border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg flex flex-col gap-5 justify-between ">
                <div class="heading flex items-center gap-5">
                  <FaChartBar className="text-2xl" />
                  <h2 className="text-2xl font-bold  tracking-tight ">
                    Resume Performance Dashboard
                  </h2>
                </div>
                <div class="  performance_data flex w-full flex-wrap gap-5">
                  <div class="top flex flex-1 min-w-[300px] gap-5">
                    <div className="justify-evenly h-[90px] flex flex-col flex-1 items-center text-green-600 border border-green-300 rounded-lg ">
                      <p className="text-2xl font-bold">
                        {userData.ATS_Compatibility.ATS_Score}
                      </p>
                      <p className="text-lg font-bold tracking-tight">
                        ATS Score
                      </p>
                    </div>
                    <div className="justify-evenly h-[90px] flex flex-col  flex-1 items-center  text-primary border border-blue-300 rounded-lg">
                      <p className="text-2xl font-bold">
                        {userData.Role_Match}
                      </p>
                      <p className="text-lg font-bold tracking-tight">
                        Role Match
                      </p>
                    </div>
                  </div>
                  <div class="botttom flex flex-1 min-w-[300px] gap-5">
                    <div className="justify-evenly h-[90px] flex flex-col flex-1 items-center text-purple-600 border border-purple-300 rounded-lg">
                      <p className="text-2xl font-bold">
                        {userData.Keywords_Found}
                      </p>
                      <p className="text-lg font-bold tracking-tight">
                        Keywords Found
                      </p>
                    </div>
                    <div className="justify-evenly h-[90px] flex flex-col flex-1 items-center   text-orange-600 border border-orange-300 rounded-lg">
                      <p className="text-2xl font-bold">
                        {userData.Overall_Grade}
                      </p>
                      <p className="text-lg font-bold tracking-tight">
                        Overall Grade
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="  carrer_details flex flex-wrap gap-5">
                <div className=" bg-white gap-3 flex flex-col flex-1 min-w-[350px] border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg">
                  <h1 className="font-bold text-xl flex items-center gap-2">
                    {" "}
                    <FaBullseye className="font-bold text-xl text-primary" />{" "}
                    Best Role Fit
                  </h1>
                  <div>
                    <h2 className="mb-1 text-2xl font-bold text-primary tracking-tight">
                      {userData.Best_Role_Fit.Title}
                    </h2>

                    <p className="text-xs border border-gray-400 hover:border-primary hover:bg-primary hover:text-white rounded-xl px-1 w-fit">
                      {userData.Best_Role_Fit.Match} Match
                    </p>
                  </div>
                  <div class="sal_exp">
                    <div class="sal flex justify-between">
                      <h3 className="text-gray-600 tracking-tight font-semibold">
                        Experience Level :
                      </h3>
                      <h3 className="font-bold tracking-tight">
                        {userData.Best_Role_Fit.Experience_Level}
                      </h3>
                    </div>
                    <div class="sal flex justify-between">
                      <h3 className="text-gray-600 tracking-tight font-semibold">
                        Expected salary :
                      </h3>
                      <h3 className="text-green-600 font-bold tracking-tight">
                        {userData.Best_Role_Fit.Salary_Range}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="  bg-white gap-3 flex flex-col flex-1 min-w-[350px] border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg">
                  <h1 className="font-bold text-xl flex items-center gap-2">
                    <FaMedal className="font-bold text-xl text-green-600" />
                    ATS Compatibility
                  </h1>
                  <div class="ats_coutn flex flex-col">
                    <div class="text-gray-600  text-lg tracking-tight font-semibold flex justify-between">
                      ATS Score
                      <span className="text-2xl mb-2 text-primary">
                        {userData.ATS_Compatibility.ATS_Score} / 100
                      </span>
                    </div>
                    <div
                      className="ats_count bg-primary rounded-xl h-3 "
                      style={{
                        width: `${userData.ATS_Compatibility.ATS_Score}%`,
                      }}
                    ></div>
                  </div>
                  <div class="compatibility flex flex-col gap-2">
                    <div class="top flex justify-between">
                      <span className="text-lg flex items-center gap-2">
                        {" "}
                        {userData.ATS_Compatibility.Clear_Structure ? (
                          <FaCheckCircle className="text-green-600" />
                        ) : (
                          <FaExclamationTriangle className="text-orange-500" />
                        )}
                        Format Compatible
                      </span>
                      <span className="text-lg flex items-center gap-2">
                        {" "}
                        {userData.ATS_Compatibility.Keywords_Present ? (
                          <FaCheckCircle className="text-green-600" />
                        ) : (
                          <FaExclamationTriangle className="text-orange-500" />
                        )}
                        Keywords Present
                      </span>
                    </div>
                    <div class="bottom flex justify-between">
                      <span className="text-lg flex items-center gap-2">
                        {" "}
                        {userData.ATS_Compatibility.Missing_Skills ? (
                          <FaCheckCircle className="text-green-600" />
                        ) : (
                          <FaExclamationTriangle className="text-orange-500" />
                        )}
                        Missing Skills
                      </span>
                      <span className="text-lg flex items-center gap-2">
                        {" "}
                        {userData.ATS_Compatibility.Clear_Structure ? (
                          <FaCheckCircle className="text-green-600" />
                        ) : (
                          <FaExclamationTriangle className="text-orange-500" />
                        )}
                        Clear Structure
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gap-3   bg-white flex flex-col flex-1 min-w-[350px] border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg">
                <h1 className=" flex text-2xl mb-5  font-bold tracking-tight items-center gap-3">
                  {" "}
                  <FaBolt className="text-purple-600 text-2xl" />
                  Skills Analysis
                </h1>

                <div class="skill_sec mb-2 flex flex-col gap-5">
                  <div class=" skills_found flex flex-col gap-1">
                    <h1 className="flex items-center gap-2 text-green-600 mb-1 tracking-tight font-bold">
                      <FaCheckCircle />
                      Top Skills found
                    </h1>
                    <div class="skills flex-wrap flex gap-2">
                      {userData.Skills_Analysis.Top_Skills_Found.map(
                        (skill, idx) => (
                          <span
                            key={idx}
                            className="tracking-tight text-xs hover:bg-green-600 hover:text-white px-2 transition-all duration-300 rounded-xl text-green-600 border border-green-600"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div class="skills_missing flex flex-col gap-1">
                    <h1 className="flex items-center gap-2 text-red-600 mb-1 tracking-tight font-bold">
                      <FaExclamationTriangle /> Missing Skills{" "}
                    </h1>
                    <div class="skills flex gap-1 w-full">
                      {userData.Skills_Analysis.Missing_Skills.map(
                        (skill, idx) => (
                          <span
                            key={idx}
                            className="tracking-tight text-xs hover:bg-red-600 hover:text-white px-1 transition-all duration-300 rounded-xl text-red-600 border border-red-600"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="  section_breakdown gap-3 bg-white flex flex-col flex-1 min-w-[350px] border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg">
                <div class="text-2xl mb-5 font-bold tracking-tight flex items-center gap-3">
                  <FaEye className="text-purple-600 text-2xl " />
                  Section Wise Breakdown
                </div>
                <div class="sections flex flex-col gap-3">
                  {Object.entries(userData.Section_by_Section_Breakdown).map(
                    ([key, value]) => {
                      const num = parseInt(value);

                      return (
                        <div className="section flex justify-between">
                          <h2 className="text-gray-600 font-bold flex items-center gap-2">
                            <FaCircle
                              className={`text-sm rounded-full p-1 ${
                                num > 80
                                  ? "bg-green-500 text-green-500"
                                  : num > 40
                                  ? "bg-yellow-400 text-yellow-400"
                                  : "bg-red-500 text-red-500"
                              }`}
                            />
                            {key}
                          </h2>
                          <div className="bar w-[120px] flex justify-between items-center">
                            <div className="bar_bar w-1/2">
                              <div
                                className="bar_length h-[10px] bg-primary rounded-lg"
                                style={
                                  num > 0
                                    ? { width: `${num}%` }
                                    : {
                                        border: "1px solid red",
                                        width: "100%",
                                        backgroundColor: "white",
                                      }
                                }
                              ></div>
                            </div>
                            <span className="w-fit font-bold text-gray-600">
                              {value}
                            </span>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div class="  ai_thinking bg-white flex flex-col flex-1 min-w-[350px] border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg">
                <h1 className="text-2xl mb-7 font-bold tracking-tight">
                  Deatiled Analysis
                </h1>
                <div class="mb-5 buttons w-full flex justify-evenly items-center">
                  <button
                    className="font-bold tracking-tight text-lg text-gray-700 "
                    onClick={() => {
                      setActiveTab("tab1");
                    }}
                  >
                    Strenghts
                  </button>
                  <button
                    className="font-bold tracking-tight text-lg text-gray-700 "
                    onClick={() => {
                      setActiveTab("tab2");
                    }}
                  >
                    Improvements
                  </button>
                  <button
                    className="font-bold tracking-tight text-lg text-gray-700 "
                    onClick={() => {
                      setActiveTab("tab3");
                    }}
                  >
                    suggestions
                  </button>
                </div>
                <div class="ai_suggested_data ">
                  {activeTab === "tab1" && (
                    <div className="tab1 flex flex-col gap-3 text-gray-700 font-semibold tracking-tight ">
                      {userData.Strengths.map((val, idx) => {
                        return (
                          <span key={idx} className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-600" />
                            {val}
                          </span>
                        );
                      })}
                    </div>
                  )}
                  {activeTab === "tab2" && (
                    <div className="tab2 flex flex-col gap-3 text-gray-700 font-semibold tracking-tight ">
                      {userData.Improvements.map((val, idx) => {
                        return (
                          <span key={idx} className="flex items-center gap-3">
                            <FaExclamationTriangle className="text-orange-600" />
                            {val}
                          </span>
                        );
                      })}
                    </div>
                  )}
                  {activeTab === "tab3" && (
                    <div className="tab3 flex flex-col gap-3 text-gray-700 font-semibold tracking-tight ">
                      {userData.Suggestions.map((val, idx) => {
                        return (
                          <span
                            key={idx}
                            className="p-3  rounded-md flex items-center gap-3 h-30px w-full border border-blue-400"
                          >
                            <span className="rounded-xl bg-primary border border-blue-400 h-[20px] w-[20px] text-center text-white flex items-center justify-center text-xs">
                              {idx + 1}
                            </span>
                            {val}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div class="drag_drop bg-white flex flex-col flex-1 min-w-[350px] border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg">
                <h1 className="flex items-center gap-3  font-bold tracking-tight text-2xl ">
                  {" "}
                  <FaUpload className="text-gray-400 text-2xl" />
                  Another One ?{" "}
                </h1>
                <FileDropzone
                  onFileSelected={handleFile}
                  heading=""
                  subheading="Want to analyze a different resume?"
                  button="Upload new resume"
                  height="200px"
                  width="w-full"
                />
              </div>
            </div>

            <div class="w-full xl:w-1/2 bg-white h-fit border border-gray-200 shadow-gray-300 shadow-xl py-5 px-5 rounded-lg flex flex-col gap-5 justify-between ">
              <Chatbot/>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <Footer />
    </div>
  );
}
