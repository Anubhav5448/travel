"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex  items-center justify-between   py-8">
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute  top-0 right-0 p-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="flex gap-16">
            <Button className="bg-white text-black hover:bg-white">
              Login
            </Button>
            <Button className="hover:bg-black">SignUp</Button>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/about">Home</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/portfolio">About</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/contact">Destination</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/contact">Tour</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/contact">Blog</a>
            </li>
          </ul>
        </div>
      </section>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background:  #f6f4f0 ;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
