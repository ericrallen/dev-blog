import Script from "next/script";
import Container from "../_components/container";
import Header from "../_components/header";

export default async function Contact() {
  return (
    <main>
      <Container>
        <Header />
        <div className="flex flex-col gap-4 w-full h-full">
          <iframe
            data-tally-src="https://tally.so/embed/w7P6vz?alignLeft=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="579"
            title="Work with Us"
          ></iframe>
          <Script
            strategy="lazyOnload"
            src="https://tally.so/widgets/embed.js"
          />
        </div>
      </Container>
    </main>
  );
}
