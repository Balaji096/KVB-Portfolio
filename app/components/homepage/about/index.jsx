import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

function AboutSection() {
  const aboutRef = useRef(null);
  const [showTypewriter, setShowTypewriter] = useState(true);

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
    <section ref={aboutRef}>
      {showTypewriter ? (
        <Typewriter
          words={[
            "My name is K.Venkata Balaji. I am a passionate Computer Science graduate skilled in Python, Web Development, and Project Development. I enjoy building smart, user-friendly projects that solve real-world problems and enhance user experiences. From developing intelligent voice bots to creating responsive, dynamic websites, I love turning ideas into impactful digital solutions. My work combines clean design, efficient code, and a focus on usability. I&apos;m always exploring new technologies and pushing myself to learn and grow. Driven by curiosity and innovation, I&apos;m excited to contribute to projects that make a difference.",
          ]}
          loop={1}
          typeSpeed={20}
        />
      ) : null}
    </section>
  );
}

export default AboutSection;
