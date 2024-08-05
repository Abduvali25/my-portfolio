"use client";

import React, { useState } from "react";
import Image from "next/image";

const skillsObj = {
  skills: [
    "HTML",
    "CSS",
    "JS",
    "Git/Github",
    "Sass",
    "Tailwind",
    "BEM",
    "React",
    "Next.js",
  ],
  education: ["Najot Ta'lim markazi"],
  certificates: [
    "AWS Cloud Practitioner",
    "Google Professional Cloud Developer",
    "N59 N1 student",
  ],
};

export default function AboutSection() {
  const [selectedOption, setSelectedOption] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const handleOptionChange = (option, button) => {
    setSelectedOption(option);
    setActiveButton(button);
  };

  return (
    <main id="about" className=" w-full min-h-screen pt-10 items-center">
      <section className="sm:w-[1250px] sm:m-auto sm:justify-center sm:flex sm:gap-[300px] pt-[80px]">
        <div className="">
          <Image
            src={"/kevin-bhagat-548zkUvqmlw-unsplash.jpg"}
            width={600}
            height={600}
            alt="PC image"
          />
        </div>
        <div className="w-[400px]">
          <h1 className="font-bold text-4xl text-white mb-4">About Me</h1>
          <p className="text-base mb-5">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex gap-4">
            <button
              className={`styledButton text-white font-bold py-2 px-4 rounded ${
                activeButton === "skills" ? "border-b-4 border-purple-500" : ""
              }`}
              onClick={() => handleOptionChange("skills", "skills")}
            >
              Skills
            </button>
            <button
              className={`styledButton text-white font-bold py-2 px-4 rounded ${
                activeButton === "education"
                  ? "border-b-4 border-purple-500"
                  : ""
              }`}
              onClick={() => handleOptionChange("education", "education")}
            >
              Education
            </button>
            <button
              className={`styledButton text-white font-bold py-2 px-4 rounded ${
                activeButton === "certificates"
                  ? "border-b-4 border-purple-500"
                  : ""
              }`}
              onClick={() => handleOptionChange("certificates", "certificates")}
            >
              Certificates
            </button>
          </div>
          <div>
            {selectedOption && (
              <ul className="list-disc mt-4">
                {skillsObj[selectedOption].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
