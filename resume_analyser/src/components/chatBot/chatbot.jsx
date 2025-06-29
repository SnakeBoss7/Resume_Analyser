import { FaFacebookMessenger, FaBolt ,FaLightbulb,FaStar,FaChartLine} from "react-icons/fa";
import React, { useState } from "react";
export const Chatbot = ({job_role ,ats}) => {
  const [ischatting, setIschatting] = useState(true);

  return (
    <div class="contain">
      <div className="flex items-center mb-16 ">
        <FaFacebookMessenger className="text-xl mr-2" />
        <h1 className="mr-5 text-2xl font-bold tracking-tight">
          AI Carrer Coach
        </h1>
        <div class="live flex text-xs border border-green-600 rounded-xl px-2 text-green-600 hover:bg-green-600 hover:text-white tracking-tight items-center">
          <FaBolt className="text-xs" />
          Live
        </div>
      </div>
      {ischatting ? (
        <>
          <h1 className="text-xl text-gray-600 font-bold tracking-tight  text-center w-full">Ask me anything about your resume</h1>
          <h2 className="text-sm font-bold text-gray-400 tracking-tight  text-center w-full mb-6">
            I can help you improve specific sections, suggest keywords, or
            answer career questions.
          </h2>
          <div class="chat_suggestions flex flex-col gap-3">
            <h2 className="text-sm border border-gray-300 py-2 px-2 hover:border-gray-500 hover:cursor-pointer rounded-lg flex items-center gap-1"> <FaChartLine  className="text-gray-500 "   /> How can i take my ATS from to 90+</h2>
            <h2 className="text-sm border border-gray-300 py-2 px-2 hover:border-gray-500 hover:cursor-pointer rounded-lg flex items-center gap-1"> <FaStar  className="text-gray-500 "   /> What more skills should I add for </h2>
            <h2 className="text-sm border border-gray-300 py-2 px-2 hover:border-gray-500 hover:cursor-pointer rounded-lg flex items-center gap-1"> <FaLightbulb className="text-gray-500 " /> Where can I apply for </h2>
          </div>
          <div class="playground min-h-[300px]">

          </div>

        </>
      ) : (
        <>
                  <div class="playground min-h-[300px]">

          </div></>
      )}
      <div class="input w-full">
        <input type="text" className="w-[90%] border border-gray-600 px-2 px-3 h-8 rounded-lg"/>
        <button></button>
      </div>
    </div>
  );
};
