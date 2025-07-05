import React, { useState } from "react";
import { useEffect } from "react";
import ThemeToggle from "./theme_toggle";
import { Link } from "react-router-dom";
// import { FaUsers,FaPagelines } from 'react-icons/fa';
import Checkbox from "./hamburger";
export default function Header({ pages, links, icons }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const color = [
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-orange-600",
  ];
  const toggleNav = () => {
    console.log("hello");
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setShow(true);
        return;
      }
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && show) {
          setShow(false);
        } else if (window.scrollY < lastScrollY && !show) {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, show, lastScrollY]);

  return (
    <header
      className={`w-full transition-all duration-300 items-center p-4 glass-card border-b-1 ${
        show ? "translate-y-0" : "translate-y-[-100px]"
      }  border-black-600 flex flex-col ${isMenuOpen ? "h-[100vh]" : ""} `}>
      <div className=" mx-auto container w-full flex justify-between ">
        <div className="left text-3xl font-semibold tracking-tight flex gap-2 items-center">
          <span className="text-gray-900">Resume</span>
          <span className="font-mono text-primary text-4xl">AI</span>
        </div>
        <div className="right flex items-center gap-5">
          {pages.map((page, idx) => {
            const Icon = icons && icons[idx];
            return (
              <Link
                key={idx}
                to={`/${links[idx]}`}
                className="h-full lg:flex hidden tracking-tight font-semibold  justify-center text-gray-600 items-center gap-2 font-bold"
              >
                {Icon && <Icon className="text-xl text-gray-600" />}
                {page}
              </Link>
            );
          })}
          <Link
            className="text-bg_c transtition-all ease-in-out duration-400 font-bold border  border-bg_c  px-4 py-2 rounded-md  hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-500 hover:to-purple-600 hover:text-white hover:border-white"
            to="/signIn"
          >
            Get Started
          </Link>
          <Checkbox toggle={toggleNav} isOpen={isMenuOpen} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="div  mt-20 flex flex-col justify-between gap-5 h-[100%] w-full ">
          <div className="h-fit flex flex-col gap-7 ">
            {pages.map((page, idx) => {
              const Icon = icons && icons[idx];
              return (
                <Link
                  key={idx}
                  to={`/${links[idx]}`}
                  className="h-fit flex px-10 gap-12  tracking-tight   text-2xl  text-black items-center gap-2 font-bold"
                >
                  {Icon && (
                    <Icon
                      className={`text-5xl rounded-2xl text-white p-2 ${color[idx]}`}
                    />
                  )}
                  {page}
                </Link>
              );
            })}
          </div>
          <div class="div h-1 bg-gradient-to-r from-primary  to-purple-600"></div>
        </div>
      )}
    </header>
  );
}
