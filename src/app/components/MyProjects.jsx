"use client";

import React, { act, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MyProjectsList = [
  {
    id: 1,
    title: "My exam's project",
    link: "http://localhost:5173/products",
    img: "/rdkl.png",
    type: "web",
  },
  {
    id: 2,
    title: "In our cafe",
    link: "http://127.0.0.1:5500/Abduvali25%202/index.html",
    img: "/foods.png",
    type: "mobile",
  },
  {
    id: 4,
    title: "Todo app",
    link: "http://localhost:5173/",
    img: "/Todo.png",
    type: "web",
  },
  {
    id: 5,
    title: "Todo2 App",
    link: "https://07-12-2024.vercel.app/",
    img: "/image.png",
    type: "web",
  },
];

export default function MyProjects() {
  const [activeType, setActiveType] = useState("all");

  const filteredProjects = MyProjectsList.filter((project) => {
    if (activeType === "all") {
      return true;
    }
    return project.type === activeType;
  });

  return (
    <main id="projects" className="w-full min-h-screen">
      <h1 className="text-center font-bold text-4xl mb-5">My Projects</h1>
      <div className="flex gap-3 justify-center mt-[80px] mb-2">
        <button
          className={`text-white border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
            activeType === "all" ? "" : ""
          }`}
          onClick={() => setActiveType("all")}
        >
          All
        </button>
        <button
          className={`text-white border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
            activeType === "all" ? "" : ""
          }`}
          onClick={() => setActiveType("web")}
        >
          Web
        </button>
        <button
          className={`text-white border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
            activeType === "all" ? "" : ""
          }`}
          onClick={() => setActiveType("mobile")}
        >
          Mobile
        </button>
      </div>
      <section className="flex flex-col sm:grid sm:grid-cols-3 space-y-5 items-center pb-5">
        {filteredProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={project.id}
            className="w-[400px] h-[330px] col-span-1"
          >
            <Image
              src={project.img}
              width={400}
              height={400}
              alt={project.title}
              className="rounded-[10px]"
            />
            <Link
              href={project.link}
              target="_blank"
              className="inline-block my-2 font-bold hover:text-gray-400 text-xl"
            >
              {project.title}
            </Link>
            <p>👆 Go To My Work :)</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
