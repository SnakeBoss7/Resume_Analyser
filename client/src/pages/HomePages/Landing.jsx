import React from "react";
import Footer from "../../components/Footer/footer";
import { useState } from "react";
import FileDropzone from "../../components/FileDropzone";
import Features from "../../components/features";
import iconMap from "../../icons/icon"; 
import Header from "../../components/Header/header";
import { FaArrowRight,FaFileAlt,FaMagic,FaUsers } from "react-icons/fa";
import { useProvider } from '../../context/user_data';
import { HandleUpload } from "../../utils/upload";
import { useNavigate } from "react-router-dom";

const featuresData = [
  {
    icon: 'NewspaperIcon',
    title: 'Smart Resume Analysis',
    bg_col:'bg-blue-500',
    description: 'Get detailed insights on resume structure, keywords, and ATS compatibility with our advanced AI engine.',
    
  },
  {
    icon: 'AdjustmentsVerticalIcon',
    title: 'Job Fit Scoring',
    bg_col:'bg-purple-500',
    description: 'Discover the best role matches and get personalized recommendations to improve your job fit score.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'HR Dashboard',
    bg_col:'bg-green-500',
    description: 'Evaluate multiple candidates efficiently with batch processing and comparative analysis tools.',
  },

];

export default function Landing() {
  const {userData,setUserData,parsedText,setParsedText} = useProvider();

  const [file_name, setFile_name] = useState("");
  const [mess, setMess] = useState("");
    const navigate = useNavigate();
    
    
 const HandleFile = async (File)=>
    {
      let {data,mess,text} = await HandleUpload(File);
      if(data)
        {
          setUserData(data);
          setMess('');
          setParsedText(text);
          navigate('/single_analyzer')
        }
        else
        {
        setUserData({});
        setMess(mess)
      }
    }

  return (
    <div
      className=" flex flex-col gap-10 items-center"
      style={{ backgroundColor:"#E9EEF4" }}
    >
      {/* Header section  */}
      <Header
        pages={["Resmue analyzer", "Hr Dashboard", "Resume Builder"]}
        links={["single_analyzer", "Hr_dashboard", "ResumeBuilder"]}
        icons={[FaFileAlt, FaUsers,FaMagic]}
      />
      {/* Theme toggle button  */}
      {/* Hero section  */}
      <div className="hero  flex flex-col items-center  w-full">
        <span className=" mb-5 text-blue-700 text-xs font-normal tracking-tight bg-white px-3 py-1 rounded-xl hover:bg-gray-300 transition ease-in-out duration-300">
          ✨ Powered by Advanced AI
        </span>
        <h1 className="text-center  md:text-7xl text-4xl mb-2 font-black tracking-tight">
          AI Resume Analyzer for
        </h1>
        <h1
          className="mb-5 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent
 text-center text-6xl  font-black tracking-tight"
        >
          Job Seekers & HR Teams
        </h1>
        <p className="text-xl md:w-1/2 w-full p-2 text-center my-1  font-normal text-gray-600  tracking-tight mt-5">
          Upload a resume, get ATS score, job-fit feedback, and improvement
          suggestions instantly. Make data-driven hiring decisions with
          AI-powered insights.
        </p>
        {/* Dropper  */}
        <div className="file_upload mb-7 md:w-[500px] w-[90%] flex justify-center items-center">
          <FileDropzone
            onFileSelected={HandleFile}
            heading="Upload your resume"
            subheading="Drag and drop your resume file here or click to select"
            button="Choose file"
            height="350px"
            width="w-full"
          />
        </div>
      </div>

      {/* Message section  */}
      <div className=" mt-10 message flex flex-col items-center w-full">
        <div className="message_content text-center text-sm font-normal text-gray-600  tracking-tight">
          <h1 className="text-4xl mb-2 mt-10 font-extrabold px-3 text-black tracking-tight">
            Everything you need to optimize resumes
          </h1>
          <p className="lg:text-xl text-lg px-5 text-gray-500 tracking-tight ">
            Our AI-powered platform provides comprehensive resume analysis for
            both job seekers and HR professionals.
          </p>
        </div>
      </div>
      <div className="bg-[#f0f4fa] flex flex-wrap justify-center px-5 py-10 ">
        {featuresData.map((feature, idx) => (
          <Features
            key={idx}
            bgColor={feature.bg_col}
            Icon={iconMap[feature.icon]} // dynamically maps string to component
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* Analyse redirection section  */}
      <div className=" px-5  mx-auto md:container md:p-0 w-full">
        <div class="box h-[300px] flex flex-col p-5 items-center justify-evenly w-full  bg-gradient-to-r from-primary via-primary_lg to-purple-500 text-white font-normal tracking-tight  rounded-xl">
          <div class="textual_dta">
            <h1 className="md:text-4xl text-3xl text-center font-extrabold ">
              Ready to optimize your resume?
            </h1>
            <h3 className="text-center text-gray-200 text-sm mt-4 font-bold tracking-tight">
              Join thousands of professionals who have improved their job
              prospects with ResumeAI.
            </h3>
          </div>
          <button className="border-2 flex justify-center items-center gap-3 rounded-lg text-lg bg-white text-black font-bold w-auto px-4 py-2">
            Start Free Analysis <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Footer section  */}
      <Footer />
    </div>
  );
}

