import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-700 pt-10 pb-5">
      <Container>
        <div className="flex flex-col items-center text-xs gap-20 text-neutral-400">
          <p>
            The content of this website is licensed under the&nbsp;
            <a href="https://creativecommons.org/licenses/by-nc/4.0/">
              <abbr title="Attribution-NonCommercial 4.0 International license">
                CC BY-NC 4.0
              </abbr>
            </a>
            , and the underlying source code used to format and display this
            site, as well as any code included in the content, is licensed under
            the&nbsp;
            <a href="https://github.com/ericrallen/dev-blog/blob/main/LICENSE">
              <abbr title="Massachusetts Institute of Technology">MIT</abbr>
            </a>
            &nbsp;license unless otherwise stated directly.
          </p>
          <div className="rc-scout "></div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
