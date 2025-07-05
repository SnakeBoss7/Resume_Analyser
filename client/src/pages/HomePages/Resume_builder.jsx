import {
  FaPagelines,
  FaChartLine,
  FaClock,
  FaTimesCircle,
  FaMedal,
  FaMagic,
  FaFileAlt,
  FaHome,
  FaUsers,
  FaPlus,
  FaUpload,
  FaYenSign,
  FaCheckCircle,
  FaStarAndCrescent,
  FaBold,
  FaBolt,
  FaBullseye,
  FaStar,
  FaBrain,
  FaStarHalfAlt,
  FaStarHalf,
  FaStarOfDavid,
  FaStarOfLife,
  FaRegStar,
  FaGrinStars,
  FaDirections,
  FaArrowRight,
} from "react-icons/fa";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
export const ResumeBuilder = () => {
  return (
    <div
      style={{ backgroundColor: "#E9EEF4" }}
      className="flex flex-col items-center"
    >
      <Header
        pages={["Home", "single Analyzer", "HR dashboard", "Resume Builder"]}
        links={["", "single_analyzer", "Hr_dashboard", "ResumeBuilder"]}
        icons={[FaHome, FaFileAlt, FaUsers, FaMagic]}
      />
      <FaMagic className="mt-20 h-[70px] w-[70px] rounded-3xl bg-gradient-to-r from-primary to-purple-500 text-white p-5" />
      <h1 className="text-center lg:text-7xl text-4xl font-bold mt-5 font-extrabold text-zinc-900 tracking-tight">
        AI-Powered Resume Builder
      </h1>
      <p className="text-center my-5 lg:text-2xl text-xl text-gray-600 tracking-tight lg:mx-[300px] mx-1 font-bold">
        Create, enhance, or analyze your resume with cutting-edge AI technology.
        Get personalized suggestions and real-time feedback to land your dream
        job
      </p>
      <div className="benefits_list  flex flex-col md:flex-row md:flex-nowrap  md:gap-3 my-10 lg:my-20 gap-5 w-3/4 items-center lg:px-10  ">
        <div className="bg-white shadow-xl  border-2  rounded-3xl benefit flex  flex-col items-center justify-center gap-1 w-full px-5  flex-1 min-h-[200px] lg:p-10 hover:-translate-y-2 transition-all ease-in-out duration-400">
          <FaChartLine className="m-1 bg-gradient-to-r from-primary to-purple-500 text-white p-[10px] rounded-xl h-[50px] w-[50px]" />
          <h2 className=" text-2xl tracking-tight font-bold text-black">90%</h2>
          <p className="text-gray-600 font-bold  tracking-tight text-lg text-center">
            Success Rate Achieved
          </p>
        </div>
        <div className="bg-white shadow-xl lg:p-10 border-2  rounded-3xl benefit flex hover:-translate-y-2 justify-center flex-col min-h-[200px] items-center w-full px-5 gap-1 flex-1  transition-all ease-in-out duration-400">
          <FaMedal className="text-3xl m-1 bg-gradient-to-r from-primary  to-purple-500 text-white p-[10px] rounded-xl h-[50px] w-[50px] " />
          <h2 className=" text-2xl tracking-tight font-bold text-black">
            +23%
          </h2>
          <p className="text-gray-600 font-bold  tracking-tight text-lg text-center">
            Average Score Growth{" "}
          </p>
        </div>
        <div className="bg-white shadow-xl lg:p-10 border-2  rounded-3xl benefit flex top-[-3px] flex-col justify-center items-center min-h-[200px] gap-1 w-full px-5 flex-1 hover:-translate-y-2 transition-all ease-in-out duration-400">
          <FaClock className="text-3xl m-1 bg-gradient-to-r from-primary to-purple-500 text-white p-[10px] rounded-xl h-[50px] w-[50px]" />
          <h2 className=" text-2xl tracking-tight font-bold text-black">
            Save Time
          </h2>
          <p className="text-gray-600 font-bold  tracking-tight text-lg text-center ">
            Build, Enhance , Repeat
          </p>
        </div>
      </div>
      <div class="h1 my-10 text-4xl font-extrabold bg-gradient-to-r from-primary  to-purple-700  bg-clip-text text-transparent tracking-tight text-center ">
        Choose Your Resume Journey
      </div>

   <div className="mb-10 px-5 starters items-center flex flex-col lg:flex-row gap-5 lg:px-32 justify-center">
  {/* Left Card */}
  <div className="rounded-2xl w-[300px] h-[550px] pack py-10 px-5 flex flex-col gap-7 items-center shadow-xl hover:-translate-y-2 hover:shadow-gray-400 transition-all ease-in-out duration-400 bg-white">
    <div className="text-white bg-primary p-4 rounded-2xl h-[60px] w-[60px] flex justify-center items-center">
      <FaPlus className="h-7 w-7 text-center" />
    </div>
    <div className="heading w-full">
      <h2 className="text-3xl mb-3 text-center font-bold tracking-tight">Create From scratch</h2>
      <p className="text-center text-gray-500 font-bold tracking-tight text-md">
        Build a professional resume from the ground up with our AI-powered builder
      </p>
    </div>
    {[
      'AI-powered content suggestion',
      'Professional templates',
      'Real-Time ATS scoring',
      'Industry-specific guidance',
      'Export in Multiple formats'
    ].map((text, i) => (
      <div key={i} className="flex items-center gap-3 text-gray-900 tracking-tight text-zinc-800 text-left font-bold text-md w-full">
        <FaCheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
        <span>{text}</span>
      </div>
    ))}
    <div className="flex w-4/5 h-[55px] mt-5 justify-center gap-5 p-5 bg-primary text-white text-xl font-bold tracking-tight items-center rounded-xl button">
      Get Started <FaArrowRight />
    </div>
  </div>

  {/* Center Card (Bigger) */}
  <div className="rounded-2xl w-[350px] h-[600px] pack py-10 px-5 flex flex-col gap-7 items-center shadow-xl hover:-translate-y-2 hover:shadow-gray-400 transition-all ease-in-out duration-400 bg-white">
    <div className="text-white bg-green-600 p-4 rounded-2xl h-[60px] w-[60px] flex justify-center items-center">
      <FaMagic className="h-7 w-7 text-center" />
    </div>
    <div className="heading">
      <h2 className="text-3xl mb-3 text-center font-bold tracking-tight">Enhance your resume</h2>
      <p className="text-center text-gray-500 font-bold tracking-tight text-md">
        Upload your current resume and see AI-powered improvements with side-by-side comparison
      </p>
    </div>
    {[
      'AI-powered content suggestion',
      'Professional templates',
      'Real-Time ATS scoring',
      'Industry-specific guidance',
      'Export in Multiple formats'
    ].map((text, i) => (
      <div key={i} className="flex items-center gap-3 text-gray-900 tracking-tight text-zinc-800 text-left font-bold text-md w-full">
        <FaCheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
        <span>{text}</span>
      </div>
    ))}
    <div className="flex w-4/5 h-[55px] mt-5 justify-center gap-5 p-5 bg-green-600 text-white text-xl font-bold tracking-tight items-center rounded-xl button">
      Get Started <FaArrowRight />
    </div>
  </div>

  {/* Right Card */}
  <div className="rounded-2xl w-[300px] h-[550px] pack py-10 px-5 flex flex-col gap-7 items-center shadow-xl hover:-translate-y-2 hover:shadow-gray-400 transition-all ease-in-out duration-400 bg-white">
    <div className="text-white bg-purple-600 p-4 rounded-2xl h-[60px] w-[60px] flex justify-center items-center">
      <FaUpload className="h-7 w-7 text-center" />
    </div>
    <div className="heading">
      <h2 className="text-3xl mb-3 text-center font-bold tracking-tight">Analyze & Score</h2>
      <p className="text-center text-gray-500 font-bold tracking-tight text-md">
        Upload your resume for detailed analysis, ATS scoring, and improvement recommendations
      </p>
    </div>
    {[
      'AI-powered content suggestion',
      'Professional templates',
      'Real-Time ATS scoring',
      'Industry-specific guidance',
      'Export in Multiple formats'
    ].map((text, i) => (
      <div key={i} className="flex items-center gap-3 text-gray-900 tracking-tight text-zinc-800 text-left font-bold text-md w-full">
        <FaCheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
        <span>{text}</span>
      </div>
    ))}
    <div className="flex w-4/5 h-[55px] mt-5 justify-center gap-5 p-5 bg-purple-600 text-white text-xl font-bold tracking-tight items-center rounded-xl button">
      Get Started <FaArrowRight />
    </div>
  </div>
</div>

      <div class="lg:h-[300px] h-fit lg:px-32 px-5 w-full mt-20">
        <div class="w-full h-[90%] text-white flex flex-col lg:gap-0 gap-10   lg:justify-between p-5 lg:items-center md:flex-row  rounded-xl h-fit bg-gradient-to-r from-primary via-blue-700 to-purple-600 ">
          <div class="left lg:w-1/2">
            <h1 className="mb-10 flex items-center gap-3 text-3xl font-bold ">
              <FaStarOfDavid /> AI-Powered Features
            </h1>
            <div className="flex items-center gap-3 text-lg">
              {" "}
              <FaBolt /> Real-time ATS compatibility scoring
            </div>
            <div className="flex items-center gap-3 text-lg">
              {" "}
              <FaBullseye /> Industry-specific keyword optimization
            </div>
            <div className="flex items-center gap-3 text-lg">
              {" "}
              <FaStar /> Professional template library
            </div>
            <div className="flex items-center gap-3 text-lg">
              {" "}
              <FaMedal /> Achievement quantification suggestions
            </div>
          </div>

          <div class="right lg:w-1/2 flex flex-col gap-5 items-center">
            <div class="icon lg:h-[120px] h-[100px] glass-card justify-center flex items-center lg:w-[120px] w-[100px] rounded-full">
              <FaBrain className="lg:h-25 h-20 w-20 lg:w-25" />
            </div>
            <div class="text-2xl font-extrabold text-center">
              Powered by advanced AI to help you create the perfect resume
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
