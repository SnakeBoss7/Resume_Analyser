import { FaPaperPlane } from "react-icons/fa";
import {
  FaFacebookMessenger,
  FaBolt,
  FaLightbulb,
  FaStar,
  FaChartLine,
} from "react-icons/fa";
import React, { useState } from "react";
export const Chatbot = ({ job_role, ats }) => {
  const [ischatting, setIschatting] = useState(false);
  const [preChat, setPreChat] = useState('');
  const [chatResponse,setChatResponse] = useState(''); 
  const [message,setMessage] = useState([
    {
        role: "user",
        content: "are you oke",
    },
    {
        role: "system",
        content: "yes completely fine mf",
    }]);
    const handleChat = async()=>
        {
            if(preChat === '')
                {
                    return;
                }
            setIschatting(true);
            setMessage((prev) => [...prev,{role: "user", content: preChat}]);

        }
  return (
    <div class="contain w-full">
      <div className="flex  items-center mb-16 ">
        <FaFacebookMessenger className="text-xl mr-2" />
        <h1 className="mr-5 text-2xl font-bold tracking-tight">
          AI Carrer Coach
        </h1>
        <div class="live flex text-xs border border-green-600 rounded-xl px-2 text-green-600 hover:bg-green-600 hover:text-white tracking-tight items-center">
          <FaBolt className="text-xs" />
          Live
        </div>
      </div>
      {!ischatting ? (
        <>
          <h1 className="text-xl text-gray-600 font-bold tracking-tight  text-center w-full">
            Ask me anything about your resume
          </h1>
          <h2 className="text-sm font-bold text-gray-400 tracking-tight  text-center w-full mb-6">
            I can help you improve specific sections, suggest keywords, or
            answer career questions.
          </h2>
          <div class="chat_suggestions flex flex-col gap-3">
            <button onClick={(e) => setPreChat(e.target.innerText)} className="text-sm border border-gray-300 py-2 px-2 hover:border-gray-500 hover:cursor-pointer rounded-lg flex items-center gap-1">
              {" "}
              <FaChartLine className="text-gray-500 " /> How can i take my ATS
              from to 90+
            </button>
            <button onClick={(e) => setPreChat(e.target.innerText)}  className="text-sm border border-gray-300 py-2 px-2 hover:border-gray-500 hover:cursor-pointer rounded-lg flex items-center gap-1">
              {" "}
              <FaStar className="text-gray-500 " /> What more skills should I
              add for{" "}
            </button>
            <button onClick={(e) => setPreChat(e.target.innerText)}  className="text-sm border border-gray-300 py-2 px-2 hover:border-gray-500 hover:cursor-pointer rounded-lg flex items-center gap-1">
              {" "}
              <FaLightbulb className="text-gray-500 " /> Where can I apply for{" "}
            </button>
          </div>
          <div class="playground min-h-[300px]">
            
          </div>
        </>
      ) : (
        <>
          <div class="playground min-h-[300px] w-full">
            {message && 
            <>
                {message.map((mess,i)=>
                {
                    return (
                      <div
                        key={i}
                        className={`w-full flex ${
                          mess.role === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`message  tracking-tight text-[15px] font-[600] p-4  rounded-xl  ${
                            mess.role === "user"
                              ? "text-end bg-gradient-to-r from-purple-500 via-primary_lg  to-primary text-white"
                              : "text-start bg-primary text-white "
                          } `}
                        >
                          <p>{mess.content}</p>
                        </div>
                      </div>
                    );
                })}
            </>}
          </div>
        </>
      )}
      <div class="input w-full flex items-center gap-3">
   <input
  type="text"
  className="border border-gray-400 w-[95%] rounded-lg 
             outline-none focus:outline-blue-500 focus:outline-2 focus:outline-offset-2 
             transition-[outline-offset,outline-width,outline-color] duration-200 ease-in-out p-2 " placeholder="Type your message here..." value={preChat} onChange={(e)=> setPreChat(e.target.value)}
/>

        <button onClick={handleChat} className="h-10 px-3 bg-primary rounded-lg">
          <FaPaperPlane className="text-white" />
        </button>
      </div>
    </div>
  );
};
