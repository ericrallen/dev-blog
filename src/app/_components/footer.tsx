import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <p>
            The content of this website is licensed under the&nbsp;
            <a href="https://creativecommons.org/licenses/by-nc/4.0/">
              <abbr title="Attribution-NonCommercial 4.0 International license">CC BY-NC 4.0</abbr>
            </a>
            , and the underlying source code used to format and display this site, as well as any code included in the content, is
            licensed under the&nbsp;
            <a href="https://github.com/ericrallen/dev-blog/blob/main/LICENSE">
              <abbr title="Massachusetts Institute of Technology">MIT</abbr>
            </a>
            &nbsp;license unless otherwise stated directly.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
