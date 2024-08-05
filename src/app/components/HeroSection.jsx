import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <main
      id="/"
      className=" w-full min-h-screen pt-[200px] gap-10 grid grid-cols-1 sm:grid-cols-12 px-10"
    >
      {" "}
      <motion.article
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:col-span-8"
      >
        <span className=" font-bold text-[22px] sm:font-extrabold sm:text-[90px] bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent block mb-2">
          Hello Im a,
        </span>
        <TypeAnimation
          sequence={["Abduvali", 1000, "Programmer", 1000, "Web-Developer", 1000]}
          wrapper="span"
          style={{ color: "white", fontWeight: "700", fontSize: "90px" }}
          speed={50}
          repeat={Infinity}
        />
        <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl mt-4 pl-2">
          Im From Uzbekistan. Web-Development Full-stack developer. Check my
          portfolio and <br /> for All Thanks
        </p>
        <div className="flex gap-4">
          <button className=" w-[120px] h-[45px] rounded-full bg-gradient-to-br from-purple-400 to-pink-700">
            <span className="hover:bg-[#121212] px-7 py-2.5 rounded-full">
              Hire Me
            </span>
          </button>
          <button className=" w-[150px] h-[45px] rounded-full bg-gradient-to-br from-purple-400 to-pink-700 ">
            <span className="bg-black px-5 py-2.5 rounded-full hover:bg-transparent">
              Download CV
            </span>
          </button>
        </div>
      </motion.article>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:col-span-4"
      >
        <Image
          src={"/developer.jpg"}
          alt="developer image"
          width={400}
          height={400}
          style={{ color: "transparent", borderRadius: "50%" }}
        />
      </motion.div>
    </main>
  );
}
