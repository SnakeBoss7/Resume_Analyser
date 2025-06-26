import React from 'react';
import ThemeToggle from './theme_toggle';
import { Link } from 'react-router-dom';
import { FaUsers,FaPagelines } from 'react-icons/fa';
export default function Header({pages,links,icons}) {
  return (
    <header className="w-full mb-10 flex justify-between items-center p-4 glass-card border-b-1 border-black-600">
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
      className="h-full tracking-tight font-semibold flex justify-center text-gray-600 items-center gap-2 font-bold"
    >
      {Icon && < Icon className="text-xl text-gray-600" />}
      {page}
    </Link>
  );
})}
        <button className="text-bg_c font-bold border border-bg_c  px-4 py-2 rounded-md hover:bg-bg_c hover:text-white">
          Sign In
        </button>
      </div>
    </header>
  );
}