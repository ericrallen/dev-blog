"use client";

import { useIsClient } from "usehooks-ts";

import Subtitle from "@/app/_components/subtitle";

export function Intro() {
  const isClient = useIsClient();

  return (
    <section className="flex flex-col lg:flex-row gap-8 pt-8 lg:items-center w-full">
      <h1 className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
        Interweb Alchemy
      </h1>
      {isClient ? (
        <Subtitle />
      ) : (
        <h4 className="text-xl text-gray-400 ml-auto">
          Human-centered software for an AI-haunted world.
        </h4>
      )}
    </section>
  );
}

export default Intro;
