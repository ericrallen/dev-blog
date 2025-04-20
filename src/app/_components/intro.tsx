"use client";

import { useIsClient } from "usehooks-ts";

import Subtitle from "@/app/_components/subtitle";
import Header from "@/app/_components/header";

export function Intro() {
  const isClient = useIsClient();

  return (
    <section className="flex flex-col gap-20 pt-8 w-full">
      <Header />

      {isClient ? (
        <Subtitle />
      ) : (
        <h4 className="text-4xl text-gray-400">
          Human-centered software for an AI-haunted world.
        </h4>
      )}
    </section>
  );
}

export default Intro;
