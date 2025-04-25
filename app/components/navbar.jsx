"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const defaultColor = "#16f2b3"; // default green color
  const [hoverColor, setHoverColor] = useState(defaultColor);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleMouseEnter = () => {
    setHoverColor(generateRandomColor());
  };

  const handleMouseLeave = () => {
    setHoverColor(defaultColor); // revert to default green
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 px-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-4xl font-extrabold tracking-widest glow-text"
            style={{
              color: hoverColor
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="typing">KVB </span>
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">MYSERVICES</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .glow-text {
          text-shadow:
            0 0 5px ${hoverColor},
            0 0 10px ${hoverColor},
            0 0 20px ${hoverColor},
            0 0 40px ${hoverColor},
            0 10px 15px rgba(0, 0, 0, 0.2),
            0 20px 30px rgba(0, 0, 0, 0.1);
        }

        @keyframes typingEffect {
          0% {
            width: 0;
          }
          9.09% {
            width: 4ch;
          }
          100% {
            width: 4ch;
          }
        }

        .typing {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typingEffect 33s steps(4, end) infinite;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
