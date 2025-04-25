// At the top of your page.js file
"use client"; // This marks the file as a client-side component

import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
}

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Fetch blog data on the client-side only
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getData();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();

    // Set isClient to true after the first render to enable client-side code
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/*  <Blog blogs={blogs} />Uncomment this once data is fetched */}
      <ContactSection />
    </div>
  );
};
