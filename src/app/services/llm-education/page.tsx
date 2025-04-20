import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import CTAButton from "@/app/_components/cta-button";

export default async function LLMEducation() {
  return (
    <main>
      <Container>
        <Header />
        <div className="flex flex-col gap-12 w-full h-full pb-20">
          <div className="flex flex-col gap-4 w-full h-full">
            <div className="flex flex-row justify-between">
              <h1 className="text-4xl font-bold">LLM Education</h1>
              <CTAButton url="/contact" cta="Educate your Team" />
            </div>
            <div className="w-full h-full aspect-video">
              <iframe
                className="w-full h-full"
                width="100%"
                height="auto"
                src="https://www.youtube-nocookie.com/embed/xqGsJqieb8E?rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-xl">
            We offer a range of services to upskill your team on Large Language
            Models (LLMs) and Generative AI, including topics like how it works,
            how to integrate it into workflows, and how to stay secure while
            using Generative AI.
          </p>
          <p className="text-xl">
            Our educational material meets you where you are and is designed to
            accomodate all levels of technical background and familiarity with
            LLMs.
          </p>
          <div className="flex">
            <CTAButton url="/contact" cta="Educate your Team" />
          </div>
        </div>
      </Container>
    </main>
  );
}
