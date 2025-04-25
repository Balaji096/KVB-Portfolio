"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";

function AboutSection() {
  const [showTypewriter, setShowTypewriter] = useState(true);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Restart the typewriter effect
          setShowTypewriter(false);
          setTimeout(() => setShowTypewriter(true), 100); // short delay before re-typing
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" ref={aboutRef} className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed">
            {showTypewriter ? (
              <Typewriter
                words={[
                  "My name is K.Venkata Balaji. I am a passionate Computer Science graduate skilled in Python, Web Development, and Project Development. I enjoy building smart, user-friendly projects that solve real-world problems and enhance user experiences. From developing intelligent voice bots to creating responsive, dynamic websites, I love turning ideas into impactful digital solutions. My work combines clean design, efficient code, and a focus on usability. I'm always exploring new technologies and pushing myself to learn and grow. Driven by curiosity and innovation, I'm excited to contribute to projects that make a difference.",
                ]}
                loop={1}
                typeSpeed={20}
                deleteSpeed={20}
                delaySpeed={1000}
                cursor
                cursorStyle="_"
              />
            ) : null}
          </p>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="K Venkata Balaji"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
