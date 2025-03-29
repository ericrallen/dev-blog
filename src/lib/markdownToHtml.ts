import { unified } from "unified";
import html from "remark-html";
import gfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import rehypeShiki from "@shikijs/rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkVideo from "remark-video";

export default async function markdownToHtml(markdown: string) {
  let result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkDirective)
    .use(remarkVideo, {
      publicDir: "./assets",
    })
    .use(gfm)
    .use(html, { sanitize: false })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeShiki, { theme: "tokyo-night" })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
