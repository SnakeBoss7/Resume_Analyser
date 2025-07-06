import iconMap from "../../../icons/icon";
import FileDropzone from "../../../components/FileDropzone";
import Features from "../../../components/features";
import { HandleUpload } from "../../../utils/upload";
import { useNavigate } from "react-router-dom";
import { useResumeProvider } from "../../../context/ResumeDataContext";
import { useState } from "react";
import Header from "../../../components/Header/header";
import Footer from "../../../components/Footer/footer";
import { FaFileAlt, FaHome, FaMagic, FaUser, FaUsers } from "react-icons/fa";
const featuresData = [
  {
    icon: "NewspaperIcon",
    title: "Smart Resume Analysis",
    bg_col: "bg-blue-500",
    description:
      "Get detailed insights on resume structure, keywords, and ATS compatibility with our advanced AI engine.",
  },
  {
    icon: "AdjustmentsVerticalIcon",
    title: "Job Fit Scoring",
    bg_col: "bg-purple-500",
    description:
      "Discover the best role matches and get personalized recommendations to improve your job fit score.",
  },
  {
    icon: "ChatBubbleBottomCenterIcon",
    title: "AI Career Coach",
    bg_col: "bg-green-500",
    description:
      "Chat with AI int the playground to get personalized career advice and resume tips",
  },
];
        
export default function  Enhancer  () 
{
     const { userData, setUserData, setParsedText, parsedText } =
    useResumeProvider();
  const [activeTab, setActiveTab] = useState("");
  console.log(userData);
  console.log(parsedText);
  const navigate = useNavigate();
  const handleFile = async (File) => {
    let { data, mess, text } = await HandleUpload(File);
    if (data) {
      setUserData(data);
      setParsedText(text);
      navigate("/single_analyzer");
    } else {
      setUserData(null);
    }
  };
    const data ='';
    return(
            <div>
                {data.length>0 ? "":
                <>
                <div>
                     <div className="flex flex-col w-full items-center">
          <h1 className="lg:text-5xl text-4xl font-extrabold mt-10 text-center">AI Resume Analyzer</h1>
          <p className="lg:text-xl text-lg my-4 text-gray-700 lg:px-32 px-5 text-center">Upload your resume to get instant AI-powered insights, ATS scoring, and personalized improvement suggestions powered by Lama AI.</p>
          {/* Dropper  */}
                  <div className="file_upload mb-7 md:w-[500px] w-[90%] flex justify-center items-center">
                    <FileDropzone
                      onFileSelected={handleFile}
                      heading="Upload your resume"
                      subheading="Drag and drop your resume file here or click to select"
                      button="Choose file"
                      height="400px"
                      width="w-full"
                    />
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
        </div>
                    </div></>}
            </div>
    );
};