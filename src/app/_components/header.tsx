"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useOnClickOutside } from "usehooks-ts";

import IconButton from "@/app/_components/posts/VisualizationLibrary/IconButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // @ts-expect-error the type for the ref isn't handled correctly
  useOnClickOutside(containerRef, () => setIsOpen(false));

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
      <nav className="ml-auto flex flex-row gap-6 z-10">
        <IconButton
          icon={isOpen ? <IconX /> : <IconMenu2 />}
          onClick={toggleMenu}
          label={isOpen ? "Close" : "Menu"}
        />
        <div
          ref={containerRef}
          className={`${
            isOpen ? "right-0" : "right-[-101%]"
          } flex flex-col gap-4 text-right p-8 lg:px-24 text-2xl absolute top-[20%] border-t border-l border-b border-neutral-400 h-[80%] w-[90%] lg:w-[50%] lg:h-[50%] bg-neutral-900 transition-all duration-500 lg:duration-800 ease-in-out`}
        >
          <Link
            href="/"
            className="hover:underline no-underline text-slate-100 hover:text-amber-600"
          >
            Home
          </Link>
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
