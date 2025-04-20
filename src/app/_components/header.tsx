"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <h2 className="flex flex-row items-center pt-8 w-full">
      <Link
        href="/"
        className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tighthover:underline no-underline text-slate-100 hover:text-amber-600"
      >
        Interweb Alchemy
      </Link>
      <nav className="ml-auto flex flex-row gap-6">
        <button
          onClick={toggleMenu}
          className="text-neutral-200 border border-neutral-400 rounded-sm px-2 py-1 hover:text-amber-600 hover:underline hover:border-amber-600 transition-all duration-300 ease-in-out"
        >
          Menu
        </button>
        <div
          className={`${
            isOpen ? "right-0" : "right-[-101%]"
          } flex flex-col gap-4 text-right p-8 lg:px-24 text-2xl absolute top-20 border-t border-l border-b border-neutral-400 h-[80%] w-[90%] lg:w-[50%] lg:h-[50%] bg-neutral-900 transition-all duration-500 lg:duration-800 ease-in-out`}
        >
          <Link
            href="/blog"
            className="hover:underline no-underline text-slate-100 hover:text-amber-600"
          >
            Blog
          </Link>
          <Link
            href="/services/ai-enablement"
            className="hover:underline no-underline text-slate-100 hover:text-amber-600"
          >
            AI Enablement
          </Link>
          <Link
            href="/services/llm-education"
            className="hover:underline no-underline text-slate-100 hover:text-amber-600"
          >
            LLM Education
          </Link>
          <Link
            href="/services/user-empowerment"
            className="hover:underline no-underline text-slate-100 hover:text-amber-600"
          >
            User Empowerment
          </Link>
          <Link
            href="/contact"
            className="hover:underline no-underline text-slate-100 hover:text-amber-600"
          >
            Contact
          </Link>
        </div>
      </nav>
    </h2>
  );
};

export default Header;
