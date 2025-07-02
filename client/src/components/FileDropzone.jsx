// FileDropzone.js
import React, { useState, useRef } from "react";
import { FaArrowRight,FaUpload } from "react-icons/fa";
import styled from "styled-components";

export default function FileDropzone({ onFileSelected ,heading,subheading,button,height,width}) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);


  const handleDrag = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    } 
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelected(file); // <-- You can send this to the backend from parent
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelected(file); // <-- You can send this to the backend from parent
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={`mt-10 w-full h-[${height}] md:h-300px text-center rounded-2xl flex justify-center items-center`} style={{backgroundColor: "#E5EBF2"}} >
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
        className={` md:w-full w-full h-3/4 md:h-full box-border flex  justify-center items-center hover:border-blue-700 tansition-all duration-300  border-[3px] border-dashed transition-colors duration-300  md:p-4 md:py-5 rounded-2xl cursor-pointer text-center ${
          dragActive ? "border-blue-800 bg-blue-50" : "border-gray-400 bg-white"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="*"
          className="hidden"
          onChange={handleChange}
        />
        <div className="text-gray-700 h-full w-full flex flex-col items-center justify-evenly ">
          {selectedFile ? (<>
                 <StyledWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" className="pencil">
        <defs>
          <clipPath id="pencil-eraser">
            <rect height={30} width={30} ry={5} rx={5} />
          </clipPath>
        </defs>
        <circle transform="rotate(-113,100,100)" strokeLinecap="round" strokeDashoffset="439.82" strokeDasharray="439.82 439.82" strokeWidth={2} stroke="currentColor" fill="none" r={70} className="pencil__stroke" />
        <g transform="translate(100,100)" className="pencil__rotate">
          <g fill="none">
            <circle transform="rotate(-90)" strokeDashoffset={402} strokeDasharray="402.12 402.12" strokeWidth={30} stroke="hsl(223,90%,50%)" r={64} className="pencil__body1" />
            <circle transform="rotate(-90)" strokeDashoffset={465} strokeDasharray="464.96 464.96" strokeWidth={10} stroke="hsl(223,90%,60%)" r={74} className="pencil__body2" />
            <circle transform="rotate(-90)" strokeDashoffset={339} strokeDasharray="339.29 339.29" strokeWidth={10} stroke="hsl(223,90%,40%)" r={54} className="pencil__body3" />
          </g>
          <g transform="rotate(-90) translate(49,0)" className="pencil__eraser">
            <g className="pencil__eraser-skew">
              <rect height={30} width={30} ry={5} rx={5} fill="hsl(223,90%,70%)" />
              <rect clipPath="url(#pencil-eraser)" height={30} width={5} fill="hsl(223,90%,60%)" />
              <rect height={20} width={30} fill="hsl(223,10%,90%)" />
              <rect height={20} width={15} fill="hsl(223,10%,70%)" />
              <rect height={20} width={5} fill="hsl(223,10%,80%)" />
              <rect height={2} width={30} y={6} fill="hsla(223,10%,10%,0.2)" />
              <rect height={2} width={30} y={13} fill="hsla(223,10%,10%,0.2)" />
            </g>
          </g>
          <g transform="rotate(-90) translate(49,-30)" className="pencil__point">
            <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)" />
            <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)" />
            <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)" />
          </g>
        </g>
      </svg>
    </StyledWrapper></>
          ) : (
            <>
              {heading?<><FaUpload className="h-14 w-14 bg-blue-100 p-3 m-5 rounded-3xl text-blue-500 mb-4" />
              <h1 className="md:text-3xl text-2xl font-bold">{heading}</h1></>:<></>}
              <span className="text-gray-400 text-sm tracking-tight mt-3 mx-1">
                {subheading}
              </span>
              <span className="text-gray-400  text-sm tracking-tight mb-3 mx-2">
                Supported formats: PDF, DOCX, JPEG
              </span>
              <button className="flex items-center gap-2 border-2 px-5 mb-5 rounded-xl py-3 transition-all duration-200 bg-blue-500 text-bold text-lg text-white hover:bg-blue-300">
                {button} <FaArrowRight />{" "}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
const StyledWrapper = styled.div`
  .pencil {
    display: block;
    width: 10em;
    height: 10em;
  }

  .pencil__body1,
  .pencil__body2,
  .pencil__body3,
  .pencil__eraser,
  .pencil__eraser-skew,
  .pencil__point,
  .pencil__rotate,
  .pencil__stroke {
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .pencil__body1,
  .pencil__body2,
  .pencil__body3 {
    transform: rotate(-90deg);
  }

  .pencil__body1 {
    animation-name: pencilBody1;
  }

  .pencil__body2 {
    animation-name: pencilBody2;
  }

  .pencil__body3 {
    animation-name: pencilBody3;
  }

  .pencil__eraser {
    animation-name: pencilEraser;
    transform: rotate(-90deg) translate(49px,0);
  }

  .pencil__eraser-skew {
    animation-name: pencilEraserSkew;
    animation-timing-function: ease-in-out;
  }

  .pencil__point {
    animation-name: pencilPoint;
    transform: rotate(-90deg) translate(49px,-30px);
  }

  .pencil__rotate {
    animation-name: pencilRotate;
  }

  .pencil__stroke {
    animation-name: pencilStroke;
    transform: translate(100px,100px) rotate(-113deg);
  }

  /* Animations */
  @keyframes pencilBody1 {
    from,
  	to {
      stroke-dashoffset: 351.86;
      transform: rotate(-90deg);
    }

    50% {
      stroke-dashoffset: 150.8;
   /* 3/8 of diameter */
      transform: rotate(-225deg);
    }
  }

  @keyframes pencilBody2 {
    from,
  	to {
      stroke-dashoffset: 406.84;
      transform: rotate(-90deg);
    }

    50% {
      stroke-dashoffset: 174.36;
      transform: rotate(-225deg);
    }
  }

  @keyframes pencilBody3 {
    from,
  	to {
      stroke-dashoffset: 296.88;
      transform: rotate(-90deg);
    }

    50% {
      stroke-dashoffset: 127.23;
      transform: rotate(-225deg);
    }
  }

  @keyframes pencilEraser {
    from,
  	to {
      transform: rotate(-45deg) translate(49px,0);
    }

    50% {
      transform: rotate(0deg) translate(49px,0);
    }
  }

  @keyframes pencilEraserSkew {
    from,
  	32.5%,
  	67.5%,
  	to {
      transform: skewX(0);
    }

    35%,
  	65% {
      transform: skewX(-4deg);
    }

    37.5%, 
  	62.5% {
      transform: skewX(8deg);
    }

    40%,
  	45%,
  	50%,
  	55%,
  	60% {
      transform: skewX(-15deg);
    }

    42.5%,
  	47.5%,
  	52.5%,
  	57.5% {
      transform: skewX(15deg);
    }
  }

  @keyframes pencilPoint {
    from,
  	to {
      transform: rotate(-90deg) translate(49px,-30px);
    }

    50% {
      transform: rotate(-225deg) translate(49px,-30px);
    }
  }

  @keyframes pencilRotate {
    from {
      transform: translate(100px,100px) rotate(0);
    }

    to {
      transform: translate(100px,100px) rotate(720deg);
    }
  }

  @keyframes pencilStroke {
    from {
      stroke-dashoffset: 439.82;
      transform: translate(100px,100px) rotate(-113deg);
    }

    50% {
      stroke-dashoffset: 164.93;
      transform: translate(100px,100px) rotate(-113deg);
    }

    75%,
  	to {
      stroke-dashoffset: 439.82;
      transform: translate(100px,100px) rotate(112deg);
    }
  }`;