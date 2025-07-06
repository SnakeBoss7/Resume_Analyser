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
import { Outlet } from "react-router-dom"
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
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
      <Outlet/>
      <Footer />
    </div>
  );
};
