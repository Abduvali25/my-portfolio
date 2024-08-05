import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  return (
    <main id="contact" className="grid grid-cols-12 pt-10 min-h-96 mt-10">
      <article className="col-span-6">
        <h3 className="text-xl font-bold text-white my-2">Lets Connect</h3>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Im currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I ll try my best
          to get back to you!
        </p>
        <div className="flex gap-4">
          <SiGithub className="w-[48px] h-[48px]" />
          <FaLinkedinIn className="w-[48px] h-[48px]" />
        </div>
      </article>
      <form className="col-span-6 flex flex-col gap-5">
        <div>
          <label
            className="text-white block mb-2 text-sm font-medium"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
            type="text"
            name="email"
            id=""
            placeholder="jacob@google.com"
          />
        </div>
        <div>
          <label
            className="text-white block mb-2 text-sm font-medium"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id=""
            placeholder="Just saying hi"
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
          />
        </div>
        <div>
          <label
            className="text-white block mb-2 text-sm font-medium"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            placeholder="lets talk about..."
            name="message"
            id=""
            className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
          ></textarea>
        </div>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
          Send Message
        </button>
      </form>
    </main>
  );
}
