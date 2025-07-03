import { FaPaperPlane } from "react-icons/fa";
import {
  FaFacebookMessenger,
  FaBolt,
  FaLightbulb,
  FaStar,
  FaChartLine,
} from "react-icons/fa";
import axios from "axios";
import Loader from "../loader/small_laoder";
import React, { useState } from "react";
import { useProvider } from "../../context/user_data";
const apiUrl = process.env.REACT_APP_API_URL;

export const Chatbot = ({ parsedText, ats,role }) => {
  const [ischatting, setIschatting] = useState(false);
  const [preChat, setPreChat] = useState('');
  const [chatIncoming, setChatIncoming] = useState(true);
  const {fileName} = useProvider();
  const [chatResponse,setChatResponse] = useState(''); 
  const [message,setMessage] = useState([
    {
      role: "user",
      content: `yooooooo beyach`,
    }
    ,
        {
      role: "system",
      content: `Welcome to AI Carrer Coach, ${fileName}! I'm here to help you analyze your resume and provide you with personalized advice based on your skills and experience.`,
    }
  ]);
  const delay_funt = async () =>
    {
      return new Promise((resolve) => {
      setTimeout(resolve, 10000);})
    }
    const handleChat = async()=>
        {
            if(preChat === '')
                {
                  return;
                }
                setChatIncoming(true);
                setMessage((prev) => [...prev,{role: "user", content: preChat}]);
                setPreChat('');
                setIschatting(true);
                try
                {
                  let res = await axios.post(`${apiUrl}api/resume/query`,{parsedText,query:preChat});
                  console.log(res)
                  setChatIncoming(false);
                    setMessage((prev) => [...prev,{role: "system", content: res.data.response}]);
                }
                catch(err){
                  console.log(err);
                }
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
              from {ats} to 90+
            </button>
            <button onClick={(e) => setPreChat(e.target.innerText)}  className="text-sm border border-gray-300 py-2 px-2 hover:border-gray-500 hover:cursor-pointer rounded-lg flex items-center gap-1">
              {" "}
              <FaStar className="text-gray-500 " /> What more skills should I
              add for {role}
            </button>
            <button onClick={(e) => setPreChat(e.target.innerText)}  className="text-sm border border-gray-300 py-2 px-2 hover:border-gray-500 hover:cursor-pointer rounded-lg flex items-center gap-1">
              {" "}
              <FaLightbulb className="text-gray-500 " /> Where can I apply for {role}
            </button>
          </div>
          <div class="playground min-h-[300px]">
            
          </div>
        </>
      ) : (
        <>
          <div class="playground min-h-[300px] w-full max-h-[500px] overflow-scroll">
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
                          className={`message mb-5 tracking-tight text-[15px] font-[500] p-3  rounded-xl  ${
                            mess.role === "user"
                              ? "text-end bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-white"
                              : "text-start bg-primary text-white "
                          } `}
                        >
                          <p>{mess.content}</p>
                        </div>
                      </div>
                    );
                })}
            </>}
            //loader for chat if incoming
                    {chatIncoming && 
                      <div className="text-start bg-primary w-fit text-white message  tracking-tight text-[15px] font-[600] px-8  py-2 rounded-xl">
                        <Loader/>
                      </div>
                    }
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
