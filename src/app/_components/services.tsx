import Image from "next/image";

import CTAButton from "@/app/_components/cta-button";

const services = [
  {
    title: "Enable",
    description:
      "Learn how to safely integrate Generative AI into your application, workflows, and processes to enable your teams to leverage the power of Generative AI.",
    image: "/assets/images/services/enable.png",
    link: "/services/ai-enablement",
    cta: "Enable your Apps",
  },
  {
    title: "Educate",
    description:
      "Expand your teams' capabilities with Large Language Model (LLM) training, workshops, and resources tailored to their experience level and needs.",
    image: "/assets/images/services/educate.png",
    link: "/services/llm-education",
    cta: "Educate your Team",
  },
  {
    title: "Empower",
    description:
      "Reach your customers with engaging developer-focused content, events, and open-source tooling that prioritizes developer experience.",
    image: "/assets/images/services/engage.png",
    link: "/services/user-empowerment",
    cta: "Empower your Users",
  },
];

export default function Services() {
  const renderServices = () => {
    return services.map((service) => (
      <li
        className="flex flex-col gap-10 w-full h-full mb-6"
        key={service.title}
      >
        <h2 className="text-4xl font-bold">{service.title}</h2>
        <a href={service.link} className="">
          <img
            src={service.image}
            alt=""
            width="100%"
            height="auto"
            className="opacity-50 transition-all duration-300 ease-in-out rounded-sm border-2 border-neutral-800 hover:border-neutral-500 glitch-effect-on-hover grayscale-[60%] hover:grayscale-0 hover:opacity-100"
          />
        </a>
        <p className="text-lg">{service.description}</p>
        <div className="mt-auto">
          <CTAButton cta={service.cta} url={service.link} />
        </div>
      </li>
    ));
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <h3 className="text-xl font-bold text-gray-500">
        Human-Centered Services
      </h3>
      <ol className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
        {renderServices()}
      </ol>
    </div>
  );
}
