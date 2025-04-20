import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import CTAButton from "@/app/_components/cta-button";

export default async function AIEnablement() {
  return (
    <main>
      <Container>
        <Header />
        <div className="flex flex-col gap-12 w-full h-full pb-20">
          <div className="flex flex-col gap-4 w-full h-full">
            <div className="flex flex-row">
              <h1 className="text-4xl font-bold">AI Enablement</h1>
              <div className="hidden lg:flex ml-auto">
                <CTAButton url="/contact" cta="Enable Your Apps" />
              </div>
            </div>
            <div className="w-full h-full aspect-video">
              <iframe
                className="w-full h-full"
                width="100%"
                height="auto"
                src="https://www.youtube-nocookie.com/embed/lIur4laFbz4?rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-xl">
            We offer a range of services to help you and your team integrate
            Generative AI into your applications, workflows, and processes.
          </p>
          <div className="flex">
            <CTAButton url="/contact" cta="Enable Your Apps" />
          </div>
        </div>
      </Container>
    </main>
  );
}
