import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div>
      {" "}
      <header className="z-10 fixed top-0 left-0 right-0 w-full h-[80px] mb-5 flex justify-between py-3 px-3 border border-[#33353f] bg-[#121212] bg-opacity-100  items-center">
        <h1 className="text-2xl sm:text-5xl font-bold">
          <Link to={"/"} smooth duration={500} className="cursor-pointer">
            LOGO
          </Link>
        </h1>
        <nav>
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer">
              <Link >
                About
              </Link>
            </li>
            <li className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer">
              <Link >
                Projects
              </Link>
            </li>
            <li className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer">
              <Link >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
